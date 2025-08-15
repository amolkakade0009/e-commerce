
import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import CartPage from './components/CartPage'
import { UrlContextProvider } from './context/UrlContext'
import AddProduct from './components/AddProduct'
import AppProvider from './provider/AppProvider'
import { Logout } from './auth/LogOut'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path="add-product" caseSensitive element={<AddProduct />} />
        <Route path='cart' element={<CartPage />} />
      </Route>
    )
  )

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
        
    </>
  )
}

export default App
