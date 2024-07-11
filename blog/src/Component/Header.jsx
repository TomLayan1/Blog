import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { delay, motion, stagger } from 'framer-motion'

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [current, setCurrent] = useState('home');

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
      <div className='flex items-center justify-between px-6 py-4 md:px-16 md:py-4 rounded-full relative'>
        <motion.div
          initial={{ translateY: -50 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.5 }}
          className='text-orange-600 text-2xl font-bold'><Link to={'/'}>Tech<span className='text-white'>TD</span></Link></motion.div>
        
        {/* For lg screen */}
        <motion.nav
          initial={{ translateY: -50 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.5 }}
          className='hidden lg:block'>
          <ul className='text-base text-white flex gap-9'>
            <li className={`${current === 'home' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('home')}><Link to={'/'}>Home</Link></li>
            <li className={`${current === 'blog' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('blog')}><Link to={'/blog'}>Blog</Link></li>
            <li className={`${current === 'topstories' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('topstories')}><Link to={'/topstories'}>Top stories</Link></li>
            <li className={`${current === 'about' ? 'text-orange-600 border-b border-orange-600' : ''}`} onClick={()=>setCurrent('about')}><Link to={'/about'}>About</Link></li>
          </ul>
        </motion.nav>

        {/* For md & sm screen */}
        <motion.nav animate={ showNav ? 'open' : 'closed' } className='lg:hidden fixed top-14 left-0 right-0 bottom-0 overflow-y-hidden z-40'>
          <motion.ul variants={variants} className={`bg-primaryColor h-[100%] text-3xl text-white flex flex-col gap-12 items-center pt-12 rounded-b-2xl ${showNav ? '' : 'transform -translate-y-full'} duration-500 ease-in-out`}>
            <motion.li variants={itemVariants} whileTap={{ scale: 0.75 }} className='font-semibold hover:scale-110' onClick={()=>setShowNav(false)}><Link to={'/'}>Home</Link></motion.li>
            <motion.li variants={itemVariants} whileTap={{ scale: 0.75 }} className='font-semibold hover:scale-110' onClick={()=>setShowNav(false)}><Link to={'/blog'}>Blog</Link></motion.li>
            <motion.li variants={itemVariants} whileTap={{ scale: 0.75 }} className='font-semibold hover:scale-110' onClick={()=>setShowNav(false)}><Link to={'/topstories'}>Top stories</Link></motion.li>
            <motion.li variants={itemVariants} whileTap={{ scale: 0.75 }} className='font-semibold hover:scale-110' onClick={()=>setShowNav(false)}><Link to={'/about'}>About</Link></motion.li>
          </motion.ul>
        </motion.nav>

        <motion.div
          initial={{ translateY: -50 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.5 }}
          className='flex gap-7 items-center'>
          <div className='flex gap-3 items-center text-white'>
            <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaFacebook size={16}/></a>
            <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaTwitter size={16}/></a>
            <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaMedium size={16}/></a>
          </div>
          <div onClick={()=>setShowNav(!showNav)} className='lg:hidden'>
            {showNav ? <FaTimes className='' size={22} style = {{ cursor: 'pointer', color: 'white' }}/> : <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>}
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header