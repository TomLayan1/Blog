import React from 'react'
import Test from '../Component/AllStories'
import Header from '../Component/Header'

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
          <Test mainPage />
        </div>
      </div>
    </>
  )
}

export default Blog