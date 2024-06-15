import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm';
import { createProduct } from '../api';

const CreateProduct = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  const onCreate = async(productForm)=>{
const response = await createProduct(productForm);
if(response){
    alert("Sucsess")
    };
handleOk();
  };
  return (
    <div>
        <Button onClick={showModal} type="primary">Create</Button>
        <Modal title="Basic Modal"  
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>

       <ProductForm onSubmit={onCreate}/>
      </Modal>
    </div>
  )
}

export default CreateProduct