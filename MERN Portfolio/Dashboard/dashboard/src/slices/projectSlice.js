import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { error } from "console";

const projectSlice = createSlice({
    name:"project",
    initialState:{
        loading:false,
        projects:[],
        error:null,
        message:null,
        singleProject:{},
    },
    reducers:{
        getAllProjectsRequest(state,action){
            state.projects=[];
            state.error=null;
            state.loading=true
        },
        getAllProjectsSuccess(state,action){
            state.projects=action.payload;
            state.error=null;
            state.loading=false
        },
        getAllProjectsFailed(state,action){
            state.projects=state.projects;
            state.error=action.payload;
            state.loading=false
        },
        addNewProjectRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        addNewProjectSuccess(state, action) {
            state.error = null;
            state.loading = false;
            state.message = action.payload;
        },
        addNewProjectFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.message = null;
        },
        deleteProjectRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
          },
          deleteProjectSuccess(state, action) {
            state.error = null;
            state.loading = false;
            state.message = action.payload;
          },
          deleteProjectFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.message = null;
          },
          updateProjectRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
          },
          updateProjectSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
          },
          updateProjectFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.message = null;
          },
        resetProjectSlice(state,action){
            state.projects=state.projects;
            state.error=null;
            state.loading=false,
            state.message=null
        },
        clearAllErrors(state,action){
            state.error=null;
            state=state.projects;
        },
    },
})

export const getAllProjects =()=>async(dispatch)=>{
    dispatch(projectSlice.actions.getAllProjectsRequest());
    
    try {
        const response = await axios.get("http://localhost:4000/api/v1/project/getall",{withCredentials:true});

        dispatch(projectSlice.actions.getAllProjectsSuccess(response.data.allProject));
        // console.log(response.data)
        dispatch(projectSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(projectSlice.actions.getAllProjectsFailed(error.response))
    }
}

export const addNewProject=(data)=>async(dispatch)=>{
    dispatch(projectSlice.actions.addNewProjectRequest());
    try {
        const response = await axios.post("http://localhost:4000/api/v1/project/add",data,{withCredentials:true,headers:{"Content-Type":"multipart/form-data"}});

        dispatch(projectSlice.actions.addNewProjectSuccess(response.data.message));
        dispatch(projectSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(projectSlice.actions.addNewProjectFailed(error.data))
    }
}

export const deleteProject = (id) => async (dispatch) => {
    dispatch(projectSlice.actions.deleteProjectRequest());
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/project/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      dispatch(projectSlice.actions.deleteProjectSuccess(response.data.message));
      dispatch(projectSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        projectSlice.actions.deleteProjectFailed(error.response.data.message)
      );
    }
  };
  export const updateProject = (id, newData) => async (dispatch) => {
    dispatch(projectSlice.actions.updateProjectRequest());
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/project/update/${id}`,
        newData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      dispatch(projectSlice.actions.updateProjectSuccess(response.data.message));
      dispatch(projectSlice.actions.clearAllErrors());
    } catch (error) {
      console.log(error);
      dispatch(
        projectSlice.actions.updateProjectFailed(error.response.data.message)
      );
    }
  };

export const clearAllProjectErrors=()=>(dispatch)=>{
    dispatch(projectSlice.actions.clearAllErrors())
}

export const resetProjectSlice=()=>(dispatch)=>{
    dispatch(projectSlice.actions.resetProjectSlice())
}

export default projectSlice.reducer;