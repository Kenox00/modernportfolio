import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';

// Import project images
import project1 from '../../assets/images/projects/1000030.jpg';
import project2 from '../../assets/images/projects/1010788.jpg';
import project3 from '../../assets/images/projects/11130251.jpg';
import project4 from '../../assets/images/projects/11130385.png';

// Import portfolio data
import portfolioData from '../../data/portfolioData.json';

const SinglePortfolio = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  
  // Map image paths to imported images
  const imageMap = {
    "1000030.jpg": project1,
    "1010788.jpg": project2,
    "11130251.jpg": project3,
    "11130385.png": project4
  };

  useEffect(() => {
    // Find the portfolio item with matching id
    const portfolioItem = portfolioData.portfolioItems.find(item => item.id === parseInt(id));
    
    if (portfolioItem) {
      // Map image paths to actual imported images
      const mainImage = imageMap[portfolioItem.imagePath];
      const additionalImages = portfolioItem.additionalImages.map(img => imageMap[img]);
      
      // Format project info for display
      const projectInfo = [
        { label: "Client", value: portfolioItem.projectInfo.client },
        { label: "Category", value: portfolioItem.projectInfo.category },
        { label: "Start Date", value: portfolioItem.projectInfo.startDate },
        { label: "Completion Date", value: portfolioItem.projectInfo.completionDate },
        { label: "Website", value: portfolioItem.projectInfo.website }
      ];
      
      // Create formatted portfolio object
      setPortfolio({
        ...portfolioItem,
        images: [mainImage, ...additionalImages],
        projectInfo
      });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  // If portfolio data is still loading
  if (!portfolio) {
    return (
      <div>
        <Navbar />
        <div className="pt-24 pb-16 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Image Section */}
          <div className="mb-10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={portfolio.images[0]} 
                alt={portfolio.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Title and Project Info Section */}
          <div className="mb-16">
            <h1 className="text-3xl font-bold mb-6">{portfolio.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Description Column */}
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-6">{portfolio.description}</p>
              </div>
              
              {/* Project Info Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                <dl className="space-y-3">
                  {portfolio.projectInfo.map((info, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                      <dt className="font-medium text-gray-600">{info.label}</dt>
                      <dd className="text-gray-800">{info.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          
          {/* Detailed Sections */}
          <div className="space-y-12 mb-12">
            {/* About Project Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">About Project</h2>
              <p className="text-gray-600">{portfolio.aboutProject}</p>
            </section>
            
            {/* The Challenge Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600">{portfolio.challenge}</p>
            </section>
            
            {/* The Solution Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-600">{portfolio.solution}</p>
            </section>
            
            {/* The Result Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">The Result</h2>
              <p className="text-gray-600">{portfolio.result}</p>
            </section>
          </div>
          
          {/* Tags Section */}
          <div className="flex flex-wrap justify-between items-center pt-6 border-t border-gray-200">
            {portfolio.tags.map((tag, index) => (
              <div key={index} className="text-sm text-gray-500 mb-2">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default SinglePortfolio;