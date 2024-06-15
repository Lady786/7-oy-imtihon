import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneralLayout from './pages/GeneralLayout'
import Home from './pages/Home'
import Products from './pages/products/Products'
import Category from './pages/categories/Category'
import Login from './pages/login/Login'

const App = () => {
  return <BrowserRouter>
  <Routes  >
  <Route path="/" element={<GeneralLayout/>}>
 <Route index element={<Home/>}/>
 <Route path="products" element={<Products/>}/>
 <Route path='category' element={<Category/>}/>
  </Route>
  <Route path='login' element={<Login/>}/>
   
  </Routes>
  </BrowserRouter>
}

export default App