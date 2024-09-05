import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('Home');

  const navigation = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'All Stories',
      path: '/all-stories'
    },
    {
      name: 'About',
      path: '/about'
    }
  ];

  const handleNav = (name) => {
    setShowNav(false)
    const clickedNav = navigation.find(nav => nav.name === name);
    setCurrentMenu(clickedNav.name)
  }

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200
      }
    },
    closed: {
      y: 50,
      opacity: 0
    }
  }


  return (
    <header className='bg-primaryColor w-full fixed top-0 left-0'>
      <div className='flex items-center justify-between px-6 py-4 md:px-16 rounded-full relative'>
        <div className='text-orange-600 text-2xl font-bold'><Link to={'/'}>Tech<span className='text-white'>TD</span></Link></div>
        
        {/* For lg screen */}
        <nav className='hidden lg:block'>
          <ul className='text-base text-white flex gap-9'>
            {navigation.map(nav => (
              <li variants={itemVariants} key={nav.name} className={`${nav.name === currentMenu ? 'text-orange-600' : ''}`} onClick={()=>handleNav(nav.name)}><Link to={nav.path}>{nav.name}</Link></li>
            ))}
          </ul>
        </nav>

        {/* For md & sm screen */}
        <motion.nav animate={ showNav ? 'open' : 'closed' } className='lg:hidden fixed top-14 left-0 right-0 bottom-0 overflow-y-hidden z-40'>
          <motion.ul variants={variants} className={`bg-primaryColor h-[100%] text-3xl text-white flex flex-col gap-12 items-center pt-12 rounded-b-2xl ${showNav ? '' : 'transform -translate-y-full'} duration-500 ease-in-out`}>
            {navigation.map(nav => (
              <motion.li variants={itemVariants} key={nav.name} className={`${nav.name === currentMenu ? 'text-orange-600' : ''} font-semibold hover:scale-110`} onClick={()=>handleNav(nav.name)}><Link to={nav.path}>{nav.name}</Link></motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        <div className='flex gap-7 items-center'>
          <div className='flex gap-3 items-center text-white'>
            <a href='http://www.facebook.com' target='_blank' rel="noreferrer" className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaFacebook size={16}/></a>
            <a href='http://www.x.com' target='_blank' rel="noreferrer" className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaTwitter size={16}/></a>
            <a href='https://medium.com' target='_blank' rel="noreferrer" className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaMedium size={16}/></a>
          </div>
          <div onClick={()=>setShowNav(!showNav)} className='lg:hidden'>
            {showNav ? <FaTimes className='' size={22} style = {{ cursor: 'pointer', color: 'white' }}/> : <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header