import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-primaryColor w-full pt-6 pb-1'>
      <div className='lg:flex container w-[90% mx-auto mb-16'>
        <div className='text-orange-600 text-2xl font-bold mb-5 w-[20%]'>Tech<span className='text-white'>TD</span></div>
        <div className='text-white flex flex-wrap w-[100%]'>
          <div className='mb-7 w-full md:w-[20%]'>
            <h5 className='font-semibold mb-2 text-orange-600'>Links</h5>
            <div className='flex flex-col gap-3 text-sm'>
              <Link to={'/'}>Home</Link>
              <Link to={'/all-stories'}>All Stories</Link>
              <Link to={'/about'}>About</Link>
            </div>
          </div>

          <div className='mb-7 w-full md:w-[20%]'>
            <h5 className='font-semibold mb-2 text-orange-600'>Socials</h5>
            <div  className='flex flex-col gap-3 text-sm'>
              <a href='https://facebook.com' target='_blank' rel="noreferrer"><div className='flex items-center gap-2 cursor-pointer'>
                <FaFacebook size={16}/>
                <p>Facebook</p>
              </div></a>
              <a href='https://x.com' target='_blank' rel="noreferrer"><div className='flex items-center gap-2 cursor-pointer'>
                <FaXTwitter size={16}/>
                <p>X</p>
              </div></a>
              <a href='https://medium.com' target='_blank' rel="noreferrer"><div className='flex items-center gap-2 cursor-pointer'>
                <FaMedium size={16}/>
                <p>Medium</p>
              </div></a>
            </div>
          </div>

          <div className='flex flex-col gap-1 w-full mb-14 md:w-[60%]'>
            <h5 className='font-semibold mb-2 text-orange-600'>Subscribe for updates</h5>
            <form className='flex gap-2 mb-4 w-[300px]'>
              <input type='email' name='email' placeholder='Email' className='rounded px-2 py-1 w-[257px] text-gray-700' />
              <button className='border border-white rounded w-[80px] text-xs font-semibold py-1 px-2 hover:bg-white hover:text-primaryColor duration-300 ease-in cursor-pointer'>Subscribe</button>
            </form>
            <div className='w-full'>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lorem eget velit iaculis vestibulum. Sed semper maximus luctus. Proin sed eleifend sem, a ultricies dui. Nam ut lacus eros. Suspendisse justo orci, egestas nec placerat non, rhoncus sit amet mauris.</p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-xs text-center text-white'>&#169; Copyright Tomisin 2024. All Right Reserved</p>
    </div>
  )
}

export default Footer