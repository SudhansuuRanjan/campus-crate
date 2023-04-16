import React from 'react'
import { About, Features, Features2, Header, Tools } from '../../components/index';

const HomePage = () => {
    return (
        <div className='w-full'>
            <Header/>
            <Features/>
            <About/>
            <Features2/>
            <Tools/>
        </div>
    )
}

export default HomePage