import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { Home } from './pages/Home'
import { ProjectView } from './pages/ProjectView'
import { Footer } from './pages/Footer'
import { ModeToggle } from './components/mode-toggle'
import { ToastContainer } from 'react-toastify'
import { Header } from './pages/Header'


function App() {

  return (
    <>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/project/:id' element={<ProjectView></ProjectView>}></Route>
          </Routes>
          <Footer></Footer>
          <ToastContainer position='bottom-right' theme='dark'></ToastContainer>
        </Router>

    </>
  )
}

export default App
