import React, { useEffect,useContext } from 'react'
import { useParams } from 'react-router'
import { BlogContext } from '../Context/BlogContext';
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';


const Display = () => {

  const {id} = useParams();

  // From context
  const { fetchFullStory, fullStory } = useContext(BlogContext);

  // If a story is clicked, assign its id to getStoryDetail
  useEffect(() => {
    if(id) {
      fetchFullStory(id);
    }
  }, [fetchFullStory, id])
  
  return (
    <>
      {fullStory && (
        <div>
          <div className='bg-primaryColor text-white text-center py-24 pb-10 px-8 lg:px-14 mb-8 flex justify-center items-center'>
              <h1 className='text-3xl lg:text-5xl leading-relaxed mb-5 font-bold'>{fullStory.title}</h1>
          </div>

          <div className='px-6 md:px-20 lg:px-40  mx-auto mb-5'>
            <img src={fullStory.image} alt={fullStory.title} className='m-auto w-full mb-2 rounded-xl' />
          </div>
          
          <div className='px-6 md:px-20 lg:px-40  mx-auto mb-8 lg:mb-10 leading-relaxed'>
            <div className='flex items-center gap-2 mb-3'>
              <div cl className='flex items-center gap-1'>
                <FaUser className='text-primaryColor' />
                <p className='font-semibold'>{fullStory.author}</p>
              </div>
              <p className='font-thin'>|</p>
              <div className='flex items-center gap-1'>
                <AiOutlineCalendar className='text-primaryColor' />
                <p className='font-t'>{fullStory.published_date}</p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <AiOutlineClockCircle className='text-primaryColor' />
              <p className='font-t'>{fullStory.reading_time}</p>
            </div>
          </div>

          <div className='px-6 md:px-20 lg:px-40  mx-auto mb-8 lg:mb-14 leading-relaxed'>
            <p>{fullStory.content}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Display