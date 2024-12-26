import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import forgotResetPassword from "../slices/forgotResetPasswordSlice";
import messageSlice from "../slices/messagesSlice";
import timelineSlice from "../slices/timelineSlice";
import softwareApplicationSlice from "@/slices/softwareApplicationSlice";
import skillSlice from "@/slices/skillSlice";
import projectSlice from "@/slices/projectSlice";
import experienceSlice from "@/slices/exprienceSlice"
 
export const store = configureStore({
    reducer:{
        user:userSlice,
        forgotPassword:forgotResetPassword,
        messages:messageSlice,
        timeline:timelineSlice,
        softwareApplications:softwareApplicationSlice,
        skill:skillSlice,
        project:projectSlice,
        experience:experienceSlice,
    }
})