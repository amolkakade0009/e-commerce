import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) => i.id === item.id ?  { ...i, quantity  : i.quantity + 1 } : i)
      }
      return [ ...prevItems, { ...item, quantity: 1 }]
       
    })
    console.log(item)
    console.log(cartItems)
  }

  const removeCartItem = ( (id) => {
    setCartItems((prev) =>prev.filter((i) => i.id !== id))
  })


 const updateQuantity = (productId, type) => {
    setCartItems((prev) =>{
      return prev.map((item)=>{
        if(item.id === productId){
          const newQuantity = type === "increment" ? item.quantity + 1 : item.quantity -1
          if(newQuantity <= 0){
            return item
          }
          return {...item, quantity : Math.max( 1 , newQuantity)}
        }
        return item
    })  
    })
 }
  




  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeCartItem , updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};