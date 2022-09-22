import React, { useInsertionEffect ,useEffect} from 'react'
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import Formtest from './Formtest'
import Home from'./Home'
import Login from './Login'
import Netwk from './Netwk'

export default function Router() {
    const [user, setUser] =React.useState({
        name: undefined,
        age: undefined,
      });
    
      useEffect(()=>{
        // console.log(user)
      },[user])    
  return (
    <>
        <BrowserRouter>
        <Link to="/login">Login</Link>
        <Link to="/netwk">Netwk</Link>
        <Link to="/home" style={{padding:50}}>Home</Link>
            <Routes>
                <Route path='/netwk' element={<Netwk user={user} />}/>
                <Route path='/home' element={<Home />}/>
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
