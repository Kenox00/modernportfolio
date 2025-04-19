import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import servicesData from '../../data/servicesData.json';
import { FiCheck, FiArrowRight, FiChevronRight } from 'react-icons/fi';

const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(1); // Default to middle tier

  useEffect(() => {
    // Find the service with the matching id
    const foundService = servicesData.services.find(
      (service) => service.id === parseInt(id)
    );
    
    if (foundService) {
      setService(foundService);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  // If service data is still loading
  if (!service) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const getPriceClassName = (index) => {
    if (index === selectedPriceIndex) return "bg-orange-500 text-white";
    return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="w-full lg:w-2/3">
              {/* Service Header */}
              <h1 className="text-2xl font-bold mb-4">About Website Design Service</h1>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 mb-4">
                  {service.detailedDescription}
                </p>
                <p className="text-gray-700 mb-8">
                  Our process ensures that your website not only looks great but performs exceptionally, driving conversions and providing value to your business.
                </p>
                
                {/* Features as bullets with orange dots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-orange-500 w-2 h-2 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Process section */}
              <h3 className="text-lg font-bold mb-4">Why You Should Hire Me For This Service</h3>
              <div className="mb-12">
                <ol className="list-none space-y-2">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* Pricing Table */}
              <h3 className="text-lg font-bold mb-4">Pricing</h3>
              <div className="mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-medium">Plan</th>
                      <th className="text-right py-3 font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.priceRanges.map((tier, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 text-gray-700">{tier.name}</td>
                        <td className="py-3 text-right text-gray-700 font-medium">{tier.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Selected package section */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold">Choose Your Package</h3>
                <span className="text-orange-500 font-bold">{service.priceRanges[selectedPriceIndex].price}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={service.priceRanges.length - 1} 
                value={selectedPriceIndex}
                onChange={(e) => setSelectedPriceIndex(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500 mb-8"
              />
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Other Services</h3>
                
                <div className="space-y-2 mb-8">
                  {servicesData.services.filter(s => s.id !== parseInt(id)).map((otherService) => (
                    <Link 
                      key={otherService.id} 
                      to={`/service/${otherService.id}`} 
                      className="flex items-center justify-between p-3 bg-white rounded hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium">{otherService.title}</span>
                      <FiChevronRight />
                    </Link>
                  ))}
                </div>
                
                {/* Contact form */}
                <h3 className="text-lg font-bold mb-4">Request a Quote</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows="4" 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-medium transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      <Footer />
      
    </div>
  );
}

export default SingleService;