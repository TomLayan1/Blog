import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { Link } from 'react-router-dom'
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';
import Pagination from './Pagination';

const AllStories = ({ count = 86, mainPage }) => {
  // From Context
  const { getPaginatedPosts, blogPosts } = useContext(BlogContext);
  const posts = mainPage ? blogPosts : getPaginatedPosts();

  return (
    <div className='w-full px-4'>
      <div className={`grid gap-6 md:grid-cols-2 ${mainPage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} text-grayLight mb-10`}>
        {posts.slice(0, count).map(stories => (
          <div key={stories.id} className='p-2 shadow-customShadow cursor-pointer'><Link to={`/story/${stories.id}`}>
            <img src={stories.image} alt='Post' className='mb-3'/>
            <div className='flex flex-col text-sm'>
              <p className='uppercase mb-3 text-orange-600 font-semibold'>{stories.category}</p>
              <p className='mb-3 font-semibold'>{stories.title}</p>
              <div cl className='flex items-center gap-1 mb-3'>
                <FaUser className='text-primaryColor' />
                <p className=''>{stories.author}</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-sm'>
                  <AiOutlineCalendar className='text-primaryColor' />
                  <p className='font-t'>{stories.published_date}</p>
                </div>
                <div className='flex items-center gap-1 text-sm'>
                  <AiOutlineClockCircle className='text-primaryColor' />
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