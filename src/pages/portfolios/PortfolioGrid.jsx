import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import project images
import project1 from '../../assets/images/projects/1000030.jpg';
import project2 from '../../assets/images/projects/1010788.jpg';
import project3 from '../../assets/images/projects/11130251.jpg';
import project4 from '../../assets/images/projects/11130385.png';

// Import portfolio data
import portfolioData from '../../data/portfolioData.json';

const PortfolioGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Using 6 items per page (2 columns x 3 rows)

  // Map image paths to imported images
  const imageMap = {
    "1000030.jpg": project1,
    "1010788.jpg": project2,
    "11130251.jpg": project3,
    "11130385.png": project4
  };

  // Updated portfolio items data with actual images
  const portfolioItems = portfolioData.portfolioItems.map(item => ({
    ...item,
    image: imageMap[item.imagePath]
  }));

  // Calculate pagination
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolioItems.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Portfolio Grid - Modified to show 2 columns and 3 rows per page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
        {currentItems.map((item) => (
          <Link to={`/portfolio/${item.id}`} key={item.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">{item.title}</h3>
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
    </div>
  );
};

export default PortfolioGrid;