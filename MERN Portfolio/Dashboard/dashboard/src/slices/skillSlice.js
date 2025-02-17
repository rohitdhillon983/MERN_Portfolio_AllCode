import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const skillSlice = createSlice({
    name:"skill",
    initialState:{
        loading:false,
        skills:[],
        error:null,
        message:null
    },
    reducers:{
        getAllSkillsRequest(state,action){
            state.skills=[],
            state.loading=true,
            state.error=null
        },
        getAllSkillsSuccess(state,action){
            state.skills=action.payload,
            state.loading=false,
            state.error=null
        },
        getAllSkillsFailed(state,action){
            state.skills=state.skills,
            state.loading=false,
            state.error=action.payload
        },
        addNewSkillsRequest(state,action){
            state.loading=true,
            state.error=null,
            state.message=null
        },
        addNewSkillsSuccess(state,action){
            state.loading=false,
            state.error=null,
            state.message=action.payload
        },
        addNewSkillsFailed(state,action){
            state.loading=false,
            state.error=action.payload,
            state.message=null
        },
        deleteSkillsRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        deleteSkillsSuccess(state, action) {
            state.error = null;
            state.loading = false;
            state.message = action.payload;
        },
        deleteSkillsFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.message = null;
        },
        resetSkillSlice(state,action){
            state.error=null,
            state.loading=false,
            state.message=null,
            state.skills=state.skills
        },
        clearAllErrors(state,action){
            state.error=null;
            state.skills=state.skills;
        }
    }
});

export const getAllSkills=()=>async(dispatch)=>{
    dispatch(skillSlice.actions.getAllSkillsRequest());
    try {
        const response = await axios.get("http://localhost:4000/api/v1/skills/getall",{withCredentials:true});
        // console.log(response)
        dispatch(skillSlice.actions.getAllSkillsSuccess(response.data.allSkills));
        dispatch(skillSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(skillSlice.actions.getAllSkillsFailed(error.response));
    }
}
export const addNewSkills=(data)=>async(dispatch)=>{
    dispatch(skillSlice.actions.addNewSkillsRequest());
    try {
        const response=await axios.post("http://localhost:4000/api/v1/skills/add",data,{withCredentials:true,headers:{"Content-Type":"multipart/form-data"}});
        dispatch(skillSlice.actions.addNewSkillsSuccess(response.data.message));
        dispatch(skillSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(skillSlice.actions.addNewSkillsFailed(error.response.data.message))
    }
}
export const deleteSkills=(id)=>async(dispatch)=>{
    dispatch(skillSlice.actions.deleteSkillsRequest());
    try {
        const response= await axios.delete(`http://localhost:4000/api/v1/skills/delete/${id}`,{withCredentials:true})

        dispatch(skillSlice.actions.addNewSkillsSuccess(response.data.message));
        dispatch(skillSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(skillSlice.actions.deleteSkillsFailed(error))
    }
}
export const clearAllSkillSliceErrors=()=>(dispatch)=>{
    dispatch(skillSlice.actions.clearAllErrors());
}

export const resetSkillSlice=()=>(dispatch)=>{
    dispatch(skillSlice.actions.resetSkillSlice());
}

export default skillSlice.reducer;