import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between item-center h-24 max-w-[1240px] mx-auto px-4' id='home'>
        <h1 className='p-3 w-full text-3xl font-bold text-[#FFB612]'>VMD</h1>
        <BrowserRouter>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to='#home'>Home</Link></li>
            <li className='p-4'><Link to='#aboutme'>About&nbsp;Me</Link></li>
            <li className='p-4'><Link to='#notifyme'>Contact</Link></li>
            <li className='p-4'><Link to='#photos'>Photos</Link></li>
            <li className='p-4'><Link to='#services'>Services</Link></li>
        </ul>
        </BrowserRouter>
        <div onClick={handleNav} className='block md:hidden p-4'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#FFB612] m-4'>VMD</h1>

            <BrowserRouter>
            <ul className='pt-24 uppercase'>
                <li className='p-4 border-b border-gray-800'><Link to='#home' onClick={handleNav}>Home</Link></li>
                <li className='p-4 border-b border-gray-800'><Link to='#aboutme' onClick={handleNav}>About&nbsp;Me</Link></li>
                <li className='p-4 border-b border-gray-800'><Link to='#notifyme' onClick={handleNav}>Contact</Link></li>
                <li className='p-4 border-b border-gray-800'><Link to='#photos' onClick={handleNav}>Photos</Link></li>
                <li className='p-4 border-b border-gray-800'><Link to='#services' onClick={handleNav}>Services</Link></li>
            </ul>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default Navbar