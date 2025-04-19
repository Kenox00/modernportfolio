import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

// Import blog image for mapping
import blogImage from '../../assets/images/hero.png';

// Import blog data
import blogData from '../../data/blogData.json';

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 items per page (3 columns x 2 rows)

  // Map image paths to actual images
  const imageMap = {
    "hero.png": blogImage
  };

  // Process blog posts with actual images
  const blogPosts = blogData.blogPosts.map(post => ({
    ...post,
    image: imageMap[post.imagePath]
  }));

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogPosts.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Blog Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentItems.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Blog post image with orange border */}
              <div className="relative border-2 border-orange-500 m-3 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-orange-500 text-sm font-medium">
                  Read More 
                  <FiArrowRight className="ml-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 w-8 h-8 flex items-center justify-center rounded-full 
                ${currentPage === index + 1 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            className="mx-1 px-4 py-1 bg-orange-500 text-white rounded-full flex items-center"
            onClick={() => {
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Explore More Button (at bottom) */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
          Explore More
          <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
            <FiArrowRight className="text-white text-sm" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;