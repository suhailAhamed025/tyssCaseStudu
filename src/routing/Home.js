import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../register/Register'
import UserTable from '../userdata/UserTable'

function Home() {
  return (
  
    
        
    
    <Routes>

      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<UserTable/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  
    
  )
}

export default Home