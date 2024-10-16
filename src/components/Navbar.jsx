import React from 'react'
import Logo from '../assets/logo.png'
import { userContext } from '../userContext/UserContext'
import { useContext } from 'react'
import DownArrow from '../assets/down-triangle.png'

const Navbar = () => {

    const {user} = useContext(userContext)


  return (
    <nav className='border-b border-secondary flex items-center justify-between px-16 py-4'>
        <div className="logo">
            <img src={Logo} alt="logo" className='max-w-[6rem]' />
        </div>
        <div className="user-details flex items-center justify-center gap-6">
            <h2 className='font-medium'>Contact</h2>

            {/* conditiionally rendering the element only when the user is logged in */}
            {
                user && <div className='border border-secondary flex items-center justify-between gap-3 py-1 px-2 rounded-md'> 
                    <div className="circle w-6 h-6 rounded-full bg-secondary"></div>
                    <h2>{user.name}</h2>
                    <img src={DownArrow} alt="upside-down-triangle" className='max-w-[1.3rem]' />
                </div>
            }

        </div>
    </nav>
  )
}

export default Navbar