import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductService } from '../services/product-api'

const Home = () => {
  //  localStorage.setItem("token", data.token);
  localStorage.getItem("token")

  // const products = [
  //   {
  //     id: 1,
  //     name: "Wireless Earbuds",
  //     image: "earbuds.jpg",
  //     price: 19999999,
  //     description: "High-quality sound with noise cancellation.",
  //     rating: 4.5,
  //     discount: "10%"
  //   },
  //   {
  //     id: 2,
  //     name: "Smart Watch",
  //     image: "smartwatch.jpg",
  //     price: 2999,
  //     description: "Fitness tracker with heart rate monitor and GPS.",
  //     rating: 4.2,
  //     discount: "15%"
  //   },
  //   {
  //     id: 3,
  //     name: "Bluetooth Speaker",
  //     image: "speaker.jpg",
  //     price: 1499,
  //     description: "Portable speaker with deep bass and 12-hour battery life.",
  //     rating: 4.7,
  //     discount: "20%"
  //   },
  //   {
  //     id: 4,
  //     name: "Gaming Mouse",
  //     image: "mouse.jpg",
  //     price: 899,
  //     description: "Ergonomic mouse with customizable DPI and RGB lights.",
  //     rating: 4.3,
  //     discount: "5%"
  //   },
  //   {
  //     id: 5,
  //     name: "Mechanical Keyboard",
  //     image: "keyboard.jpg",
  //     price: 2299,
  //     description: "Backlit mechanical keyboard with blue switches.",
  //     rating: 4.6,
  //     discount: "12%"
  //   },
  //   {
  //     id: 6,
  //     name: "4K Monitor",
  //     image: "monitor.jpg",
  //     price: 15999,
  //     description: "Ultra HD display with vivid color and fast refresh rate.",
  //     rating: 4.8,
  //     discount: "18%"
  //   },
  //   {
  //     id: 7,
  //     name: "Laptop Stand",
  //     image: "laptopstand.jpg",
  //     price: 799,
  //     description: "Adjustable aluminum laptop stand for better ergonomics.",
  //     rating: 4.4,
  //     discount: "10%"
  //   },
  //   {
  //     id: 8,
  //     name: "External Hard Drive",
  //     image: "hdd.jpg",
  //     price: 4599,
  //     description: "1TB portable hard drive with USB 3.0 interface.",
  //     rating: 4.5,
  //     discount: "22%"
  //   },
  //   {
  //     id: 9,
  //     name: "Wireless Charger",
  //     image: "wirelesscharger.jpg",
  //     price: 1199,
  //     description: "Fast charging pad compatible with all Qi devices.",
  //     rating: 4.1,
  //     discount: "8%"
  //   },
  //   {
  //     id: 10,
  //     name: "Noise Cancelling Headphones",
  //     image: "headphones.jpg",
  //     price: 3499,
  //     description: "Over-ear headphones with premium sound and ANC.",
  //     rating: 4.6,
  //     discount: "25%"
  //   }
  // ];

  const [copyOfProducts, setCopyOfProduct] = useState([])
  const [selectProductKey, setSelectProductKey] = useState("pName")
  const [selectOrder, setSelectOrder] = useState("Ascending")

  const { getProduct } = useProductService();

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState()

  // useEffect(()=>{
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // })

  const pagenumber = []
  for (let i = 0; i < totalPages; i++) {
    pagenumber.push(i)

  }


  const productKeys = Object.keys(products[0] || {})
  // const productKeys = Object.keys(products[0])

  function applyFilter() {
    const sortedArray = [...products].sort((obj1, obj2) => {
      if (obj1[selectProductKey] < obj2[selectProductKey]) {
        return selectOrder === "ascending" ? -1 : 1;
      } else if (obj1[selectProductKey] > obj2[selectProductKey]) {
        return selectOrder === "ascending" ? 1 : -1;
      }
      return 0
    })

    setCopyOfProduct(sortedArray)
  }

  useEffect(() => {
    // const deepCopyProduct = products.map((obj) => ({ ...obj }))    this is shallow copy
    setCopyOfProduct(structuredClone(products))
  }, [products])

  useEffect(() => {
    console.log(copyOfProducts)
  }, [copyOfProducts])


  // fetching products from API



  const fetchProduct = async () => {
    try {
      const data = await getProduct(page, 12)
      setProducts(data.content)

      setTotalPages(data.totalPages)
      setPage(data.pageable.pageNumber)
      console.log(data.pageable.pageNumber)
    }
    catch (error) {
      console.log("Error fetching products:", error)
    }

  }

  useEffect(() => {
    fetchProduct();
  }, [page]);



  return (
    <>

      <div className='flex  bg-slate-300 '> Filters
        <div className='mx-20'>
          <label htmlFor="selectOredr" className='mx-3'>Sort by:</label>
          <select name="selectedProductKey" id="selectedProductKey" onChange={(e) => setSelectProductKey(e.target.value)}>
            <option value="">Sort on</option>
            {productKeys.map((element, index) => (
              <option value={element} key={index}>{element}</option>

            ))}
          </select>
        </div>

        <div className='mx-20'>
          <label htmlFor="selectOredr" className='mx-3'> Order:</label>
          <select name="order" id="order" onChange={(e) => setSelectOrder(e.target.value)}>
            <option value="">select order</option>
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

      {/* <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {copyOfProducts.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div> */}





      {/* Displayin fetch product */}

      <button
        onClick={fetchProduct}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
      >
        Get Product
      </button>


      <div className="p-6 bg-gray-100 rounded shadow-md max-w-4xl max-w-full">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Product List Page {page + 1}
        </h1>

        <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {copyOfProducts.map((pro, ind) => (
            <Card product={pro} key={ind} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 py-6">
          {/* Previous Button */}
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${page === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow"
              }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {pagenumber.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded-lg border transition-all duration-200 ${page === p
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {p + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${page === totalPages - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow"
              }`}
          >
            Next
          </button>
        </div>

      </div>






    </>
  )
}

export default Home