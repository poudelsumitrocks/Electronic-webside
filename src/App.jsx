import React from 'react'
import Landing from './Pages/LandingPage/Landing'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignUp from './Pages/SignUpPages/SignUp'
import Login from './Pages/SignUpPages/Login'
import Forgotpass from './Pages/SignUpPages/Forgotpass'
import Home from './Pages/HomePage/Home'
import { ThemeContext } from './Component/useContext/Toggle'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landing' element={<Landing/>} >
        <Route index element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='forgotpass' element={<Forgotpass/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
