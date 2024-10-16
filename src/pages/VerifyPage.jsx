import React, { useEffect } from 'react'
import { User,Phone,EnvelopeSimple,Password } from '@phosphor-icons/react'
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from 'react';
import { verifyEmailOtp, verifyMobileOtp } from '../utils/api';
import { useNavigate } from 'react-router-dom';


const VerifyPage = () => {
console.log("hello")

const navigate = useNavigate()
 const [emailOtp,setEmailOtp] = useState('')
 const [mobileOtp,setMobileOtp] = useState('')
 const [verificationStatus, setVerificationStatus] = useState({
    emailVerified: false,
    mobileVerified: false,
  });


const handleVerifyMobileOtp = async (e) => {
    e.preventDefault()
   const res = await verifyMobileOtp(mobileOtp,localStorage.getItem('email'))
   console.log(res.status)
   if(res.status==200){
    setVerificationStatus((prevState) => ({
        ...prevState,
        mobileVerified: true,
      }));
   }
  

}

const handleVerifyEmailOtp = async (e) => {
    e.preventDefault()
    const res = await verifyEmailOtp(emailOtp,localStorage.getItem('email'))
    console.log(res)
    if(res.status==200){
        setVerificationStatus((prevState) => ({
            ...prevState,
            emailVerified: true,
          }));
    }
   
}

// const handleLogin = (email,mobile) => {
//     console.log(email,mobile)
//     if(email && mobile){
//         navigate('/login')
//     }
//     console.log("not verified")
// }

useEffect(()=>{
    if(verificationStatus.emailVerified && verificationStatus.mobileVerified){
        navigate('/login')
    }
},[verificationStatus])



  return (
    <div className='px-16 flex items-center justify-between min-h-[80vh] gap-4'>
        <div className="left text-lg flex-1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque maxime vitae reprehenderit laborum fuga dolores nobis omnis rerum esse in molestiae, praesentium facilis molestias harum ratione quisquam! Laborum dolore natus temporibus eveniet labore consequatur exercitationem quod hic suscipit, accusamus vitae, ab totam quos, reiciendis molestias illum blanditiis amet perferendis?</p>
        </div>
        <div className="right flex-1">
            <div className='border border-ternary rounded-md py-2 px-4'>
                <h2 className='font-semibold text-2xl text-center'>Verify Your Account</h2>
                <p className='text-center text-sm'>Lorem Ipsum is simply dummy text</p>

                   {/* Company Email Otp Field */}
                   <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <EnvelopeSimple className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Email OTP"
                        className={`w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light ${verificationStatus.emailVerified ? 'bg-green-200' : ''}`}
                        value={emailOtp}
                        onChange={(e)=>setEmailOtp(e.target.value)}
                        required
                        readOnly={verificationStatus.emailVerified ? 'true' : 'false'}
                    />
                    </div>
                
                    <button className='bg-ternary w-full py-1 rounded-md text-white my-4 max-w-sm block mx-auto'
                    onClick={(e)=>handleVerifyEmailOtp(e)}
                    >Verify</button>

                {/* Phone Field */}
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-inputBox mt-6 mx-auto">
                    <Phone className="text-inputText mr-2" /> {/* Icon */}
                    <input
                        type="text"
                        placeholder="Mobile OTP"
                        className={`w-full outline-none placeholder:text-inputText text-inputText bg-inputBox font-light ${verificationStatus.mobileVerified ? 'bg-green-200' : ''}`}
                        name="phoneNo"
                        value={mobileOtp}
                        onChange={(e)=>setMobileOtp(e.target.value)}
                        required
                        readOnly={verificationStatus.mobileVerified ? 'true' : 'false'}
                    />
                    </div>

                    <button className='bg-ternary w-full py-1 rounded-md text-white my-4 max-w-sm block mx-auto'
                    onClick={(e)=>handleVerifyMobileOtp(e)}
                    >Verify</button>
            </div>
        </div>

    </div>
  )
}

export default VerifyPage