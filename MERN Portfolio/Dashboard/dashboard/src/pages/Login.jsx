import { Link, useNavigate } from "react-router-dom"
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
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearAllUserErrors, login } from "@/slices/userSlice"
import { toast } from "react-toastify"
import { SpecialLoadingButton } from "./sub-components/SpecialLoadingButton"

export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const {loading,isAuthenticated,error,message}=useSelector(
        (state)=>state.user
    );
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleLogin =()=>{
        dispatch(login(email,password))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearAllUserErrors())
        }
        if (isAuthenticated) {
            navigateTo("/");
            // toast.success(message)
        }
        
        
    }, [dispatch, isAuthenticated, error, loading])
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
    <Card className="mx-auto max-w-sm w-full ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
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
              <Label htmlFor="password">Password</Label>
              <Link to="/password/forgot" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {loading?(<SpecialLoadingButton content={"Login"}/>):(
            <Button type="submit" onClick={()=>handleLogin(email, password)} className="w-full">
            Login
          </Button>)}
                  
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
