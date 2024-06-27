import React, { useState } from 'react'

const Hero = () => {
  const [currentCategory, setCurrentCategory] = useState('all')
  return (
    <>
      <div className='bg-primaryColor text-white text-center py-32 px-8 mb-8 flex justify-center items-center'>
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>Welcome To Lorem Dolor</h1>
          <p className='text-center md:text-lg lg:w-3/5'>Lorem ipsum dolor sit amet, consectetur adipiscing clit. Lorem ipsum dolor sit amet, consectetur adipiscing clit.  ipsum dolor sit amet,  adipiscing clit.</p>
        </div>
      </div>
      <div className='w-[80%] lg:w-[40%] flex justify-between m-auto mb-8 lg:ml-56'>
        <p onClick={()=>setCurrentCategory('all')} className={`text-[15px] cursor-pointer ${currentCategory === 'all' ? 'text-orange-600' : ''}`}>All</p>
        <p onClick={()=>setCurrentCategory('startups')} className={`text-[15px] cursor-pointer ${currentCategory === 'startups' ? 'text-orange-600' : ''}`}>Startups</p>
        <p onClick={()=>setCurrentCategory('security')} className={`text-[15px] cursor-pointer ${currentCategory === 'security' ? 'text-orange-600' : ''}`}>Security</p>
        <p onClick={()=>setCurrentCategory('ai')} className={`text-[15px] cursor-pointer ${currentCategory === 'ai' ? 'text-orange-600' : ''}`}>AI</p>
        <p onClick={()=>setCurrentCategory('apps')} className={`text-[15px] cursor-pointer ${currentCategory === 'apps' ? 'text-orange-600' : ''}`}>Apps</p>
        <p onClick={()=>setCurrentCategory('tech')} className={`text-[15px] cursor-pointer ${currentCategory === 'tech' ? 'text-orange-600' : ''}`}>Tech</p>
      </div>
    </>
  )
}

export default Hero