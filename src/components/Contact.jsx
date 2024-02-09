import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineMarkunreadMailbox } from "react-icons/md";


const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#36393B] flex justify-center p-4" >
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-800 text-gray-300'>Contact</p>
                <p className='text-green-300 py-4'>submit</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="text" placeholder='Email' name='email'/>
            <textarea className='bg-white p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white group border-2 hover:bg-red-800 hover:border-red-800 px-4 py-3 my-8 mx-auto flex items-center'>
            Let`s send some message <MdOutlineMarkunreadMailbox className='ml-3 ' />
                <span className='group-hover:-rotate-180 duration-300'>
                <HiOutlineMail className='ml-3 ' />
                </span>
                    
            </button>
        </form>
        
    </div>
  )
}

export default Contact