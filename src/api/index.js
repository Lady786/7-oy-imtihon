import axios from "axios";

export async function createProduct(data){
    try {
        const header = {
            "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        };
         const response = await axios.post(`https://ecommerce-backend-fawn-eight.vercel.app/api/products`, data,{
            headers: header,
         })
         return response;
    } catch (error) {
        console.log(error);


    };
};

export async function getProductId(productId){
    try {
        const header = {
            "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        };
         const response = await axios.get(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${productId}`, {
            headers: header,
         })
         return response;
    } catch (error) {
        console.log(error);


    };
}

export async function editProduct(data, productId){
    try {
        const header = {
            "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        };
         const response = await axios.put(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${productId}`, data,{
            headers: header,
         })
         return response;
    } catch (error) {
        console.log(error);


    };
};

export async function deleteProduct(productId){
   try {
    const header = {
        "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
    };
    const response = await axios.delete(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${productId}`,
        {
            headers: header,
         }
    );
    return response
   } catch (error) {
    console.log(error);
   } 
}