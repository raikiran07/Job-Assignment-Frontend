import React from 'react'
import { House } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import { logoutUser } from '../utils/api';
import { useContext } from 'react';
import { userContext } from '../userContext/UserContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate()
    const {setUser,user} = useContext(userContext)
    console.log(user)

    const handleLogout = async () => {
            const res = await logoutUser();
            if(res.status==200){
                setUser(null)
                alert("User Logout Successful")
                navigate('/login')
            }
            
    }

  return (
    <aside className='w-[10%] border h-[100vh] flex flex-col items-center gap-6'>
        <Link to="/home" className='mt-4'>
        <IoMdHome fill='black' size={32}/>
        </Link>
        <Link to="/home/myjob">
        <FaSuitcase fill="black" size={28} />
        </Link>

        <button className='border p-2 bg-red-400 rounded-md text-white absolute bottom-8 hover:bg-red-500 transition-all ease-linear'
        onClick={handleLogout}
        >Logout</button>
        
       

    </aside>
  )
}

export default Sidebar