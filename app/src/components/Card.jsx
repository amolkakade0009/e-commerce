import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

export const Card = ({ product }) => {


    const { addToCart, removeCartItem } = useContext(CartContext)

    return (
        <>
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
                <p className="text-green-600 font-bold">Discount: {product.discount}</p>
                <h2 className="text-xl text-blue-600 font-bold">₹{product.price}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>

                {/* Buttons Section */}
                <div className="flex space-x-3 mt-4">
                    <button
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg shadow transition"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg shadow transition"
                        onClick={() => handleBuyNow(product)}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </>


    )
}
