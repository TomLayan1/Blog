import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import { Link } from 'react-router-dom'

const AllStories = () => {
  // From context
  const { allStories } = useContext(BlogContext)

  return (
    <div className='w-full px-4'>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-grayLight'>
        {allStories.map(stories => (
          <div key={stories.id} className='p-5 shadow-customShadow cursor-pointer'><Link to={`/story/${stories.id}`}>
            <img src={stories.image} alt='Post' className='mb-3'/>
            <div>
              <p className='mb-3'>{stories.title}</p>
              <p className='font-thin'>{stories.author}</p>
            </div>
          </Link></div>
        ))}
      </div>
    </div>
  )
}

export default AllStories