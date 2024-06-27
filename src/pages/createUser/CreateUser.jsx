import React from 'react'
import { Input, Select } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { createUser } from '../../api';

const CreateUser = () => {
    const {handleSubmit,
        control, 
        formState:{errors},
    }= useForm();
   console.log(errors);
  
    const onSubmit = async (data)=>{
      const newUser = await createUser(data)
      console.log(newUser);
    };
  return (
    <div >
        <div className=' bg-blue-300 w-[300px] h-[300px] border m-auto mt-[100px] rounded-2xl'>
      <h1 className='font-bold  text-[20px] text-center mt-[10px]'>Create User</h1>
 <form className='w-[250px] h-[250px]  m-auto flex flex-col justify-around mt-[10px] ' onSubmit={handleSubmit(onSubmit)} >
            <div>
                 <Controller
           name="name"
           control={control}
           rules={{required: "userName must not be empty"}}
           render={({field}) => (
               <Input placeholder="Name..."
               {...field}
               status={errors.name ? "error" : ""}/>
           )}
           />
           {errors.name && <p>userName must not be empty</p>}
            </div>

            <div>
             <Controller
           name="email"
          
           control={control}
           rules={{required: "Email must not be empty"}}
           render={({field})=>(
            
               <Input placeholder="Email..."
               {...field} status={errors.email ? "error" : ""}  />
           )}
           />
            {errors.email && <p>Email must not be empty</p>}
            </div>
          
            <div>
                 <Controller
           name="password"
           control={control}
           
           rules={{required: "Password must not be empty"}}
           render={({field})=>(
            
               <Input placeholder="Password..."
               {...field}  status={errors.password ? "error" : ""}/>
           )}
           />
            {errors.password && <p>Password must not be empty</p>}
            </div>
            <div>
                 <Controller
           name="role"
           control={control}
           
           rules={{required: "Role must be selected"}}
           render={({field})=>(
            <Select
            {...field}
    showSearch
    placeholder="Select a role"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      { value: 'user', label: 'User' },
      { value: 'admin', label: 'Admin' },
      
    ]}
  />
              
           )}
           />
            {errors.password && <p>Role must  be selected</p>}
            </div>
          
          
     
        <button className='rounded bg-blue-500 text-white w-[90px]'  type="submit">Send</button>
        </form>
        </div>
       
    </div>
  )
}

export default CreateUser