import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext';
import { FaArrowRight } from 'react-icons/fa'



const TopStories = () => {
  const { topStories } = useContext(BlogContext)
  return (
    <div className='w-full lg:w-[35%] px-4 lg:px-0'>
      <h2 className='text-xl text-center font-bold mb-8 text-grayLight'>Recent Post</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4 text-grayLight'>
        {topStories.map(topStories => (
          <div>
            <p className='mb-2'>{topStories.content.title}</p>
            <p className='font-semibold mb-4 flex items-center gap-1'>Read more <FaArrowRight className='' size={12} style = {{ cursor: 'pointer', color: 'black' }}/></p>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopStories