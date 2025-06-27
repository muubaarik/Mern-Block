import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Singin from './pages/singin'
import Dashboard from './pages/dashboard'
import Project from './pages/project'
import Singup from './pages/singup'


export default function App() {
  return (
<BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/about' element={<About/>}/>
   <Route path='/sing-in' element={<Singin/>}/>
   <Route path='/dashboard' element={<Dashboard/>}/>
   <Route path='/project' element={<Project/>}/>
   <Route path='/sin-up' element={<Singup/>}/>

   </Routes>

</BrowserRouter>
    
  )
}

