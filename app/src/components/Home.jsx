import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { use } from 'react'

const Home = () => {
  //  localStorage.setItem("token", data.token);
  localStorage.getItem("token")

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

//   const products = [
//   {
//     pName: "Men's Cotton T-Shirt",
//     pImage: "mens_tshirt.jpg",
//     pPrice: 699,
//     pDescription: "Soft and breathable 100% cotton t-shirt.",
//     pRating: 4.4,
//     pDiscount: "20%",
//     pSize: ["S", "M", "L", "XL"],
//     pColor: "Navy Blue",
//     pMaterial: "Cotton",
//     pGender: "Male"
//   },
//   {
//     pName: "Women's Kurti",
//     pImage: "womens_kurti.jpg",
//     pPrice: 999,
//     pDescription: "Elegant printed kurti with round neck and 3/4 sleeves.",
//     pRating: 4.6,
//     pDiscount: "25%",
//     pSize: ["M", "L", "XL"],
//     pColor: "Peach",
//     pMaterial: "Rayon",
//     pGender: "Female"
//   },
//   {
//     pName: "Unisex Hoodie",
//     pImage: "unisex_hoodie.jpg",
//     pPrice: 1499,
//     pDescription: "Warm fleece hoodie with kangaroo pocket.",
//     pRating: 4.5,
//     pDiscount: "15%",
//     pSize: ["S", "M", "L", "XL", "XXL"],
//     pColor: "Black",
//     pMaterial: "Fleece Cotton Blend",
//     pGender: "Unisex"
//   },
//   {
//     pName: "Men's Formal Shirt",
//     pImage: "formal_shirt.jpg",
//     pPrice: 1199,
//     pDescription: "Slim-fit formal shirt for office wear.",
//     pRating: 4.3,
//     pDiscount: "18%",
//     pSize: ["M", "L", "XL"],
//     pColor: "White",
//     pMaterial: "Cotton Blend",
//     pGender: "Male"
//   },
//   {
//     pName: "Women's Leggings",
//     pImage: "leggings.jpg",
//     pPrice: 499,
//     pDescription: "Stretchable ankle-length leggings.",
//     pRating: 4.2,
//     pDiscount: "30%",
//     pSize: ["S", "M", "L"],
//     pColor: "Maroon",
//     pMaterial: "Lycra",
//     pGender: "Female"
//   },
//   {
//     pName: "Men's Denim Jeans",
//     pImage: "mens_jeans.jpg",
//     pPrice: 1799,
//     pDescription: "Regular-fit mid-rise denim jeans.",
//     pRating: 4.4,
//     pDiscount: "22%",
//     pSize: ["M", "L", "XL"],
//     pColor: "Dark Blue",
//     pMaterial: "Denim",
//     pGender: "Male"
//   },
//   {
//     pName: "Women's Ethnic Saree",
//     pImage: "saree.jpg",
//     pPrice: 2299,
//     pDescription: "Traditional silk blend saree with blouse piece.",
//     pRating: 4.7,
//     pDiscount: "35%",
//     pSize: ["Free Size"],
//     pColor: "Red and Gold",
//     pMaterial: "Silk Blend",
//     pGender: "Female"
//   },
//   {
//     pName: "Kids Printed T-Shirt",
//     pImage: "kids_tshirt.jpg",
//     pPrice: 399,
//     pDescription: "Cartoon printed t-shirt for kids.",
//     pRating: 4.3,
//     pDiscount: "20%",
//     pSize: ["2Y", "4Y", "6Y", "8Y"],
//     pColor: "Yellow",
//     pMaterial: "Cotton",
//     pGender: "Kids"
//   },
//   {
//     pName: "Men's Track Pants",
//     pImage: "track_pants.jpg",
//     pPrice: 899,
//     pDescription: "Comfortable athletic track pants with drawstring.",
//     pRating: 4.1,
//     pDiscount: "12%",
//     pSize: ["M", "L", "XL"],
//     pColor: "Grey",
//     pMaterial: "Polyester",
//     pGender: "Male"
//   },
//   {
//     pName: "Women's Sports Bra",
//     pImage: "sports_bra.jpg",
//     pPrice: 749,
//     pDescription: "High-impact sports bra with removable pads.",
//     pRating: 4.5,
//     pDiscount: "28%",
//     pSize: ["S", "M", "L"],
//     pColor: "Pink",
//     pMaterial: "Nylon-Spandex",
//     pGender: "Female"
//   }
// ];


const [copyOfProducts, setCopyOfProduct] = useState([])
const [selectProductKey, setSelectProductKey] = useState("pName")
const [selectOrder, setSelectOrder] = useState("Ascending")

const productKeys = Object.keys(products[0])

  function applyFilter() {
    const sortedArray = [ ...products].sort((obj1, obj2) => {
        if (obj1[selectProductKey] < obj2[selectProductKey]){
          return selectOrder === "ascending" ? -1 : 1;
        }else if (obj1[selectProductKey] > obj2[selectProductKey]){
          return selectOrder === "ascending" ? 1 :-1;
        }
        return 0
    })

    setCopyOfProduct(sortedArray)
  }

  useEffect(() => {
    // const deepCopyProduct = products.map((obj) => ({ ...obj }))    this is shallow copy
    setCopyOfProduct(structuredClone(products))
  }, [])

  useEffect(() => {
    console.log(copyOfProducts)
  }, [copyOfProducts])



  return (
    <>


      <div className='flex  bg-slate-700 '> Filters
        <div className='mx-20'>
          <label htmlFor="selectOredr" className='mx-3'>Sort by:</label>
          <select name="selectedProductKey" id="selectedProductKey" onChange={(e) => setSelectProductKey(e.target.value)}>
            {productKeys.map((element, index) => (
              <option value={element} key={index}>{element}</option>

            ))}
          </select>
        </div>

        <div className='mx-20'>
          <label htmlFor="selectOredr" className='mx-3'> Order:</label>
          <select name="order" id="order" onChange={(e) => setSelectOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="decending">Decending</option>
          </select>
        </div>

         <button
        onClick={applyFilter}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Apply Filter
      </button>

      </div>

      {/* displaying Product by using cart */}
      <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {copyOfProducts.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>

     


      {/* <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {filterList.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div> */}
    </>
  )
}

export default Home