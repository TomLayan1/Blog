import React from 'react'
import Header from '../Component/Header'
import AllStories from '../Component/AllStories'

const AllPosts = () => {
  return (
    <>
      <Header />
      <div className='pb-10 min-h-full'>
        <div className='bg-primaryColor text-white text-center py-32 px-8 mb-8 flex justify-center items-center'>
          <div className='container'>
            <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>
              All Stories
            </h1>
          </div>
        </div>
        <div className='container'>
          <AllStories mainPage />
        </div>
      </div>
    </>
  )
}

export default AllPosts