import React from 'react'
import { Input } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const {handleSubmit,
        control, 
        formState:{errors},
    }= useForm();
   console.log(errors);
  
    const onSubmit = (data)=>{
        console.log(data);
        navigate("/login")
    };
  return (
    <div >
        <div className=' bg-blue-300 w-[300px] h-[300px] border m-auto mt-[100px] rounded-2xl'>
      <h1 className='font-bold  text-[20px] text-center mt-[10px]'>Register</h1>
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
          
          
     
        <button className='rounded bg-blue-500 text-white w-[90px]'  type="submit">Send</button>
        </form>
        </div>
       
    </div>
  )
}

export default Register