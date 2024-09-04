import React from 'react';
import TopStories from './TopStories';
import AllStories from './AllStories';


const Stories = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12  min-h-full text-grayLight'>
      <AllStories />
      <TopStories count={10} />
    </div>
  )
}

export default Stories