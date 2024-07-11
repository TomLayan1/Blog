import React, { useState, useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { motion } from 'framer-motion'

const Hero = () => {
  const [currentCategory, setCurrentCategory] = useState('All')

  const { setSelectedCategory, setCurrentPage } = useContext(BlogContext);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Reset page to 1 on category change
    setCurrentPage(1);
    setCurrentCategory(category);
  };

  return (
    <>
      <div className='bg-primaryColor text-white text-center py-32 px-8 mb-8 flex justify-center items-center'>
        <div className='flex flex-col items-center gap-3'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>Welcome To Tech Trends Digest</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className='text-center md:text-lg lg:w-3/5'>
            Your source for the latest insights in technology, startups, and AI. Join us as we explore the innovations shaping our future!
          </motion.p>
        </div>
      </div>
      
      <div className='w-[80%] lg:w-[40%] flex justify-between m-auto mb-8 lg:ml-56'>
        {['All', 'Startups', 'Security', 'AI', 'Apps', 'Tech'].map(category => (
          <p key={category} onClick={() => handleCategoryClick(category)} className={`text-[15px] cursor-pointer ${currentCategory === category ? 'text-orange-600' : ''}`}>
            {category}
          </p>
        ))}
      </div>
    </>
  )
}

export default Hero