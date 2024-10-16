import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'
import CreateJobPage from './pages/CreateJob'
import EditJobPage from './pages/EditJob'
import MyPostedJobsPage from './pages/MyPostedJobs'
import VerifyPage from './pages/VerifyPage'







function App() {


 

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<RegisterPage/>
        },
        {
          path:'/verify',
          element:<VerifyPage/>
        },
        {
          path:'/login',
          element:<LoginPage/>
        },
        {
          path:'/home',
          element:<HomePage/> 
        },
        {
          path:'/home/job',
          element:<CreateJobPage/>
        },
        {
          path:'/home/job/edit/:jobId',
          element:<EditJobPage/>
        },
        {
          path:'/home/myjob',
          element:<MyPostedJobsPage/>
        }
      ]
    }
    ])
  
  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
