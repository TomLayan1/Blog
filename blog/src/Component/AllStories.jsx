import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { Link } from 'react-router-dom'
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';
import Pagination from './Pagination';
import posts from '../Data/stories';

const AllStories = ({ count = 86, mainPage }) => {

  // From Context
  const { getPaginatedPosts, getFullStory } = useContext(BlogContext);
  const blogPosts = mainPage ? posts : getPaginatedPosts();

  return (
    <div className='w-full min-h-[100vh] text-xl'>
      <div
        className={`grid gap-7 lg:gap-5 md:grid-cols-2 ${mainPage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} text-grayLight mb-10`}>
        {blogPosts.slice(0, count).map((stories, i) => (
          <div
            onClick={() => getFullStory(stories.id)}
            key={stories.id} className='p-2 shadow-customShadow cursor-pointer'><Link to={`/story/${stories.id}`}>
            <img src={stories.image} alt='Post' className='mb-3 w-full'/>
            <div className='flex flex-col text-lg'>
              <p className='uppercase mb-3 text-orange-600 font-semibold text-[15px]'>{stories.category}</p>
              <p className='mb-3 font-semibold text-[15px]'>{stories.title}</p>
              <div className='flex items-center text-[15px] gap-1 mb-3'>
                <FaUser className='text-primaryColor' />
                <p className=''>{stories.author}</p>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex w-full items-center gap-1 text-sm'>
                  <AiOutlineCalendar className='text-primaryColor' />
                  <p>{stories.published_date}</p>
                </div>
                <div className='flex w-full items-center gap-1 text-sm'>
                  <AiOutlineClockCircle className='text-primaryColor font-bold' />
                  <p>{stories.reading_time}</p>
                </div>
              </div>
            </div>
          </Link></div>
        ))}
      </div>
      {!mainPage && <Pagination />}
    </div>
  )
}

export default AllStories