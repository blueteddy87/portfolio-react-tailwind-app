import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#36393B]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-800'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Patrycja Świtalska</h1>
            <h2 className='text-2xl sm:text-1xl font-bold text-gray-400'>nr albumu: 46818</h2>
            <p className='py-4 max-w-[700px] text-gray-500'>praca na zaliczenie przedmiotu projekt portfolio</p>
        <div>
        <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-red-800 hover:bg-red-800'>
           View work 
              
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
             </span>
             
            </button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Home 