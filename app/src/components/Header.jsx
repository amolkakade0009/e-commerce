import React, { use, useContext, useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'




const Header = () => {
  const [cartNumber, setCartNumber] = useState()
  const {cartItems} = useContext(CartContext)
 
  useEffect(() => {
    cartItems.length > 0 ? setCartNumber(cartItems.length) : setCartNumber("")
  }, [cartItems])

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo / Brand */}
      <div className="text-2xl font-extrabold text-indigo-600 tracking-wider hover:scale-105 transition-transform">
        MyApp
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <Link to={"/"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
        >
          Home
        </Link>

         <Link to={"/add-product"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
        >
          Add Product
        </Link>

        <Link to={"/login"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
        >
          Login
        </Link>
        
        <Link to={"/signup"}
          className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Sign Up
        </Link>

          <Link to={"/logout"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
        >
          Logout
        </Link>

        {/* Cart Icon */}
        <div className="relative cursor-pointer group">
          <Link to={"/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-gray-700 group-hover:fill-indigo-600 transition-colors duration-200"
            >
              <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
            </svg>
            
          {/* Cart Count Badge */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
            {cartNumber}
          </span>
          </Link>

        </div>
      </nav>
    </header>


  )
}

export default Header;

