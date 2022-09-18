import React from 'react'
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import New from './New'

export default function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Link to="/next"></Link>
                <Route path='/next' element={<New/>}/>
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
