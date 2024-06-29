import { createContext, useCallback, useEffect, useState } from "react";
import { blogsiteTopStories } from "../Data/stories";
import api from '../Axios/BaseUrl'


export const BlogContext = createContext(null);

const BlogContextProvider = (props) => {

  // State for all posts
  const [blogPosts, setBlogPosts] = useState([])

  // State for top stories
  const [topStories, setTopStories] = useState(blogsiteTopStories);

  // State for error message from api
  const [error, setError] = useState(null)

  // State for category
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // State for specific story
  const [fullStory, setFullStory] = useState(null);


  useEffect(() => {
    const fetchData = async () => {

      try{
        await api.get('/posts').then(response => {
          setBlogPosts(response.data)
        })
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  // Function to filter blogPosts by category
  const getPostsByCategory = () => {
    if (selectedCategory === 'All' || !selectedCategory) {
      return blogPosts;
    }
    return blogPosts.filter(blogPost => blogPost.category === selectedCategory);
  };

  // Function to get paginated posts
  const postsPerPage = 12;

  const getPaginatedPosts = () => {
    const filteredPosts = getPostsByCategory();
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  };

  const fetchFullStory = useCallback(async (id) => {
    try {
      await api.get(`posts/${id}`).then(response => {
        setFullStory(response.data)
      })
    } catch (err) {
      setError(err.message)
    }
  }, [])


  const contextValue = {
    blogPosts,
    error,
    topStories,
    fetchFullStory,
    fullStory,
    selectedCategory,
    setSelectedCategory,
    getPostsByCategory,
    getPaginatedPosts,
    currentPage,
    setCurrentPage,
  }

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;