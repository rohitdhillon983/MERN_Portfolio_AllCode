import { clearAllForgotPasswordErrors, forgotPassword } from "@/slices/forgotResetPasswordSlice";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpecialLoadingButton } from "./sub-components/SpecialLoadingButton";

import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export const ForgotPassword =()=>{
    const [email , setEmail]=useState("");
    const {loading,error,message}=useSelector(
        (state)=>state.forgotPassword
    );
    const {isAuthenticated}=useSelector(
        (state)=>state.user
    );
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleForgotPasswored=()=>{
        dispatch(forgotPassword(email))
    };
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllForgotPasswordErrors());
        }
        if(isAuthenticated){
            navigateTo("/")
        }
        if(message !== null){
            toast.success(message)
        }
    },[dispatch,isAuthenticated,error,loading])

    
    return (
        <div className="min-h-[100vh] flex justify-center items-center">
            <Card className="mx-auto max-w-sm w-full ">
                <CardHeader>
                    <CardTitle className="text-2xl">Forget Password</CardTitle>
                    <CardDescription>
                    Enter your email below to Forget Password URl to your email
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                        <Link to="/login" className="ml-auto inline-block text-sm underline">
                            Remember your password?
                        </Link>
                        </div>
                    </div>
                    {loading?(<SpecialLoadingButton content={"Login"}/>):(
                        <Button type="submit" onClick={()=>handleForgotPasswored(email)} className="w-full">
                        Send email
                    </Button>)}
                            
                    </div>
                </CardContent>
            </Card>
        </div>
      )
}