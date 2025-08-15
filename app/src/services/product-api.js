import { useContext } from 'react';
import { UrlContext } from '../context/UrlContext';

export const useProductService = () => {
    const token = localStorage.getItem("token");
    const { baseUrl } = useContext(UrlContext);

    const saveProduct = async (form, imageFile) => {
        const { name, category, subCategory, brandName, price, discount, description } = form;
        
        const formData = new FormData();
        const request = {
            name: name,
            category: category,
            subCategory,
            brandName: brandName,
            price: price,
            discount: discount,
            description: description
        };

        formData.append("request", new Blob([JSON.stringify(request)], { type: "application/json" }));
        formData.append("image", imageFile);

        const response = await fetch(`${baseUrl}/product/add-product`, {
            method: "POST",
            body: formData,
            headers: {
                "Authorization": `Bearer ${token}`
                // "Content-Type" : "multipart/form-data"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return response.json();
    };

    const getProduct = async(page = 0 , size = 10 ) =>{
        const response = await fetch(`${baseUrl}/product/list?page=${page}&size=${size}`,{
          responseType: "blob",
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error(`Error: ${response.status}`)
        }
        return response.json()

    }

    //const updateProduct = 
    // return { saveProduct, updateProduct };
    return { saveProduct , getProduct };
};
