import React from 'react'
import { Link } from 'react-router-dom'
import { ConnectWallet } from "@thirdweb-dev/react";

const NavBar = () => {
  return (
    <div className='w-full bg-[#070d13] shadow-lg flex items-center justify-center fixed top-0 z-50 border-b-[1px] border-gray-900'>
      <div className='flex p-3 w-full items-center justify-between lg:w-[75rem]'>
        <div>
          <Link to="/">
            <img className='h-12' src="images/CampusCrate.svg" alt="CampusCrate Logo" />
          </Link>
        </div>

        <div className='flex gap-6'>
          <Link to="/">
            <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>About</p>
          </Link>
          <Link to="/dashboard">
            <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>Dashboard</p>
          </Link>
          <Link to="/dashboard">
            <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>Dashboard</p>
          </Link>
          <Link to="/dashboard">
            <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>Dashboard</p>
          </Link>
        </div>

        <div>
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} />
        </div>
      </div>
    </div>
  )
}

export default NavBar