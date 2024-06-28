import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { Link } from 'react-router-dom'
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

const AllStories = () => {
  // From context
  const { posts } = useContext(BlogContext)

  return (
    <div className='w-full px-4'>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-grayLight'>
        {posts.map(stories => (
          <div key={stories.id} className='p-2 shadow-customShadow cursor-pointer'><Link to={`/story/${stories.id}`}>
            <img src={stories.image} alt='Post' className='mb-3'/>
            <div className='flex flex-col'>
              <p className='uppercase mb-3 text-orange-600 font-semibold'>{stories.category}</p>
              <p className='mb-3 font-semibold'>{stories.title}</p>
              <div>
                <p className=''>{stories.author}</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-sm'>
                  <AiOutlineCalendar className='text-orange-600' />
                  <p className='font-t'>{stories.published_date}</p>
                </div>
                <div className='flex items-center gap-1 text-sm'>
                  <AiOutlineClockCircle className='text-orange-600' />
                  <p>{stories.reading_time}</p>
                </div>
              </div>
            </div>
          </Link></div>
        ))}
      </div>
    </div>
  )
}

export default AllStories