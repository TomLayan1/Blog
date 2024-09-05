import React from 'react'
import Header from '../Component/Header'
import AllStories from '../Component/AllStories'

const Blog = () => {
  return (
    <>
      <Header />
      <div className='pb-10 min-h-full'>
        <div className='bg-primaryColor text-white text-center py-32 px-8 mb-8 flex justify-center items-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>
              All Stories
            </h1>
        </div>
        <div className='lg:px-40'>
          <AllStories mainPage />
        </div>
      </div>
    </>
  )
}

export default Blog