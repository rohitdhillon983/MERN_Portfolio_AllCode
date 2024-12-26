import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { SpecialLoadingButton } from "./sub-components/SpecialLoadingButton";
import { toast } from "react-toastify";
import { clearAllTimelineErrors, deleteTimeline, getAllTimeline, resetTimelineSlice } from "@/slices/timelineSlice";

export const ManageTimeline =()=>{
    const navigateTo = useNavigate();
    const handleBackToHome=()=>{
        navigateTo("/")
       }
    const{loading,error,message,timeline}=useSelector((state)=>state.timeline)
    const dispatch = useDispatch();

    const [timelineId,setTimelineId]=useState("");
    const handleTimelineDelete=(id)=>{
        setTimelineId(id);
        dispatch(deleteTimeline(id))
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllTimelineErrors())
        }
        if(message){
            toast.success(message);
            dispatch(resetTimelineSlice());
            dispatch(getAllTimeline())
        }
    },[dispatch,error,message,loading])
    return(
        <>
         <div className="mini-h-[100vh] sm:gap-4 sm:py-4 sm:pl-20">
                <Tabs>
                    <TabsContent>
                        <Card>
                            <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center">
                                <CardTitle>Timeline</CardTitle>
                                <CardTitle className="cursor-pointer" onClick={()=>handleBackToHome()}>Back To Home</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {timeline&&timeline.length>0?(
                                    timeline.map((even)=>{
                                    return(
                                        <Card key={even._id}>
                                            <CardDescription className="text-stone-950 mx-4 mt-4">
                                                {even.title}
                                            </CardDescription>
                                            <CardDescription className="text-stone-950 mx-4 ">
                                                {even.description}
                                            </CardDescription>
                                            <CardDescription className="text-stone-950 mx-4 ">
                                               from-{even.timeline.from}-{even.timeline.to}
                                            </CardDescription>
                                            <CardFooter className="justify-end">
                                                {loading&&timelineId == even._id?(
                                                    <SpecialLoadingButton></SpecialLoadingButton>
                                                ):(
                                                    <Button className="" onClick={()=>handleTimelineDelete(even._id)}>Delete</Button>
                                                )}
                                            </CardFooter>
                                        </Card>
                                    )
                                })):(<CardHeader>No Timeline Found!</CardHeader>)}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}