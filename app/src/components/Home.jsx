import React, {useState} from 'react'
import { Card } from './Card'

const Home = () => {
  //  localStorage.setItem("token", data.token);
  localStorage.getItem("token")

  const [filterList, setFilterList] = useState([])

  function applyFilter() {

    setFilterList(products.filter(product => product.pPrice > 2000))

  }
  const products = [
    {
      pName: "Wireless Earbuds",
      pImage: "earbuds.jpg",
      pPrice: 1999,
      pDescription: "High-quality sound with noise cancellation.",
      pRating: 4.5,
      pDiscount: "10%"
    },
    {
      pName: "Smart Watch",
      pImage: "smartwatch.jpg",
      pPrice: 2999,
      pDescription: "Fitness tracker with heart rate monitor and GPS.",
      pRating: 4.2,
      pDiscount: "15%"
    },
    {
      pName: "Bluetooth Speaker",
      pImage: "speaker.jpg",
      pPrice: 1499,
      pDescription: "Portable speaker with deep bass and 12-hour battery life.",
      pRating: 4.7,
      pDiscount: "20%"
    },
    {
      pName: "Gaming Mouse",
      pImage: "mouse.jpg",
      pPrice: 899,
      pDescription: "Ergonomic mouse with customizable DPI and RGB lights.",
      pRating: 4.3,
      pDiscount: "5%"
    },
    {
      pName: "Mechanical Keyboard",
      pImage: "keyboard.jpg",
      pPrice: 2299,
      pDescription: "Backlit mechanical keyboard with blue switches.",
      pRating: 4.6,
      pDiscount: "12%"
    },
    {
      pName: "4K Monitor",
      pImage: "monitor.jpg",
      pPrice: 15999,
      pDescription: "Ultra HD display with vivid color and fast refresh rate.",
      pRating: 4.8,
      pDiscount: "18%"
    },
    {
      pName: "Laptop Stand",
      pImage: "laptopstand.jpg",
      pPrice: 799,
      pDescription: "Adjustable aluminum laptop stand for better ergonomics.",
      pRating: 4.4,
      pDiscount: "10%"
    },
    {
      pName: "External Hard Drive",
      pImage: "hdd.jpg",
      pPrice: 4599,
      pDescription: "1TB portable hard drive with USB 3.0 interface.",
      pRating: 4.5,
      pDiscount: "22%"
    },
    {
      pName: "Wireless Charger",
      pImage: "wirelesscharger.jpg",
      pPrice: 1199,
      pDescription: "Fast charging pad compatible with all Qi devices.",
      pRating: 4.1,
      pDiscount: "8%"
    },
    {
      pName: "Noise Cancelling Headphones",
      pImage: "headphones.jpg",
      pPrice: 3499,
      pDescription: "Over-ear headphones with premium sound and ANC.",
      pRating: 4.6,
      pDiscount: "25%"
    }
  ];


  return (
    <>
      <div className='font-bold underline'>Home page</div>
      <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
          <Card product={product} />
        ))}
      </div>

      <button
        onClick={applyFilter}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Apply Filter
      </button>
       
       <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {filterList.map((product, index) => (
          <Card product={product} />
        ))}
      </div>
    </>
  )
}

export default Home