import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";
// import { error } from "console";

const timelineSlice = createSlice({
    name:"timeline",
    initialState:{
        loading:false,
        timeline:[],
        error:null,
        message:null,
    },
    reducers:{
        getAllTimelineRequest(state,action){
            state.timeline=[],
            state.error=null,
            state.loading=true;
        },
        getAllTimelineSuccess(state,action){
            state.timeline = action.payload;
            state.error=null;
            state.loading=false;
        },
        getAllTimelineFailed(state,action){
            state.timeline=state.timeline,
            state.error=action.payload,
            state.loading=false;
        },
        addNewTimelineRequest(state,action){
            state.loading=true,
            state.error=null,
            state.message=null
        },
        addNewTimelineSuccess(state,action){
            state.loading=false,
            state.error=null,
            state.message=action.payload
        },
        addNewTimelineFailed(state,action){
            state.loading=false,
            state.error=action.payload,
            state.message=null
        },
        deleteTimelineRequest(state,action){
            state.error=null,
            state.loading=true;
            state.message=null;
        },
        deleteTimelineSuccess(state,action){
            state.error=null;
            state.loading=false;
            state.message=action.payload;
        },
        deleteTimelineFailed(state,action){
            state.error=action.payload,
            state.loading=false;
            state.message=null
        },
        resetTimelineSlice(state, action) {
            state.error = null;
            state.timeline = state.timeline;
            state.message = null;
            state.loading = false;
          },
        clearAllErrors(state, action) {
            state.error = null;
            state = state.timeline;
        },
    }
});

export const getAllTimeline =()=>async(dispatch)=>{
    dispatch(timelineSlice.actions.getAllTimelineRequest());
    try {
        const response = await axios.get("http://localhost:4000/api/v1/timeline/getall",{withCredentials:true});
        // console.log(response)
        dispatch(timelineSlice.actions.getAllTimelineSuccess(response.data.allTimeLine));
        dispatch(timelineSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(timelineSlice.actions.getAllTimelineFailed(error.response.data.message));
    }
};
export const AddNewTimeline=(data)=>async(dispatch)=>{
    dispatch(timelineSlice.actions.addNewTimelineRequest());
    try {
        const response = await axios.post("http://localhost:4000/api/v1/timeline/add",data,{withCredentials:true,headers:{"Content-Type":"multipart/form-data"}});
     
        dispatch(timelineSlice.actions.addNewTimelineSuccess(response.data.message));
        dispatch(timelineSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(timelineSlice.actions.addNewTimelineFailed(error.data))
    }
}
export const deleteTimeline =(id)=>async(dispatch)=>{
    dispatch(timelineSlice.actions.deleteTimelineRequest());
    try {
        const response = await axios.delete(`http://localhost:4000/api/v1/timeline/delete/${id}`,{withCredentials:true});

        dispatch(timelineSlice.actions.deleteTimelineSuccess(response.data.message));
        dispatch(timelineSlice.actions.clearAllErrors(error.response.data.message));
    } catch (error) {
        dispatch(timelineSlice.actions.deleteTimelineFailed(error.response))
    }
}
export const resetTimelineSlice = () => (dispatch) => {
    dispatch(timelineSlice.actions.resetTimelineSlice());
  };
  
  export const clearAllTimelineErrors = () => (dispatch) => {
    dispatch(timelineSlice.actions.clearAllErrors());
  };

export default timelineSlice.reducer;
