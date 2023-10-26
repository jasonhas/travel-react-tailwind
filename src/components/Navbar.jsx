import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [logo,setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    return (
        <div className="flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full fonts-poppins">
            <div>
                <h1 className={logo ? 'hidden' : 'block'} onClick={handleNav}>BEACHES.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li><Link to="/">Home</Link></li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20}/>
                <BsPerson size={20}/>
            </div>

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20}/> }
            </div>

            {/* Mobile Menu dropdown */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
                <ul>
                <h1>BEACHES.</h1>
                <li className='border-b'><Link to="/">Home</Link></li>
                <li className='border-b'>Destinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>View</li>
                <li className='border-b'>Book</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className="icon"/>
                    <FaTwitter className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaPinterest className="icon"/>
                    <FaInstagram className="icon"/>
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar