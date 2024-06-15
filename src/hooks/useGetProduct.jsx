import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
    async function getProducts(){
    try {
     const response  = await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/products")  ;
    // console.log(response.data);
     if(response.data) setProducts(response.data);
    } catch (error) {
        console.log(error);
    }
    }
    getProducts()
    });
    return products
}

export default useGetProduct