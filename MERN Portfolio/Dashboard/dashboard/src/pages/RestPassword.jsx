import { clearAllForgotPasswordErrors, resetPassword } from "@/slices/forgotResetPasswordSlice";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { Dashboard } from "./sub-components/Dashboard";

export const ResetPassword =()=>{
    const { isAuthenticated } = useSelector((state) => state.user);
    const {token} = useParams()
    const [password , setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("")
    const {loading,error,message}=useSelector(
        (state)=>state.forgotPassword
    );
    
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleResetPasswored=()=>{
        dispatch(resetPassword(token,password,confirmPassword))
        // if(password ==confirmPassword){
        //     navigateTo("/login")
        // }
    };
    
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllForgotPasswordErrors());
        }
        if (isAuthenticated) {
            navigateTo("/");
            dispatch(Dashboard())
          }
        
        if(message !== null){
            toast.success(message)
        }
    },[dispatch,isAuthenticated,error,loading])

    
    return (
        <div className="min-h-[100vh] flex justify-center items-center">
            <Card className="mx-auto max-w-sm w-full ">
                <CardHeader>
                    <CardTitle className="text-2xl">Reset Password</CardTitle>
                    <CardDescription>
                    Enter your new password below access your Account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="password">new password</Label>
                        <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">Confirm password</Label>
                        <Input
                        id="confirmPassword"
                        type="password"
                        required
                        value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    {loading?(<SpecialLoadingButton content={"Login"}/>):(
                        <Button type="submit" onClick={()=>handleResetPasswored(password)} className="w-full">
                        submit
                    </Button>)}
                            
                    </div>
                </CardContent>
            </Card>
        </div>
      )
}