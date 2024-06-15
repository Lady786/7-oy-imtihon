import { Button } from 'antd'
import React from 'react'
import { deleteProduct } from '../api';

const DeleteProduct = ({productId}) => {
    const handleDelete = async ()=>{
        const del = confirm("Ma'lumotlar o'chirilmoqda");
        if(del){
         const response = await deleteProduct(productId)  ;
         if(response){
            alert("Mahsulot o'chirildi")
         } 
        }

    }
  return (
    <div>
        <Button onClick={handleDelete} type='primary'>Delete</Button>
    </div>
  )
}

export default DeleteProduct