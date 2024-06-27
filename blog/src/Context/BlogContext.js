import { createContext, useState } from "react";
import { blogSiteStories, blogsiteTopStories } from "../Data/stories";


export const BlogContext = createContext(null);

const BlogContextProvider = (props) => {

  // State for all stories
  const [allStories, setAllStories] = useState(blogSiteStories);

  // State for top stories
  const [topStories, setTopStories] = useState(blogsiteTopStories);

  // State for specific story
  const [storyDetails, setStoryDetails] = useState(null);

  const getStoryDetail = (id) => {
    // const storyId = blogSiteStories.find(story => story.id === id);
    const storyId = id
    setStoryDetails();
  }
  
  const contextValue = {
    allStories,
    topStories,
    getStoryDetail,
    storyDetails
  }

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;