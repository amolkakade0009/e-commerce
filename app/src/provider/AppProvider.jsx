import React from 'react'
import { CartContextProvider } from '../context/CartContext'
import { UrlContextProvider } from '../context/UrlContext'

const AppProvider = ({children}) => {
  return (

     <>
      <UrlContextProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </UrlContextProvider>
    </>

  )
}

export default AppProvider