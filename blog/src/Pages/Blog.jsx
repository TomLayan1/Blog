import React from 'react'
import AllStories from '../Component/AllStories'

const Blog = () => {
  return (
    <div className='pb-10'>
      <div className='bg-primaryColor text-white text-center py-32 px-8 mb-8 flex justify-center items-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>Blog</h1>
      </div>
      <div className='lg:px-40'>
        <AllStories mainPage />
      </div>
    </div>
  )
}

export default Blog