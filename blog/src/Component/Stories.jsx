import React from 'react';
import AllStories from './AllStories';
import TopStories from './TopStories';


const Stories = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12  min-h-full text-grayLight'>
      <AllStories />
      <TopStories />
    </div>
  )
}

export default Stories