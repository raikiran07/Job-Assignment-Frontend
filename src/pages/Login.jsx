import React, { useEffect } from 'react'
import { User,Phone,EnvelopeSimple,Password } from '@phosphor-icons/react'
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from 'react';
import { verifyEmailOtp, verifyMobileOtp } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api';
import { useContext } from 'react';
import { userContext } from '../userContext/UserContext';
import { Password } from '@phosphor-icons/react';


const Login = () => {
console.log("hello")
const {setUser} = useContext(userContext)

const navigate = useNavigate()
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 
const handleLogin = async (e) => {
    e.preventDefault()
    const res = await loginUser({email,password})
    console.log(res)
    if(res.status==200){
       
        setUser({
            name:res.data.name,
            userId:res.data.userId
        })
        alert("login successful")
        navigate('/home')
        
    }
}


  return (
    <div className='px-16 flex items-center justify-between min-h-[80vh] gap-4'>
        <div className="left text-lg flex-1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque maxime vitae reprehenderit laborum fuga dolores nobis omnis rerum esse in molestiae, praesentium facilis molestias harum ratione quisquam! Laborum dolore natus temporibus eveniet labore consequatur exercitationem quod hic suscipit, accusamus vitae, ab totam quos, reiciendis molestias illum blanditiis amet perferendis?</p>
        </div>
        <div className="right flex-1">
            <form className='border border-ternary rounded-md py-2 px-4' onSubmit={handleLogin}>
                <h2 className='font-semibold text-2xl text-center'>Login To Your Account</h2>
                <p className='text-center text-sm'>Lorem Ipsum is simply dummy text</p>

                   {/* Company Email Otp Field */}
                   <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <EnvelopeSimple className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="email"
                        placeholder="Company Email"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    </div>
                
                   

                {/* Phone Field */}
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <Password className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    </div>

                    <button className='bg-ternary w-full py-1 rounded-md text-white my-4 max-w-sm block mx-auto'
                   type="submit"
                    >Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login