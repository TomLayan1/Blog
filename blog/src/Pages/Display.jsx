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
    <section className='w-full min-h-[100vh]'>
      {fullStory && (
      <>
        <div>
          <div className='min-h-full bg-primaryColor text-white text-center py-24 pb-10 mb-8 flex justify-center items-center'>
            <div className='container'>
              <h1 className='text-3xl lg:text-4xl leading-10 mb-5 font-bold'>{fullStory.title}</h1>
            </div>
          </div>

          <div className='container lg:w-[80%] mx-auto mb-5'>
            <img src={fullStory.image} alt={fullStory.title} className='m-auto w-full rounded-xl' />
          </div>
          
          <div className='container lg:w-[80%] mx-auto mb-8 lg:mb-10 leading-relaxed'>
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

          <div className='container lg:w-[80%] mx-auto mb-8 lg:mb-14 text-[15px] leading-8'>
            <p>{fullStory.content}</p>
          </div>
        </div>
        
        <div className='container lg:w-[80%] mx-auto bg-grayLightTwo'>
          <h2 className='text-xl text-gray-600 font-semibold mb-3'>Comments</h2>
          <div className='mb-16'>
          {fullStory.comments.map((comment, index) => (
            <div key={index}>
              <strong className='text-xl font-bold text-primaryColo'>{comment.person}</strong>
              <p className='text-grays'>{comment.post}</p>
            </div>
          ))}
          </div>
          <Comment />
        </div>
        </>
      )}
    </section>
  )
}

export default Display