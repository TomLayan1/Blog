import React, { useContext } from 'react';
import { BlogContext } from '../Context/BlogContext'

const Pagination = () => {
  // From Context
  const { getPostsByCategory, currentPage, setCurrentPage } = useContext(BlogContext);
  const totalPosts = getPostsByCategory().length;
  const totalPages = Math.ceil(totalPosts / 12);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center mx-auto">
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index + 1} onClick={() => handlePageClick(index + 1)} className={`px-2 text-[15px] shadow-customShadow cursor-pointer text-primaryColor border rounded ${currentPage === index + 1 ? 'bg-orange-600 text-white' : ''}`}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
