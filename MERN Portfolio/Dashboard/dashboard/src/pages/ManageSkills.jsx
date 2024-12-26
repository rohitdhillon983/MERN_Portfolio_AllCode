import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { SpecialLoadingButton } from "./sub-components/SpecialLoadingButton"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { clearAllSkillSliceErrors, deleteSkills, getAllSkills, resetSkillSlice } from "@/slices/skillSlice"
import { toast } from "react-toastify"

export const ManageSkills =()=>{
    const navigateTo = useNavigate();
    const handleBackToHome=()=>{
        navigateTo("/")
    }

    const {skills,loading,error,message}=useSelector((state)=>state.skill)
    const dispatch = useDispatch()

    const[skillId,setSkillId]=useState("")
    const handleskillsDelete=(id)=>{
        setSkillId(id)
        dispatch(deleteSkills(id))
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllSkillSliceErrors())
        }
        if(message){
            toast.success(message);
            dispatch(resetSkillSlice());
            dispatch(getAllSkills())
        }
    },[message,error,loading,dispatch])

    return(
        <>
        <div className="mini-h-[100vh] sm:gap-4 sm:py-4 sm:p-20">
                <Tabs>
                    <TabsContent>
                        <Card>
                            <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center">
                                <CardTitle>Skills</CardTitle>
                                <CardTitle className="cursor-pointer" onClick={()=>handleBackToHome()}>Back To Home</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-7">
                                {skills&&skills.length>0?(
                                    skills.map((even)=>{
                                    return(
                                        <Card key={even._id} className="flex flex-col w-[360px]">
                                            <CardDescription className="text-stone-950 mx-4 mt-4 flex justify-between items-center">
                                                <p className="text-[2rem]">{even.title}</p>
                                                <img width="80px" className="rounded-[50%] border-4" src={even.svg.url} alt="" />
                                            </CardDescription>
                                            <CardDescription className="text-stone-950 flex gap-3 m-4 mt-7 w-[50%]">
                                                {even.proficiency}
                                                <Progress value={even.proficiency}></Progress>
                                            </CardDescription>
                                            
                                            <CardFooter className="justify-end">
                                                {loading&&skillId == even._id?(
                                                    <SpecialLoadingButton></SpecialLoadingButton>
                                                ):(
                                                    <Button className="" onClick={()=>handleskillsDelete(even._id)}>Delete</Button>
                                                )}
                                            </CardFooter>
                                        </Card>
                                    )
                                })):(<CardHeader>No Skill Found!</CardHeader>)}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}