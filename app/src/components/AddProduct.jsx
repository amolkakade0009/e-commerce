import React, { useContext, useState } from 'react'
import { UrlContext } from '../context/UrlContext'

const AddProduct = () => {

  const { baseUrl } = useContext(UrlContext)

  const [imagePreview, setImagePreview] = useState()
  const [error, setError] = useState()
  const [success, setSuccess] = useState("")

  const [form, setForm] = useState({
    pName: "",
    pCategory: "",
    pBrandName: "",
    pPrice: "",
    pDiscount: "",
    pDescription: "",
    pImage: ""
  })

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
    console.log(form)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    // setForm({ ...form, pImage : [e.target.files[0]]}) // store the file object
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const addProduct = (e) => {
    e.preventDefault();
    
    console.log(form)
    const { pName, pCategory, pBrandName, pPrice, pDiscount, pDescription, pImage } = form

    if (!pName || !pCategory || !pBrandName || !pPrice || !pDiscount || !pDescription || !pImage) {
      setError("Please fill in all fields.")
    }

    fetch(baseUrl + " ", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(body =>
        console.log(body),
        setSuccess("Product Added Sucessfully")
      )
      .catch(error => console.log("Error :" + error))

    setForm({
      pName: "",
      pCategory: "",
      pBrandName: "",
      pPrice: "",
      pDiscount: "",
      pDescription: "",
      pImage: ""
    })
    setError("")
    setSuccess("")
    setImagePreview("")
  }

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
              <input type="text" name='pName' value={form.pName} onChange={handleFormChange} placeholder="John Doe" className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Category</label>
              <input type="text" name='pCategory' value={form.pCategory} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Brand Name</label>
              <input type="text" name='pBrandName' value={form.pBrandName} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Price</label>
              <input type="number" name='pPrice' value={form.pPrice} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Discount</label>
              <input type="number" name='pDiscount' value={form.pDiscount} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Product Description</label>
              <input type="text" name='pDescription' value={form.pDescription} onChange={handleFormChange} className="w-full mt-1 p-2 border rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Upload Product Image</label>
              <input
                type="file"
                name='pImage' 
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
    </>
  )
}

export default AddProduct
