import React, { useEffect, useState } from 'react'
import { mypostedJobs } from '../utils/api'
import Sidebar from '../components/Sidebar'

const MyPostedJobs = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetchData()
        console.log(jobs)
        if(jobs.length > 1){
          console.log("jobs is greater")
        }
        return ()=>{

        }
    },[])

    const fetchData = async () => {
        const res = await mypostedJobs()
        setJobs(res.data)
        
    }
  return (
     <div className='flex items-start justify-center'>
        <Sidebar/>
        <div className="main-container w-[90%] border h-[100vh] px-8 py-6">
           <h1>Hello From Posted Jobs</h1>
           <div className="job-container">
            {
              jobs.map(job=>{
                return <div key={job._id}>
                  <h2>{job.title}</h2>
                  <p>{job.description}</p>
                </div>
              })
            }
           </div>
        </div>


    </div>
  )
}

export default MyPostedJobs