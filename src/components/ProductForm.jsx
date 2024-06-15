import { Button, Flex, Input } from 'antd'
import React, { useEffect, useState } from 'react'

const initialState = {
    title: "",
        subtitle: "",
        description:"",
        size: "",
        color:"",
        price:"",
        image:"",
        rate:""
}
const ProductForm = ({onSubmit, initialValues}) => {
    const [prodForm, setProdForm] = useState(initialState)

    const handleChange = (e)=>{
        const {name, value} = e.target
setProdForm((prevForm) =>({...prevForm, [name]: value}))
    }

    const handleSubmit = ()=>{
        onSubmit(prodForm)
    }

    useEffect(()=>{
        if(initialValues){
            setProdForm(initialValues)
        }
        return ()=>{
           setProdForm(initialState) 
        }
        },[initialValues])
  return (
    <div>
<form action="">
    
    <div>
    <Input 
    placeholder="Title"
     name='title'
      value={prodForm.title}
       onChange={handleChange} 
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Subtitle"
     name='subtitle'
      value={prodForm.subtitle}
       onChange={handleChange} 
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Description"
     name='description'
      value={prodForm.description}
       onChange={handleChange} 
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Size"
     name='size'
      value={prodForm.size}
       onChange={handleChange} 
       type='number'
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Price"
     name='price'
      value={prodForm.price}
       onChange={handleChange} 
       type='number'
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Image"
     name='image'
      value={prodForm.image}
       onChange={handleChange} 
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Color"
     name='color'
      value={prodForm.color}
       onChange={handleChange} 
       />
    </div>
    <br />
    <div>
    <Input 
    placeholder="Rate"
     name='rate'
      value={prodForm.rate}
       onChange={handleChange} 
       type='number'
       />
    </div>
   <Button onClick={handleSubmit}>Submit</Button>
</form>
    </div>
  )
}

export default ProductForm