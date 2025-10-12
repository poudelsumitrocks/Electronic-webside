import React from 'react'
import Landing from './Pages/LandingPage/Landing'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignUp from './Pages/SignUpPages/SignUp'
import Login from './Pages/SignUpPages/Login'
import Forgotpass from './Pages/SignUpPages/Forgotpass'
import Home from './Pages/HomePage/Home'
import { ThemeContext } from './Component/useContext/Toggle'
import AboutUs from './Component/Footer/AboutUs'
import Contact from './Component/Footer/Contact'
import { ToastContainer } from 'react-toastify';

import Toggle from './Component/useContext/Toggle';

export default function App() {
  return (
    <Toggle>
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/landing' element={<Landing/>}>
            <Route index element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='forgotpass' element={<Forgotpass/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Toggle>
  );
}
