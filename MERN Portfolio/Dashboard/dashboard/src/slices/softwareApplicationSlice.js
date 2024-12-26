import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const softwareApplicationSlice = createSlice({
    name:"softwareApplications",
    initialState:{
        loading:false,
        softwareApplications:[],
        error:null,
        message:null,
    },
    reducers:{
        getAllsoftwareApplicationsRequest(state,action){
            state.softwareApplications=[],
            state.loading=true,
            state.error=null
        },
        getAllsoftwareApplicationsSuccess(state,action){
            state.softwareApplications=action.payload,
            state.loading=false,
            state.error=null
        },
        getAllsoftwareApplicationsFailed(state,action){
            state.softwareApplications=state.softwareApplications,
            state.loading=false,
            state.error=action.payload
        },
        addNewsoftwareApplicationsRequest(state,action){
            state.loading=true;
            state.error=null;
            state.message=null
        },
        addNewsoftwareApplicationsSuccess(state,action){
            state.error=null;
            state.loading=false;
            state.message=action.payload;
        },
        AddSoftwareApplicationsFailed(state,action){
            state.error=action.payload;
            state.loading=false;
            state.message=null;
        },
        deletesoftwareApplicationsRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        deletesoftwareApplicationsSuccess(state, action) {
            state.error = null;
            state.loading = false;
            state.message = action.payload;
        },
        deletesoftwareApplicationsFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.message = null;
        },
        resetSoftwareApplicationSlice(state, action) {
            state.error = null;
            state.softwareApplications = state.softwareApplications;
            state.message = null;
            state.loading = false;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.softwareApplications = state.softwareApplications;
        },
    }
});

export const getsoftwareApplications=()=>async(dispatch)=>{
    dispatch(softwareApplicationSlice.actions.getAllsoftwareApplicationsRequest());
    try {
        const response = await axios.get("http://localhost:4000/api/v1/SoftwairApplication/getall",{withCredentials:true})
        
        dispatch(softwareApplicationSlice.actions.getAllsoftwareApplicationsSuccess(response.data.allSoftwairApplication))
        // console.log(response.data.allSoftwairApplication)
        dispatch(softwareApplicationSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(softwareApplicationSlice.actions.getAllsoftwareApplicationsFailed(error))
    }

}

export const addNewSoftwareApplication =(data)=>async(dispatch)=>{
    dispatch(softwareApplicationSlice.actions.addNewsoftwareApplicationsRequest());
    try {
        const response = await axios.post("http://localhost:4000/api/v1/SoftwairApplication/add",data,{withCredentials:true, headers:{"Content-Type":"multipart/form-data"}});
        // console.log(response)
        dispatch(softwareApplicationSlice.actions.addNewsoftwareApplicationsSuccess(response.data.message));
        dispatch(softwareApplicationSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(softwareApplicationSlice.actions.AddSoftwareApplicationsFailed(error.response.data.message))
    }
}
export const deleteSoftwareApplication=(id)=>async(dispatch)=>{
    dispatch(softwareApplicationSlice.actions.deletesoftwareApplicationsRequest())
    try {
        const response = await axios.delete(`http://localhost:4000/api/v1/SoftwairApplication/delete/${id}`,{withCredentials:true});

        dispatch(softwareApplicationSlice.actions.deletesoftwareApplicationsSuccess(response.data.message));
        dispatch(softwareApplicationSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(softwareApplicationSlice.actions.deletesoftwareApplicationsFailed(message))
    }
}

export const clearAllSoftwareAppErrors=()=>(dispatch)=>{
    dispatch(softwareApplicationSlice.actions.clearAllErrors())
}
export const resetSoftwareApplicationSlice=()=>(dispatch)=>{
    dispatch(softwareApplicationSlice.actions.resetSoftwareApplicationSlice())
}

export default softwareApplicationSlice.reducer;