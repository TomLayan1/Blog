import React, { useState, useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { motion } from 'framer-motion'

const Hero = () => {

  const { selectedCategory,setSelectedCategory, setCurrentPage } = useContext(BlogContext);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    
    // Reset page to 1 on category change
    setCurrentPage(1);
  };


  return (
    <section>
      <div className='bg-primaryColor w-full py-52 text-white text-center flex justify-center items-center'>
        <div className='container flex flex-col items-center gap-3'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>Welcome To Tech Trends Digest</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className='text-center md:text-lg lg:w-3/5'>
            Your source for the latest insights in technology, startups, and AI. Join us as we explore the innovations shaping our future!
          </motion.p>
        </div>
      </div>
      
      <div className='container'>
        <div className='w-[85%] lg:w-[45%] flex justify-between py-6 mx-auto lg:ml-36'>
          {['All', 'Startups', 'Security', 'AI', 'Apps', 'Tech'].map(category => (
            <p key={category} onClick={() => handleCategoryClick(category)} className={`text-[15px] text-orange-600  py-1 cursor-pointer ${selectedCategory === category ? 'border-b-2 border-primaryColor' : ''}`}>
              {category}
            </p>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero