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
import BulbDetail from './Pages/ProductsPage/BulbDetails'
import { ToastContainer } from 'react-toastify';
import Toggle from './Component/useContext/Toggle';
import ProductDetails from './Pages/ProductsPage/ProductDetails'
import BuyNow from './Pages/BuyNow/BuyNow'
import Search from './Pages/SearchPage/Search'
import SearchResult from './Pages/SearchPage/SearchResult'
import Cart from './Component/Cart/Cart'

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
          <Route path='/bulbdetails' element={<BulbDetail/>}/>
            <Route path="/productdetails/:name" element={<ProductDetails />} />
          <Route path='/landing' element={<Landing/>}>
            <Route index element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='forgotpass' element={<Forgotpass/>}/>
          </Route>
          <Route path='/buynow' element={<BuyNow/>}/>
          <Route path='/search' element={<SearchResult/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Toggle>
  );
}
