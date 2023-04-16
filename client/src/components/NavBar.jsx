import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConnectWallet } from "@thirdweb-dev/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { ImCross } from 'react-icons/im'

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={`fixed bg-black h-[100%] w-full top-0 bottom-0 z-[100] transition-all delay-150 lg:hidden ease-in  ${!menu ? 'left-[-100%]' : 'left-0'} `}>
        <button className='absolute right-7 top-7 cursor-pointer hover:text-purple-500' onClick={() => setMenu(false)}>
          <ImCross size={30} />
        </button>

        <div className='flex gap-[4rem] flex-col items-center justify-center h-[100%]'>
          <div>
            <Link><p className="font-bold text-3xl hover:text-purple-500 hover:underline">Home</p></Link>
          </div>
          <div>
            <Link><p className="font-bold text-3xl hover:text-purple-500 hover:underline">About</p></Link>
          </div>
          <div>
            <Link><p className="font-bold text-3xl hover:text-purple-500 hover:underline">Working</p></Link>
          </div>
          <div>
            <Link><p className="font-bold text-3xl hover:text-purple-500 hover:underline">Features</p></Link>
          </div>
          <div>
            <Link><p className="font-bold text-3xl hover:text-purple-500 hover:underline">Contact</p></Link>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#070d13] shadow-lg flex items-center justify-center fixed top-0 z-50 border-b-[1px] border-gray-900 py-2 bg-opacity-40 backdrop-blur-md'>

        <div className='flex p-3 w-full items-center justify-between lg:w-[75rem]'>
          <div>
            <Link to="/">
              <img className='h-12' src="images/CampusCrate.svg" alt="CampusCrate Logo" />
            </Link>
          </div>

          <div className='gap-6 lg:flex md:flex hidden'>
            <Link to="/">
              <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>About</p>
            </Link>
            <Link to="/dashboard">
              <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>Dashboard</p>
            </Link>
            <Link to="/dashboard">
              <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>Proposals</p>
            </Link>
            <Link to="/dashboard">
              <p className='text-[#e7e8e8] hover:text-purple-600 font-medium  hover:underline'>Working</p>
            </Link>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} />

            <button
              type="button"
              onClick={() => {
                if (menu === false) {
                  setMenu(true);
                } else {
                  setMenu(false);
                }
              }}
              className="animate-pulse md:hidden text-gray-900 bg-yellow-50 z-[999999] hover:bg-yellow-50 border border-gray-200 focus:ring-[2.5px] focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
            >
              {!menu ? <HiMenuAlt3 /> : <FiX />}
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default NavBar