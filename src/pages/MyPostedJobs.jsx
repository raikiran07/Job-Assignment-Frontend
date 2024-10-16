import React, { useEffect, useState } from 'react'
import { mypostedJobs,deleteJob } from '../utils/api'
import Sidebar from '../components/Sidebar'

const MyPostedJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetchData()
        console.log("what is this")
        return ()=>{

        }
    },[])

    const fetchData = async () => {
        const res = await mypostedJobs()
        console.log(res.data)
        setJobs(res.data)
        
    }


    const handleDelete = async (id,title) => {
     const res = await deleteJob(id);
     if(res.status==200){
      alert(`Job Deleted ${title}`)
      const filterJobs = jobs.filter(job=>job._id != id);
      setJobs(filterJobs)
     }
    }


  return (
     <div className='flex items-start justify-center'>
        <Sidebar/>
        <div className="main-container w-[90%] border h-[100vh] px-8 py-6">
           <h1>Hello From Posted Jobs</h1>
           <div className="job-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 lg:gap-2">
            {
              jobs.map(job=>{
                return <div key={job._id} className='max-w-56 border p-2 rounded-md bg-inputBox'>
                  <h2 className='text-sm font-bold'>Position - {job.title}</h2>
                  <p className='text-sm my-1'>Experienc - {job.experience}</p>
                  <p className='text-sm my-1'>Description - {job.description}</p>
                  <button className='bg-red-300 text-red-500 p-1 text-xs rounded-md my-2' onClick={()=>handleDelete(job._id,job.title)}>Delete</button>
                </div>
              })
            }
           </div>
        </div>


    </div>
  )
}

export default MyPostedJobs