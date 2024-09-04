import React, { useContext, useState } from 'react'
import { BlogContext } from '../Context/BlogContext'

const Comment = () => {
  const { fullStory, setFullStory } = useContext(BlogContext)

  const [comment, setComment] = useState({
    person: '',
    email: '',
    post: ''
  })
  console.log(comment)

  // To handle input fields
  const handleComment = (e) => {
    e.preventDefault();
    setComment(prev => {return {...prev, [e.target.name]: e.target.value }})
  }

  // To submit
  const handleSubmission = (e) => {
    e.preventDefault();

    if (fullStory) {
      // Add the new comment to the existing comments
      const updatedComment = [...fullStory.comments, comment]

      // Update the fullStory with the new comments
      const updatedPost = {...fullStory, comments: updatedComment}
      setFullStory(updatedPost)

      // Clear the comment form after submission
      setComment({ person: '', email: '', post: '' });
    }
  }


  return (
    <div className='mb-16'>
      <h2 className='text-xl text-gray-600 font-bold mb-6'>Leave a comment</h2>

      <div>
        <form className='w-full lg:w-[70%]' onSubmit={handleSubmission}>
          <div className='flex flex-col gap-3 md:flex-row mb-3 w-full'>
            <input className='bg-gray-300 p-2 rounded-lg outline-orange-600 w-full text-[15px] md:w-[50%]'
              type='text' name='person' value={comment.person} onChange={handleComment} placeholder='Your name' required />
            <input className='bg-gray-300 p-2 rounded-lg outline-orange-600 w-full text-[15px] md:w-[50%]'
              type='email' name='email' value={comment.email} onChange={handleComment} placeholder='Your Email' required />
          </div>
          <textarea className='bg-gray-300 p-2 rounded-lg outline-orange-600 w-full text-[15px] h-[130px] mb-6'
          name='post' value={comment.post} onChange={handleComment} placeholder='Comment' />

          <button className='bg-orange-600 px-14 py-2 text-white text-[15px] rounded-lg cursor-pointer'>Send Comment</button>
        </form>
      </div>
    </div>
  )
}

export default Comment