import React from 'react'
import { User,Phone,EnvelopeSimple,Password } from '@phosphor-icons/react'
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from 'react';
import { registerUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate()
    

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        phoneNo:'',
        size:'',
        companyName:''

})


// Generic handleChange function to update the corresponding field in formData
const handleChange = (e) => {
    const { name, value } = e.target;

    // Spread the current state and update only the changed field
    setUser({
      ...user,
      [name]: value,
    });
  }


//   handle form submit
const handleSubmit = async (e)=> {
    try {
        e.preventDefault()
        
        // calling register user api
        await registerUser(user)
        localStorage.setItem('email',user.email)
        navigate('/verify')

        
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className='px-16 flex items-center justify-between min-h-[80vh] gap-4'>
        <div className="left text-lg flex-1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque maxime vitae reprehenderit laborum fuga dolores nobis omnis rerum esse in molestiae, praesentium facilis molestias harum ratione quisquam! Laborum dolore natus temporibus eveniet labore consequatur exercitationem quod hic suscipit, accusamus vitae, ab totam quos, reiciendis molestias illum blanditiis amet perferendis?</p>
        </div>
        <div className="right flex-1">
            <form className='border border-ternary rounded-md py-2 px-4' onSubmit={handleSubmit}>
                <h2 className='font-semibold text-2xl text-center'>Sign Up</h2>
                <p className='text-center text-sm'>Lorem Ipsum is simply dummy text</p>

                {/* Name Field */}
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <User className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        value={user.name}
                        name="name"
                        onChange={handleChange}
                        required
                    />
                    </div>

                     {/* Phone Field */}
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <Phone className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Phone no."
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        name="phoneNo"
                        value={user.phoneNo}
                        onChange={handleChange}
                        required
                    />
                    </div>

                     {/* Company Name Field */}
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto ">
                    <User className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        name="companyName"
                        value={user.companyName}
                        onChange={handleChange}
                        required
                    />
                    </div>


                     {/* Company Email Field */}
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <EnvelopeSimple className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Company Email"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                    </div>

                 {/* Size Field */}
                 <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <HiOutlineUserGroup className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Employee Size"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        name="size"
                        value={user.size}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <Password className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="password"
                        placeholder="Set Password"
                        className="w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <p className='text-xs text-center my-4 font-bold text-primary'>By clicking on proceed you wil accept our <br></br> <span className='text-ternary'>Terms</span> & <span className='text-ternary'>Conditions</span></p>

                    <button className='bg-ternary max-w-content py-1 rounded-md text-white mb-4 w-full max-w-sm block mx-auto' type="submit">Proceed</button>
            </form>
        </div>

    </div>
  )
}

export default Register