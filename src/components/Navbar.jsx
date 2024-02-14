import React, {useState} from 'react'
import {
    FaBars, 
    FaTimes,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/AE_logo_cbt.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#36393B] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{ width: '80px' }} />
        </div>
        {/* menu */}
            <ul className='hidden md:flex'>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="weather" smooth={true} duration={500}>Weather</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
             </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 flex items-center'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-[#36393B] flex flex-col justify-center items-center '} >
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="weather" smooth={true} duration={500}>Weather</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-700'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/blueteddy87/">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        CV <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar