import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneralLayout from './pages/GeneralLayout'
import Home from './pages/Home'
import Products from './pages/products/Products'
import Category from './pages/categories/Category'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import Protected from './hooks/Protected'
import CreateUser from './pages/createUser/CreateUser'

const App = () => {
  return <BrowserRouter>
  <Routes  >
  <Route path="/" element={<GeneralLayout/>}>
 <Route index element={ <Protected><Home/></Protected>}/>
 <Route path="/products" element={<Protected><Products/></Protected>}/>
 <Route path='/category' element={<Protected><Category/></Protected>}/>
 <Route path='/user' element={<Protected><CreateUser/></Protected>}/>
  </Route>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
   
  </Routes>
  </BrowserRouter>
}

export default App