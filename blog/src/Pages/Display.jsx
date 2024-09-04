import React, { useEffect,useContext } from 'react'
import { useParams } from 'react-router'
import { BlogContext } from '../Context/BlogContext';
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';
import Comment from '../Component/Comment';


const Display = () => {

  const {id} = useParams();

  // From context
  const { getFullStory, fullStory } = useContext(BlogContext);

  // If a story is clicked, assign its id to getStoryDetail
  useEffect(() => {
    if(id) {
      getFullStory(id);
    }
  }, [getFullStory, id])
  
  return (
    <>
      {fullStory && (
      <>
        <div>
          <div className='min-h-full bg-primaryColor text-white text-center py-24 pb-10 px-8 lg:px-14 mb-8 flex justify-center items-center'>
              <h1 className='text-3xl lg:text-4xl leading-10 mb-5 font-bold'>{fullStory.title}</h1>
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

          <div className='px-6 md:px-20 lg:px-40  mx-auto mb-8 lg:mb-14 text-[15px] leading-8'>
            <p>{fullStory.content}</p>
          </div>
        </div>
        
        <div className='px-6 py-8 md:px-20 lg:px-40 mx-auto bg-grayLight'>
          <h2 className='text-xl text-gray-600 font-semibold mb-3'>Comments</h2>
          <div className='mb-16'>
          {fullStory.comments.map(comment => (
            <>
              <h5 className='text-xl font-bold text-primaryColo'>{comment.person}</h5>
              <p className='text-grays'>{comment.post}</p>
            </>
          ))}
          </div>
        <Comment />
        </div>
        </>
      )}

    </>
  )
}

export default Display