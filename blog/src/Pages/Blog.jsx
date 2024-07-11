import React from 'react'
import AllStories from '../Component/AllStories'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <div className='pb-10 min-h-full'>
      <div className='bg-primaryColor text-white text-center py-32 px-8 mb-8 flex justify-center items-center'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>Blog
          </motion.h1>
      </div>
      <div className='lg:px-40'>
        <AllStories mainPage/>
      </div>
    </div>
  )
}

export default Blog