import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { BlogContext } from '../Context/BlogContext';

const Display = () => {
  const {id} = useParams();

  // From context
  const { getStoryDetail, storyDetails } = useContext(BlogContext);
  console.log(storyDetails);

  // If a story is clicked, assign its id to getStoryDetail
  if(id) {
    getStoryDetail(id);
  }
  return (
    <div>
      {storyDetails && (<div className='pt-24'>{storyDetails.id}</div>)}
    </div>
  )
}

export default Display