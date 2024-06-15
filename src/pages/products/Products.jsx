import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductsTable from '../../components/ProductsTable';
import useGetProduct from '../../hooks/useGetProduct';
import CreateProduct from '../../components/CreateProduct';




const Products = () => {

    const products = useGetProduct();



  return (
    <div> 
        <CreateProduct/>
        <ProductsTable products={products}/>
    </div>
  )
}

export default Products