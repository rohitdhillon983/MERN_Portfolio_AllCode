import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { error } from "console";

const forgotResetPassword = createSlice({
    name:"forgotPassword",
    initialState:{
        loading:false,
        error:null,
        message:null,
    },
    reducers:{
        forgotPasswordRequest(state,action){
            state.loading = true;
            state.error=null
            state.error = null;
        },
        forgotPasswordSuccess(state,action){
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        forgotPasswordFailed(state,action){
            state.loading = false;
            state.message =null;
            state.error = action.payload
        },
            resetPasswordRequest(state,action){
            state.loading = true;
            state.message= null;
            state.error = null;
        },
            resetPasswordSuccess(state,action){
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
            resetPasswordFailed(state,action){
            state.loading = false;
            state.message= null;
            state.error = action.payload
        },

        clearAllErrors(state,action){
            state = state;
            state.error = null
        }
    }
})
export const forgotPassword=(email)=>async(dispatch)=>{
    dispatch(forgotResetPassword.actions.forgotPasswordRequest());
    try {
        const response = await axios.post(
            "http://localhost:4000/api/v1/user/password/forget",{email},{
                withCredentials:true,
                headers:{"Content-Type":"application/json"}
            }
        );
        dispatch(forgotResetPassword.actions.forgotPasswordSuccess(response.data.message));
        dispatch(forgotResetPassword.actions.clearAllErrors())    
    } catch (error) {
        dispatch(forgotResetPassword.actions.forgotPasswordFailed(error.response.data.message))
    }
}
export const resetPassword=(token,password,confirmPassword)=>async(dispatch)=>{
    console.log(password)
    console.log(confirmPassword)
    dispatch(forgotResetPassword.actions.resetPasswordRequest());
    try {
        const {data}=await axios.put(
            `http://localhost:4000/api/v1/user/password/reset/${token}`,
            {password,confirmPassword},{
                withCredentials:true,
                headers:{"Content-Type":"application/json"}
            }
        );
        dispatch(forgotResetPassword.actions.resetPasswordSuccess(data.message));
        dispatch(forgotResetPassword.actions.clearAllErrors())    
    } catch (error) {
        dispatch(forgotResetPassword.actions.resetPasswordFailed(error.response.data.message))
    }
}


export const clearAllForgotPasswordErrors =()=>(dispatch)=>{
    dispatch(userSlice.actions.clearAllErrors());
}

export default forgotResetPassword.reducer;
