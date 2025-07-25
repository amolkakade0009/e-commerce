import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'
import AddProduct from './components/AddProduct'

const Layout = () => {
  
  return (
    
    <>
    <Header/>
    {/* <AddProduct/> */}
    <Outlet/>
    </>
  )
}

export default Layout