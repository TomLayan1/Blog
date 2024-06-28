import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [current, setCurrent] = useState('home');

  return (
    <header className='bg-primaryColor w-full fixed top-0 left-0'>
      <div className='flex items-center justify-between px-6 py-4 md:px-16 md:py-4 rounded-full relative'>
        <div className='text-orange-600 text-2xl font-bold'><Link to={'/'}>Logo<span className='text-white'>DS</span></Link></div>
        
        {/* For md & lg screen */}
        <nav className='hidden md:block '>
          <ul className='text-base text-white flex gap-9'>
            <li className={`${current === 'home' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('home')}><Link to={'/'}>Home</Link></li>
            <li className={`${current === 'blog' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('blog')}><Link to={'/blog'}>Blog</Link></li>
            <li className={`${current === 'topstories' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('topstories')}><Link to={'/topstories'}>Top stories</Link></li>
            <li className={`${current === 'about' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('about')}><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>

        {/* For sm screen */}
        <nav className='md:hidden absolute top-14 left-0 right-0 overflow-y-hidden z-40'>
          <ul className={`bg-black h-[608px] text-lg text-white flex flex-col gap-12 items-center pt-12 rounded-b-xl ${showNav ? '' : 'transform -translate-y-full'} duration-300 ease-in-out`}>
            <li className={`${current === 'home' ? 'text-orange-600 border-b border-orange-600' : ''}`}><Link to={'/'}>Home</Link></li>
            <li className={`${current === 'topstories' ? 'text-orange-600 border-b border-orange-600' : ''}`}><Link to={'/topstories'}>Top stories</Link></li>
            <li className={`${current === 'about' ? 'text-orange-600 border-b border-orange-600' : ''}`}><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
        <div className='flex gap-7 items-center'>
          <div className='flex gap-3 items-center text-white'>
            <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaFacebook size={16}/></a>
            <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaTwitter size={16}/></a>
            <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaMedium size={16}/></a>
          </div>
          <div onClick={()=>setShowNav(!showNav)} className='md:hidden'>
            {showNav ? <FaTimes className='' size={22} style = {{ cursor: 'pointer', color: 'white' }}/> : <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header