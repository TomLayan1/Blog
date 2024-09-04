import React from 'react'
import Hero from '../Component/Hero'
import Stories from '../Component/Stories'
import Header from '../Component/Header'

const Home = () => {
  return (
    <div className='pb-12'>
      <Header />
      <Hero />
      <div className='lg:px-28 text-sm'>
        <hr className='mb-8'/>
        <Stories />
      </div>
    </div>
  )
}

export default Home