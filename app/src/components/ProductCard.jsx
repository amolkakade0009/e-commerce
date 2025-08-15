import React, { useEffect, useState } from 'react'

export const ProductCard = ({ product }) => {
    const [imagesrc, setImagesrc] = useState();

    // useEffect(()=>{
    //     const byteArray = product.image
    //    // const blob = new Blob([byteArray], { type: "image/png" });
    //    const imageURL = URL.createObjectURL(new Blob([byteArray], { type: "image/png" }));
    //    setImagesrc(imageURL)
    //    // console.log(blob)


    // },[])


    return (
        <>

           

            <div className="bg-white-100 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
                <img
                    src={imagesrc}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
                <p className="text-green-600 font-bold">Discount: {product.discount}</p>
                <h2 className="text-xl text-blue-600 font-bold">₹{product.price}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            </div>


        </>

    )
}
