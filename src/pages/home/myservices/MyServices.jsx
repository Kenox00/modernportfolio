import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-base-100 rounded-lg p-6 shadow-sm border border-base-300 hover:shadow-md transition-shadow duration-300">
      <div className="bg-primary bg-opacity-20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
        <span className="text-primary text-xl">{icon}</span>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
};

const MyServices = () => {
  // Service data array with icons, titles, and descriptions
  const services = [
    {
      icon: '</>', 
      title: 'Web Development',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim'
    },
    {
      icon: '☕',
      title: 'App Development',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim'
    },
    {
      icon: 'UI',
      title: 'UI / UX Design',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim'
    },
    {
      icon: '🎨',
      title: 'Graphics Design',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim'
    },
    {
      icon: '📣',
      title: 'Digital Marketing',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim'
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim'
    }
  ];

  return (
    <section className="bg-base-200 py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-base-content">My Services</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>

        {/* Services grid - responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;