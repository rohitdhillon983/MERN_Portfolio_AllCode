import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
// const { error } = require("console")

const messageSlice = createSlice({
    name:"messages",
    initialState:{
        loading:false,
        messages:[],
        error:null,
        message:null
    },
    reducers:{
        getAllMessagesRequest(state,action){
            state.messages=[],
            state.error=null;
            state.loading=true
        },
        getAllMessagesSuccess(state,action){
            state.messages=action.payload,
            state.error=null,
            state.loading=false
        },
        getAllMessagesFailed(state,action){
            state.messages=state.messages,
            state.error=action.payload;
            state.loading=false
        },
        deleteMessageRequest(state,action){
            state.message=null,
            state.error=null;
            state.loading=true
        },
        deleteMessageSuccess(state,action){
            state.message=action.payload,
            state.error=null,
            state.loading=false
        },
        deleteMessageFailed(state,action){
            state.message=null,
            state.error=action.payload;
            state.loading=false
        },
        resetMessageSlice(state,action){
            state.message=null,
            state.error=null;
            state.loading=false
            state.messages=state.messages;
        },
        clearAllErrors(state,action){
            state.error=null,
            state.messages=state.messages;
        }
    }
});

export const getAllMessages=()=>async(dispatch)=>{
    dispatch(messageSlice.actions.getAllMessagesRequest());
    try {
        const response =await axios.get("http://localhost:4000/api/v1/message/getAll",{withCredentials:true})

        // console.log(response)
        dispatch(messageSlice.actions.getAllMessagesSuccess(response.data.message));
        dispatch(messageSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(messageSlice.actions.getAllMessagesFailed(error.response.data.message))
    }
};

export const deleteMessage = (id)=>async(dispatch)=>{
    dispatch(messageSlice.actions.deleteMessageRequest());
    try {
        const response = await axios.delete(`http://localhost:4000/api/v1/message/delete/${id}`,{withCredentials:true})

        dispatch(messageSlice.actions.deleteMessageSuccess(response.data.message));
        dispatch(messageSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(messageSlice.actions.deleteMessageFailed(error.response.data.message))
    }
};

export const clearAllMessageErrors =()=>(dispatch)=>{
    dispatch(messageSlice.actions.clearAllErrors())
}

export const resetMessagesSlice = () => (dispatch) => {
    dispatch(messageSlice.actions.resetMessageSlice());
};

export default messageSlice.reducer;
