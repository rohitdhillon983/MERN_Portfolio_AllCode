
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { SpecialLoadingButton } from "./SpecialLoadingButton";
import { clearAllMessageErrors, deleteMessage, getAllMessages, resetMessagesSlice } from "@/slices/messagesSlice";
import { toast } from "react-toastify";

export const Messages=()=>{
    const navigateTo = useNavigate();
    const handleReturnToDashboard = ()=>{
        navigateTo("/");
    };
    const {loading, error, message,messages }=useSelector((state)=>state.messages);
    const dispatch = useDispatch();

    const [messageId,setMessageId]=useState("")

    const handleMessageDelete=(id)=>{
        setMessageId(id);
        dispatch(deleteMessage(id))
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllMessageErrors());
        }
        if(message){
            toast.success(message);
            dispatch(resetMessagesSlice());
            dispatch(getAllMessages());
        }
    },[dispatch,error,message,loading])
    return(
        <>
            <div className="mini-h-[100vh] sm:gap-4 sm:py-4 sm:pl-20">
                <Tabs>
                    <TabsContent>
                        <Card>
                            <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center">
                                <CardTitle>Messages</CardTitle>
                                <Button className="w-fit" onClick={handleReturnToDashboard}>Return to Dashboard</Button>
                            </CardHeader>
                            <CardContent className="grid sm:grid-cols-2 gap-4">
                                {
                                    messages && messages.length>0?(
                                        messages.map((elem)=>{
                                            return(
                                                <Card key={elem._id} className="grid gap-2">
                                                    <CardDescription className="text-stone-950 mx-4 mt-4">
                                                        <span>Sender Name: </span>
                                                        {elem.senderName}
                                                    </CardDescription>
                                                    <CardDescription className="text-stone-950 mx-4">
                                                        <span>Subject: </span>
                                                        {elem.subject}
                                                    </CardDescription>
                                                    <CardDescription className="text-stone-950 mx-4">
                                                        <span>Message: </span>
                                                        {elem.message}
                                                    </CardDescription>
                                                    <CardDescription className="text-stone-950 mx-4 mt-4">
                                                        {elem.createAt}
                                                    </CardDescription>
                                                    <CardFooter className="justify-end">
                                                        {loading && messageId == elem._id ?(
                                                            <SpecialLoadingButton content={"Delete"}></SpecialLoadingButton>
                                                        ):(
                                                            <Button className="w-32" onClick={()=>handleMessageDelete(elem._id)}>Delete</Button>
                                                        )}
                                                    </CardFooter>
                                                </Card>
                                            )
                                        })
                                    ):<CardHeader>No Messages Found!</CardHeader>
                                }
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}