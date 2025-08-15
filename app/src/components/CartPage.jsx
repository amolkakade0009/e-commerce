import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

 const CartPage = () => {

  const { cartItems, updateQuantity ,removeCartItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(cartItems)

  // const [copyofCartItems, setCopyOfCartItems] = useState([]);

  // useEffect(() => {
  //   setCopyOfCartItems(structuredClone(cartItems));

  // }, [])
  useEffect(() => {
    if(cartItems.length ===0){
      setTotal(0)
    }
    let demoTotal = 0
    cartItems.forEach((item) => {
      demoTotal = demoTotal + item.price * item.quantity;
      setTotal(demoTotal)
    })

  }, [cartItems])




  return (

    <>

      <h1 className='text-4xl shadow-xl'> Your Cart </h1>

      <div className="bg-slate-100 min-h-screen py-8">
        <div className="w-full max-w-5xl mx-auto space-y-6 p-4">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 hover:shadow-2xl transition duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg border"
              />

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
                <p className="text-green-600 font-semibold">
                  Discount: {product.discount}
                </p>
                <h3 className="text-xl text-blue-600 font-bold mt-1">
                  ₹{product.price}
                </h3>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(product.id, "decrement")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 py-1 rounded-full"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, "increment")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 py-1 rounded-full"
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div className="text-right">
                <p className="text-sm text-gray-700">Total </p>
                <p className="text-xl font-bold text-gray-800">
                  ₹{product.price * product.quantity}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                  onClick={() => removeCartItem(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="bg-white shadow-lg rounded-lg p-4 flex justify-center items-center mt-6 border-t border-gray-200">
  <h2 className="text-lg font-semibold text-gray-700">Total Price of all products :</h2>
  <span className="text-2xl font-bold px-3 text-green-600">₹{total}</span>
</div>

    </>

  )
}


export default CartPage