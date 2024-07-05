import React from 'react'
import { FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='w-full bg-primaryColor pt-7 pb-14 px-6 lg:px-24 flex flex-col gap-7 lg:flex-row lg:gap-60'>
      <div className='text-orange-600 text-2xl font-bold'>Logo<span className='text-white'>DS</span></div>
      <div className='flex flex-wrap md:flex-nowrap gap-28 text-white'>
        <div className='w-[100px]'>
          <h5 className='font-semibold mb-2'>Links</h5>
          <div className='flex flex-col gap-3 text-sm'>
            <Link>Home</Link>
            <Link>Blog</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
        </div>

        <div>
          <h5 className='font-semibold mb-2 w-[100px]'>Socials</h5>
          <div  className='flex flex-col gap-3 text-sm'>
            <div className='flex items-center gap-2'>
              <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaFacebook size={16}/></a>
              <p>Facebook</p>
            </div>
            <div className='flex items-center gap-2'>
              <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaTwitter size={16}/></a>
              <p>X</p>
            </div>
            <div className='flex items-center gap-2'>
              <a className='hover:text-orange-600 ease-in duration-200 cursor-pointer'><FaMedium size={16}/></a>
              <p>Medium</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1 w-full md:w-[350px]'>
          <h5 className='font-semibold mb-2'>Subscribe for updates</h5>
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
  )
}

export default Footer