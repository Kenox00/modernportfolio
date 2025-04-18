import React from 'react';

const Banner = () => {
  // Array of logo objects with name and optional width adjustments
  const logos = [
    { name: 'Microsoft', width: 'w-24' },
    { name: 'Alliance', width: 'w-20' },
    { name: 'bidlet.com', width: 'w-24' },
    { name: 'Geopharma', width: 'w-24' },
    { name: 'Dropbox', width: 'w-20' },
    { name: 'Amazon', width: 'w-24' },
    { name: 'Facebook', width: 'w-24' }
  ];

  return (
    <div className="w-full bg-primary py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* For desktop view - standard horizontal layout */}
        <div className="hidden md:flex justify-between items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              {/* Placeholder for actual logo images */}
              <div className={`${logo.width} h-8 flex items-center justify-center text-neutral`}>
                <div className="bg-primary py-1 px-3 rounded opacity-80">
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* For mobile view - scrollable container */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center flex-shrink-0"
              >
                {/* Placeholder for actual logo images */}
                <div className={`${logo.width} h-8 flex items-center justify-center text-neutral`}>
                  <div className="bg-primary py-1 px-3 rounded opacity-80">
                    {logo.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;