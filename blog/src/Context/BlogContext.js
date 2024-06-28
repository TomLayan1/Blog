import { createContext, useEffect, useState } from "react";
import { blogsiteTopStories } from "../Data/stories";
import api from '../Axios/BaseUrl'


export const BlogContext = createContext(null);

const BlogContextProvider = (props) => {

  // State for all posts
  const [posts, setPosts] = useState([])
  console.log(posts);

  // State for top stories
  const [topStories, setTopStories] = useState(blogsiteTopStories);

  // State for error message from api
  const [error, setError] = useState(null)

  // State for specific story
  const [storyDetails, setStoryDetails] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try{
        await api.get('/posts').then(response => {
          setPosts(response.data)
        })
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])

  const getStoryDetail = (id) => {
    // const storyId = blogSiteStories.find(story => story.id === id);
    const storyId = id
    setStoryDetails();
  }
  
  const contextValue = {
    posts,
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