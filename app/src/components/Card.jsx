import React, { useState } from 'react'

export const Card = ({product}) => {

    // const products = [
    //     {
    //         pName: "Wireless Earbuds",
    //         pImage: "earbuds.jpg",
    //         pPrice: 1999,
    //         pDescription: "High-quality sound with noise cancellation.",
    //         pRating: 4.5,
    //         pDiscount: "10%"
    //     },
    //     {
    //         pName: "Smart Watch",
    //         pImage: "smartwatch.jpg",
    //         pPrice: 2999,
    //         pDescription: "Fitness tracker with heart rate monitor and GPS.",
    //         pRating: 4.2,
    //         pDiscount: "15%"
    //     },
    //     {
    //         pName: "Bluetooth Speaker",
    //         pImage: "speaker.jpg",
    //         pPrice: 1499,
    //         pDescription: "Portable speaker with deep bass and 12-hour battery life.",
    //         pRating: 4.7,
    //         pDiscount: "20%"
    //     },
    //     {
    //         pName: "Gaming Mouse",
    //         pImage: "mouse.jpg",
    //         pPrice: 899,
    //         pDescription: "Ergonomic mouse with customizable DPI and RGB lights.",
    //         pRating: 4.3,
    //         pDiscount: "5%"
    //     },
    //     {
    //         pName: "Mechanical Keyboard",
    //         pImage: "keyboard.jpg",
    //         pPrice: 2299,
    //         pDescription: "Backlit mechanical keyboard with blue switches.",
    //         pRating: 4.6,
    //         pDiscount: "12%"
    //     },
    //     {
    //         pName: "4K Monitor",
    //         pImage: "monitor.jpg",
    //         pPrice: 15999,
    //         pDescription: "Ultra HD display with vivid color and fast refresh rate.",
    //         pRating: 4.8,
    //         pDiscount: "18%"
    //     },
    //     {
    //         pName: "Laptop Stand",
    //         pImage: "laptopstand.jpg",
    //         pPrice: 799,
    //         pDescription: "Adjustable aluminum laptop stand for better ergonomics.",
    //         pRating: 4.4,
    //         pDiscount: "10%"
    //     },
    //     {
    //         pName: "External Hard Drive",
    //         pImage: "hdd.jpg",
    //         pPrice: 4599,
    //         pDescription: "1TB portable hard drive with USB 3.0 interface.",
    //         pRating: 4.5,
    //         pDiscount: "22%"
    //     },
    //     {
    //         pName: "Wireless Charger",
    //         pImage: "wirelesscharger.jpg",
    //         pPrice: 1199,
    //         pDescription: "Fast charging pad compatible with all Qi devices.",
    //         pRating: 4.1,
    //         pDiscount: "8%"
    //     },
    //     {
    //         pName: "Noise Cancelling Headphones",
    //         pImage: "headphones.jpg",
    //         pPrice: 3499,
    //         pDescription: "Over-ear headphones with premium sound and ANC.",
    //         pRating: 4.6,
    //         pDiscount: "25%"
    //     }
    // ];

    return (
        <>  
            <div className="bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
                <img
                    src={product.pImage}
                    alt={product.pName}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">{product.pName}</h2>
                <p className="text-yellow-500 font-medium">⭐ {product.pRating}</p>
                <p className="text-green-600 font-bold">Discount: {product.pDiscount}</p>
                <h2 className="text-xl text-blue-600 font-bold">₹{product.pPrice}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.pDescription}</p>
            </div>


        </>

    )
}
