import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-orange-400 w-[90%] left-5 top-4 rounded-3xl flex items-center justify-between px-4 py-3 fixed z-50'>
      <div className='text-black text-lg font-bold'>Logo<span className='text-white'>DS</span></div>
      <nav className='relative'>
        <ul className='absolute bg-slate-500 top-6 w-full'>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/topstories'}>Top stories</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </nav>
      <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>
    </header>
  )
}

export default Header