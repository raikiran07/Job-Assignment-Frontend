import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { postJob } from '../utils/api'
import axios from 'axios'
import { userContext } from '../userContext/userContext'

const CreateJob = () => {
    const navigate = useNavigate()
    const [candidates,setCandidates] = useState('')
    const {user} = useContext(userContext)

    const [job,setJob] = useState({
        title:'',
        description:'',
        experience:'Fresher',
        endDate:''

})

const handleSubmit = async (e) => {
    e.preventDefault()
    const candidateArr = candidates.split(',')
    job.candidates = candidateArr
    const res = await postJob(job);

    if(res?.status==201){
        const msg = res?.data?.msg
        alert(msg)
        navigate('/home')
    }

    console.log(res)
    
}

useEffect(()=>{
    if(!user){
        navigate('/login')
    }
    },[])


// Generic handleChange function to update the corresponding field in formData
const handleChange = (e) => {
    const { name, value } = e.target;

    // Spread the current state and update only the changed field
    setJob({
      ...job,
      [name]: value,
    });
  }

  return (
    <div className='flex items-start justify-center'>
    <Sidebar/>
    <div className="main-container w-[90%] border h-[100vh] px-8 py-6">
        <h1>Hello from create Job</h1>
        <div className="right mt-8">
            <form className='py-2' onSubmit={handleSubmit}>
                <table>
                    <tr className=''>
                        <td>
                        <label htmlFor="title" className='mr-6 text-xl'>Job Title</label>
                        </td>
                        <td>
                        <input type="text" className='bg-transparent rounded-md border border-ternary p-1 focus:outline-ternary focus:border-ternary placeholder:font-light' required
                name="title"
                value={job.title}
                onChange={handleChange}
                placeholder='software engineer'
                 />

                        </td>
                    </tr>

                    <tr className='mt-4'>
                        <td><label htmlFor="description" className='mr-6 text-xl'>Job Description</label></td>
                        <td>
                        <textarea type="text" className='bg-transparent rounded-md border border-ternary p-1 focus:outline-ternary focus:border-ternary placeholder:font-light' required
                name="description"
                value={job.description}
                onChange={handleChange}
                placeholder='software engineer'
                 />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="experienc" className='mr-6 text-xl'>Experience Level</label>
                        </td>
                        <td>
                        <select name="experience" id="experience" className='bg-transparent rounded-md border border-ternary p-1 focus:outline-ternary focus:border-ternary placeholder:font-light'
                value={job.experience}
                onChange={handleChange}
                >
                    <option value="Fresher">Fresher</option>
                    <option value="Mid Senior">Mid Senior</option>
                    <option value="Senior">Senior</option>
                    <option value="Team Lead">Team Lead</option>
                </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="candidate" className='mr-6 text-xl'>Add Candidate</label>
                        </td>
                        <td>
                        <input type="text" name="candidates" value={candidates} onChange={(e)=>setCandidates(e.target.value)}
                className='bg-transparent rounded-md border border-ternary p-1 focus:outline-ternary focus:border-ternary placeholder:font-light'
                 />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="enddate" className='mr-6 text-xl'>End Date</label>
                        </td>
                        <td>
                        <input type="date" name="endDate" value={job.endDate}  onChange={handleChange}
                className='bg-transparent rounded-md border border-ternary p-1 focus:outline-ternary focus:border-ternary placeholder:font-light '
                 />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                             <button className='bg-ternary max-w-content py-1 rounded-md text-white mb-4 w-full max-w-sm block mx-auto mt-8' type="submit">Send</button>
                        </td>
                    </tr>
                </table>
              


             

                   
            </form>
        </div>
    </div>


</div>
  )
}

export default CreateJob