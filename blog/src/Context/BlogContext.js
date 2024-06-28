import { createContext, useCallback, useEffect, useState } from "react";
import { blogsiteTopStories } from "../Data/stories";
import api from '../Axios/BaseUrl'


export const BlogContext = createContext(null);

const BlogContextProvider = (props) => {

  // State for all posts
  const [posts, setPosts] = useState([])

  // State for top stories
  const [topStories, setTopStories] = useState(blogsiteTopStories);

  // State for error message from api
  const [error, setError] = useState(null)

  // State for category
  const [selectedCategory, setSelectedCategory] = useState(null)

  // State for specific story
  const [fullStory, setFullStory] = useState(null);
  console.log(fullStory)



  useEffect(() => {
    const fetchData = async () => {

      try{
        await api.get('/posts').then(response => {
          setPosts(response.data)
        })
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  const id = 1;
  const fetchFullStory = useCallback(async (id) => {
    try {
      await api.get(`posts/${id}`).then(response => {
        setFullStory(response.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }, [])


  
  const contextValue = {
    posts,
    topStories,
    fetchFullStory,
    fullStory
  }

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;