import React, { useState, useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'

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
          <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>Welcome To Lorem Dolor</h1>
          <p className='text-center md:text-lg lg:w-3/5'>Lorem ipsum dolor sit amet, consectetur adipiscing clit. Lorem ipsum dolor sit amet, consectetur adipiscing clit.  ipsum dolor sit amet,  adipiscing clit.</p>
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