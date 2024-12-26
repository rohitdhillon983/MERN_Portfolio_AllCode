import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { SpecialLoadingButton } from "./SpecialLoadingButton"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearAllUserErrors, resetProfile, updatePassword } from "@/slices/userSlice"
import { toast } from "react-toastify"

export const UpdatePassword =()=>{

    const {user,isAuthenticated, loading, error, isUpdated, message }=useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const [oldPassword,setOldPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const handleUpdatePassword =()=>{
        dispatch(updatePassword(oldPassword,newPassword,confirmPassword))
    }
    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearAllUserErrors());
        }
        if (isUpdated) {
          dispatch(resetProfile());
        }
        if (message) {
          toast.success(message);
        }
      }, [dispatch, isAuthenticated, error, message]);
    return(
        <>
        <div className="w-full h-full">
            <div>
                <div className="grid w-[100%] gap-6">
                    <div className="grid gap-2">
                        <h1 className="text-3xl font-bold">Update Password</h1>
                        <p className="text-balance text-muted-foreground">
                            Update your password
                        </p>
                    </div>
                    <div className="grid gap-4">
                        
                        <div className="grid gap-2">
                            <Label>old Password</Label>
                            <Input type="password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}/>
                        </div>
                        <div className="grid gap-2">
                            <Label>new Password</Label>
                            <Input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                        </div>
                        <div className="grid gap-2">
                            <Label>confirm Password</Label>
                            <Input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </div>
                        {!loading ? (
                            <Button
                            onClick={() => handleUpdatePassword()}
                            className="w-full"
                            >
                            Update Password 
                            </Button>
                        ) : (
                            <SpecialLoadingButton content={"Updating"} />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}