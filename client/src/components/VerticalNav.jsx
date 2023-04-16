import React, { useState } from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { useAddress } from '@thirdweb-dev/react';
import { useNavigate } from 'react-router-dom';


const VerticalNav = ({ children, name }) => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const address = useAddress();
    if (!address) {
        navigate('/');
    }

    return (
        <div className='pt-0 mt-0'>
            <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform lg:translate-x-0 md:translate-x-0 ${menu ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
                <button className='absolute lg:hidden md:hidden block right-[-2.5rem] top-5 cursor-pointer text-purple-500 hover:text-white' onClick={() => setMenu(!menu)}>
                    {!menu ? <HiMenuAlt3 size={28} /> : <FiX size={28} />}
                </button>
                <div className="h-full mt-0 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/">
                                <img className='h-12 m-2 mb-4' src="images/CampusCrate.svg" alt="CampusCrate Logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/proposals" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Proposals</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">All</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/new-proposal" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">New Proposal</span>
                                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Create</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vote" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Vote</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className='relative'>
                <div className="ml-0 lg:ml-64 md:ml-64">
                    <div className='flex p-3 justify-between items-center'>
                        <div className='flex'>
                            <div className='text-2xl font-bold lg:ml-4 md:ml-4 ml-9'>
                                {name}
                            </div>
                        </div>
                        <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} />
                    </div>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default VerticalNav