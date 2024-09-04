import React, { useContext } from 'react';
import { BlogContext } from '../Context/BlogContext';
import { FaArrowRight } from 'react-icons/fa';
import posts from '../Data/stories';
import { Link } from 'react-router-dom'



const TopStories = ({ count=100 }) => {
  const { getFullStory } = useContext(BlogContext)
  return (
    <div className='hidden lg:block w-full lg:w-[35%] px-4 lg:px-0'>
      <h2 className='text-xl font-bold mb-5 text-grayLight'>Recent Post</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4 text-grayLight'>
        {posts.slice(0, count).map(topStories => (
          <div key={topStories.id} className='text-[15px]'>
            <p className='mb-2'>{topStories.title}</p>
            <Link to={`/story/${topStories.id}`}><span onClick={() => getFullStory(topStories.id)} className='font-semibold mb-4 flex items-center gap-1 cursor-pointer'>Read more <FaArrowRight size={12} style = {{ cursor: 'pointer', color: 'black' }}/></span></Link>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopStories