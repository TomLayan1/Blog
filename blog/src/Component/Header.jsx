import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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


  return (
    <header className='bg-primaryColor w-full fixed top-0 left-0'>
      <div className=' container flex items-center justify-between px-6 py-4 md:px-16'>
        <div className='text-orange-600 text-2xl font-bold'><Link to={'/'}>Tech<span className='text-white'>TD</span></Link></div>
        
        <nav className={`fixed bg-primaryColor top-0 right-0 w-full lg:w-auto h-[100vh] lg:h-auto pt-24 lg:pt-0 lg:static ${showNav ? '' : 'transform translate-x-full lg:translate-x-0'} duration-300 ease-in-out`}>
          <ul className='text-base text-white flex flex-col items-center lg:flex-row gap-9'>
            {navigation.map(nav => (
              <Link to={nav.path}><li key={nav.name} onClick={()=>handleNav(nav.name)}>{nav.name}</li></Link>
            ))}
          </ul>
        </nav>

        <div className='flex gap-7 items-center'>
          <div className='flex gap-3 items-center text-white'>
            <a href='http://www.facebook.com' target='_blank' rel="noreferrer" className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaFacebook size={16}/></a>
            <a href='http://www.x.com' target='_blank' rel="noreferrer" className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaTwitter size={16}/></a>
            <a href='https://medium.com' target='_blank' rel="noreferrer" className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaMedium size={16}/></a>
          </div>
          <div onClick={()=>setShowNav(!showNav)} className='lg:hidden z-50'>
            {showNav ? <FaTimes className='' size={22} style = {{ cursor: 'pointer', color: 'white' }}/> : <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header