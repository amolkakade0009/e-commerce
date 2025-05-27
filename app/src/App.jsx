import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import { UrlContextProvider } from './context/UrlContext'

function App() {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Route>
    )
  )

  return (
    <>
    <UrlContextProvider>
      <RouterProvider router={router}/>
    </UrlContextProvider>
    </>
  )
}

export default App
