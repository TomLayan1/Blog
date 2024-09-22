import React from 'react';
import TopStories from './TopStories';
import AllStories from './AllStories';


const Stories = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12  min-h-full text-grayLight'>
      <AllStories count={9} />
      <TopStories count={9} />
    </div>
  )
}

export default Stories