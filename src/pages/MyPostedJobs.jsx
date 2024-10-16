import React, { useEffect, useState } from 'react'
import { mypostedJobs } from '../utils/api'
import Sidebar from '../components/Sidebar'

const MyPostedJobs = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetchData()

        return ()=>{

        }
    },[])

    const fetchData = async () => {
        const res = await mypostedJobs()
        console.log(res)
    }
  return (
     <div className='flex items-start justify-center'>
        <Sidebar/>
        <div className="main-container w-[90%] border h-[100vh] px-8 py-6">
           <h1>Hello From Posted Jobs</h1>
        </div>


    </div>
  )
}

export default MyPostedJobs