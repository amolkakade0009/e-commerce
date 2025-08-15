import React, { useEffect, useState } from 'react'
import { CATEGORIES } from '../services/category-data';
import { useProductService } from '../services/product-api';
import { ProductCard } from './ProductCard';
import { Card } from './Card';

const AddProduct = () => {
  const { saveProduct, getProduct } = useProductService();

  const [selectedCategory, setSelectedCategory] = useState()
  const [subCategory, setSubCategory] = useState([])

  const handleCategoryChange = (e) => {
    const category = e.target.value
    setSelectedCategory(category)
    setSubCategory(CATEGORIES[category] || [])
  }

  const [imageFile, setImageFile] = useState()
  const [imagePreview, setImagePreview] = useState()
  const [error, setError] = useState()
  const [success, setSuccess] = useState("")

  const [form, setForm] = useState({
    name: "test",
    category: "Electronics & Gadgets",
    subCategory: "Mobiles",
    brandName: "HP",
    price: "200",
    discount: "10",
    description: "test",
    image: ""
  })

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0])
  }

  useEffect(() => {
    if (imageFile) {
      setImagePreview(URL.createObjectURL(imageFile))
    }
  }, [imageFile])

  /*useEffect(() => {
    console.log(form)
  }, [form])*/


  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const data = await saveProduct(form, imageFile);
      console.log(data);
      setSuccess("Product Added Successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to add product");
    }

    setForm({
      name: "",
      category: "",
      subCategory: "",
      brandName: "",
      price: "",
      discount: "",
      description: "",
      image: ""
    })
    setImagePreview("")
    setSelectedCategory("")
    setSubCategory([]);
  }


  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState()

  const fetchProduct = async () => {
    try {
      const data = await getProduct(page, 10)
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


      <div className='bg-gray-600 min-h-screen py-10 px-4'>
        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 mb-4 text-sm text-center">{success}</p>}
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Add New Product</h1>


        <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md flex flex-col lg:flex-row gap-6">
          {/* Left Side: Form */}
          <form onSubmit={addProduct} className="flex-1 space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Product Name</label>
              <input type="text" name='name' value={form.name} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Category</label>
              {/* <input type="text" name='category' value={form.category} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" /> */}

              <select name="category"
                value={form.category}

                onChange={(e) => {
                  handleFormChange(e)
                  handleCategoryChange(e)
                }} className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value=""> Select Category</option>
                {Object.keys(CATEGORIES).map((category, index) => (
                  <option value={category} key={index}> {category}</option>
                ))}
                <option value="Other"> Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Sub Category</label>
              <select name="subCategory"
                disabled={!selectedCategory}
                value={form.subCategory}
                onChange={(e) => handleFormChange(e)} id="" className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value=""> Select Sub Category</option>
                {subCategory.map((item, index) => (
                  <option value={item} key={index}> {item}</option>
                ))}
                <option value="Other"> Other</option>

              </select>

            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Brand Name</label>
              <input type="text" name='brandName' value={form.brandName} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Price</label>
              <input type="number" name='price' value={form.price} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Discount</label>
              <input type="number" name='discount' value={form.discount} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Description</label>
              <input type="text" name='description' value={form.description} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Upload Product Image</label>
              <input
                type="file"
                name='image'
                accept='image/*'
                onChange={(e) => {
                  handleFormChange(e)
                  handleImageChange(e)
                }}
                className="w-full mt-1 p-2 border rounded bg-gray-100"
              />
            </div>

            <input type="submit" value="Submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer" />
          </form>

          {/* Right Side: Image Preview */}
          <div className="flex-1 flex items-center justify-center bg-gray-100 rounded p-4">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="max-w-xs rounded border shadow" />
            ) : (
              <p className="text-gray-500 text-center">Image preview will appear here</p>
            )}
          </div>
        </div>
      </div>





      {/* Displayin fetch product */}

      <button
        onClick={fetchProduct}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
      >
        Get Product
      </button>

      <div className="p-6 bg-gray-100 rounded shadow-md max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Product List (Page {page + 1})
        </h1>

        <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {products.map((pro, ind) => (
            <Card product={pro} key={ind}  />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className={`px-4 py-2 rounded ${page === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            Previous
          </button>

          <h1 className="text-lg font-medium">
            {page + 1} out of {totalPages}
          </h1>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className={`px-4 py-2 rounded ${page === totalPages - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            Next
          </button>
        </div>
      </div>


    </>
  )
}

export default AddProduct
