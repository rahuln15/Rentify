import React from 'react'
import Navbar from './navbar/Navbar'



import Footer from './footer/Footer'

import Products from './productpage/Products'
import Productdetails from './productdetails/Productdetails'


import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       
       <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productdetail' element={<Productdetails/>}/>
        <Route path='/productdetail/:id' element={<Productdetails/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default App