
import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../userContext/UserContext';

const Home = () => {
const navigate = useNavigate()
const {user} = useContext(userContext)

const createInterview = async () => {
 navigate('/home/job')
}

useEffect(()=>{
if(!user){
    navigate('/login')
}
},[])


  return (
    <div className='flex items-start justify-center'>
        <Sidebar/>
        <div className="main-container w-[90%] border h-[100vh] px-8 py-6">
            <button className='text-2xl bg-ternary text-white p-2 rounded-md' onClick={createInterview}>Create Interview</button>
        </div>


    </div>
  )
}

export default Home