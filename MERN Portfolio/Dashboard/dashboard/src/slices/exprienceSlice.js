import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";
// import { error } from "console";

const experienceSlice = createSlice({
    name:"experience",
    initialState:{
        loading:false,
        experience:[],
        error:null,
        message:null,
    },
    reducers:{
        getAllexperienceRequest(state,action){
            state.experience=[],
            state.error=null,
            state.loading=true;
        },
        getAllexperienceSuccess(state,action){
            state.experience = action.payload;
            state.error=null;
            state.loading=false;
        },
        getAllexperienceFailed(state,action){
            state.experience=state.experience,
            state.error=action.payload,
            state.loading=false;
        },
        addNewexperienceRequest(state,action){
            state.loading=true,
            state.error=null,
            state.message=null
        },
        addNewexperienceSuccess(state,action){
            state.loading=false,
            state.error=null,
            state.message=action.payload
        },
        addNewexperienceFailed(state,action){
            state.loading=false,
            state.error=action.payload,
            state.message=null
        },
        deleteexperienceRequest(state,action){
            state.error=null,
            state.loading=true;
            state.message=null;
        },
        deleteexperienceSuccess(state,action){
            state.error=null;
            state.loading=false;
            state.message=action.payload;
        },
        deleteexperienceFailed(state,action){
            state.error=action.payload,
            state.loading=false;
            state.message=null
        },
        resetexperienceSlice(state, action) {
            state.error = null;
            state.experience = state.experience;
            state.message = null;
            state.loading = false;
          },
        clearAllErrors(state, action) {
            state.error = null;
            state = state.experience;
        },
    }
});

export const getAllexperience =()=>async(dispatch)=>{
    dispatch(experienceSlice.actions.getAllexperienceRequest());
    try {
        const response = await axios.get("http://localhost:4000/api/v1/experience/get",{withCredentials:true});
        // console.log(response)
        dispatch(experienceSlice.actions.getAllexperienceSuccess(response.data.getAllExperience));
        dispatch(experienceSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(experienceSlice.actions.getAllexperienceFailed(error.response.data.message));
    }
};
export const AddNewexperience=(data)=>async(dispatch)=>{
    dispatch(experienceSlice.actions.addNewexperienceRequest());
    try {
        const response = await axios.post("http://localhost:4000/api/v1/experience/add",data,{withCredentials:true,headers:{"Content-Type":"multipart/form-data"}});
     
        dispatch(experienceSlice.actions.addNewexperienceSuccess(response.data.message));
        dispatch(experienceSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(experienceSlice.actions.addNewexperienceFailed(error.data))
    }
}
export const deleteexperience =(id)=>async(dispatch)=>{
    dispatch(experienceSlice.actions.deleteexperienceRequest());
    try {
        const response = await axios.delete(`http://localhost:4000/api/v1/experience/delete/${id}`,{withCredentials:true});

        dispatch(experienceSlice.actions.deleteexperienceSuccess(response.data.message));
        dispatch(experienceSlice.actions.clearAllErrors(error.response.data.message));
    } catch (error) {
        dispatch(experienceSlice.actions.deleteexperienceFailed(error.response))
    }
}
export const resetexperienceSlice = () => (dispatch) => {
    dispatch(experienceSlice.actions.resetexperienceSlice());
  };
  
  export const clearAllexperienceErrors = () => (dispatch) => {
    dispatch(experienceSlice.actions.clearAllErrors());
  };

export default experienceSlice.reducer;
