import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './pages/HomePage'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { ResetPassword } from './pages/RestPassword'
import { ManageSkills } from './pages/ManageSkills'
import { ManageTimeline } from './pages/ManageTimeline'
import { ManageProjects } from './pages/ManageProjects'
import { ViewProject } from './pages/ViewProject'
import { UpdateProject } from './pages/UpdateProject'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { getUser } from './slices/userSlice'
import { getAllMessages } from './slices/messagesSlice'
import { getAllTimeline } from './slices/timelineSlice'
import { getAllSkills } from './slices/skillSlice'
import { getAllProjects } from './slices/projectSlice'
import { getsoftwareApplications } from './slices/softwareApplicationSlice'
import { getAllexperience } from './slices/exprienceSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser());
    dispatch(getAllMessages());
    dispatch(getAllTimeline());
    dispatch(getAllSkills());
    dispatch(getAllProjects());
    dispatch(getsoftwareApplications());
    dispatch(getAllexperience())
  },[]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/password/forgot' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/password/reset/:token' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/manage/skills' element={<ManageSkills></ManageSkills>}></Route>
        <Route path='/manage/timeline' element={<ManageTimeline></ManageTimeline>}></Route>
        <Route path='/manage/projects' element={<ManageProjects></ManageProjects>}></Route>
        <Route path='/view/project/:id' element={<ViewProject></ViewProject>}></Route>
        <Route path='/update/project/:id' element={<UpdateProject></UpdateProject>}></Route>
      </Routes>
      <ToastContainer position='="bottom-right' theme='dark'></ToastContainer>
    </Router>
  )
}

export default App
