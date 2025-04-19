import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import servicesData from '../../data/servicesData.json';

// Import icons
import { FiMonitor, FiSmartphone, FiLayout, FiPenTool, FiTrendingUp, FiVideo } from 'react-icons/fi';

const Services = () => {
  // Function to render the appropriate icon
  const getIcon = (iconType) => {
    switch(iconType) {
      case 'web': return <FiMonitor className="text-white text-xl" />;
      case 'app': return <FiSmartphone className="text-white text-xl" />;
      case 'design': return <FiLayout className="text-white text-xl" />;
      case 'graphics': return <FiPenTool className="text-white text-xl" />;
      case 'marketing': return <FiTrendingUp className="text-white text-xl" />;
      case 'video': return <FiVideo className="text-white text-xl" />;
      default: return <FiMonitor className="text-white text-xl" />;
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-2">My Services</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Expert solutions tailored to your specific needs and designed to help your business grow. 
            Take a look at what I can do for you.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.services.map((service) => (
              <Link to={`/services/${service.id}`} key={service.id} className="block group">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="text-orange-500 font-medium flex items-center text-sm">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Banner />
      <Footer />
    </div>
  );
};

export default Services;