import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { Link } from 'react-router-dom'
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';
import Pagination from './Pagination';
import { animate, motion } from 'framer-motion';

const AllStories = ({ count = 86, mainPage }) => {
  // From Context
  const { getPaginatedPosts, blogPosts, error } = useContext(BlogContext);
  const posts = mainPage ? blogPosts : getPaginatedPosts();

  // If an error occurs
  if (error) return <div className='min-h-[81.2vh] text-2xl'>Error: {error.message}</div>;

  return (
    <div className='w-full min-h-[100vh] text-xl px-4 -z-10'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className={`grid gap-7 md:grid-cols-2 ${mainPage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} text-grayLight mb-10`}>
        {posts.slice(0, count).map((stories, i) => (
          <div
            key={stories.id} className='p-2 shadow-customShadow cursor-pointer'><Link to={`/story/${stories.id}`}>
            <img src={stories.image} alt='Post' className='mb-3'/>
            <div className='flex flex-col text-lg'>
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
      </motion.div>
      {!mainPage && <Pagination />}
    </div>
  )
}

export default AllStories