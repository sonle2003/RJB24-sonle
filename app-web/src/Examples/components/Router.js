import React, { useInsertionEffect } from 'react'
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import Formtest from './Formtest'
import Home from'./Home'
import Login from './Login'

export default function Router() {
    const[user,setUser]=React.useState(
        console.log(user),
    )
    // useEffect(()=>{
    //     console.log(user)
    // },[user])
  return (
    <>
        <BrowserRouter>
        <Link to="/login">Login</Link>
        <Link to="/home" style={{padding:50}}>Home</Link>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Formtest login={setUser}/>}/>
                <Route
                    path='*'
                    element={
                    <main style={{ padding: '1rem' }}>
                        <p>404 Page not found 😂😂😂</p>
                    </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </>
  )
}
