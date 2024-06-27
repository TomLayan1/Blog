import React from 'react'
import Hero from '../Component/Hero'
import Stories from '../Component/Stories'

const Home = () => {
  return (
    <div className='pb-12'>
      <Hero />
      <div className='lg:px-28 text-sm'>
        <hr className='mb-8'/>
        <Stories />
      </div>
    </div>
  )
}

export default Home