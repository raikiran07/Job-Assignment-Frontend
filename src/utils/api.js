import axios from "axios";

const registerUser = async (user) => {
try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND_USER}/register`,user)
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

const verifyEmailOtp = async (otp,email) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND_USER}/verifyemail`,{
            otp,
            email
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

const verifyMobileOtp = async (otp,email) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND_USER}/verifymobile`,{
            otp,
            email
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}


const loginUser = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND_USER}/login`,user,{
            withCredentials:true
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

const postJob = async (job) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND_JOB}`,job,{
            withCredentials:true
        })
        return res
    } catch (error) {
        console.log(error)
    }
}


const mypostedJobs = async () => {
    console.log("hello from posted jobs")
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL_BACKEND_JOB}/postedjobs`,{},{
        withCredentials:true
    })
    return res
}

const logoutUser = async () => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL_BACKEND_USER}/logout`,{},{
        withCredentials:true
    })

    return res
}



export {registerUser,verifyEmailOtp,verifyMobileOtp,loginUser,postJob,mypostedJobs,logoutUser}