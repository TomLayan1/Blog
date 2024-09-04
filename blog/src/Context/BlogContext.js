import { createContext, useEffect, useState } from "react";
import posts from '../Data/stories'
// import api from '../Axios/BaseUrl'


export const BlogContext = createContext();

const BlogContextProvider = (props) => {

  // State for category
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for specific story
  const [fullStory, setFullStory] = useState(() => {
    const savedStory = localStorage.getItem('fullStory');
    return savedStory ? JSON.parse(savedStory) : null
  });
  console.log(fullStory)
  
  useEffect(() => {
    if(fullStory){
      localStorage.setItem('fullStory', JSON.stringify(fullStory))
    }
  }, [fullStory])

  // Function to filter blogPosts by category
  const getPostsByCategory = () => {
    if (selectedCategory === 'All') {
      return posts;
    }
    return posts.filter(post => post.category === selectedCategory);
  };

  // Function to get paginated posts
  const postsPerPage = 12;

  const getPaginatedPosts = () => {
    const filteredPosts = getPostsByCategory();
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  };

  const getFullStory = (id) => {
    const selectedPost = posts.find(story => story.id === id)
    console.log(id)
     if (selectedPost) {
      setFullStory(selectedPost);
    }
  }

  const contextValue = {
    fullStory,
    setFullStory,
    getFullStory,
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