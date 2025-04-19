import React, { useState } from 'react';

// Resume item component for each education/experience entry
const ResumeItem = ({ title, period, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="md:w-1/3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded inline-block mt-1">
          {period}
        </p>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{description.title}</h3>
        <p className="text-gray-600">
          {description.content}
        </p>
      </div>
    </div>
  );
};

const MyResume = () => {
  // Define tabs
  const tabs = ['Education', 'Experience', 'Professional Skills'];
  const [activeTab, setActiveTab] = useState(0);

  // Education data
  const educationItems = [
    {
      title: 'University of Toronto',
      period: 'Jan 2016 - Dec 2021',
      description: {
        title: 'Certificate of web training',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum nisi ut facilisis nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.'
      }
    },
    {
      title: 'University of Toronto',
      period: 'Jan 2016 - Dec 2021',
      description: {
        title: 'Certificate of web training',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum nisi ut facilisis nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.'
      }
    },
    {
      title: 'University of Toronto',
      period: 'Jan 2016 - Dec 2021',
      description: {
        title: 'Certificate of web training',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum nisi ut facilisis nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.'
      }
    }
  ];

  // Experience data - you can add actual experience data following the same structure
  const experienceItems = [
    {
      title: 'Google',
      period: 'Jan 2019 - Present',
      description: {
        title: 'Senior UX Designer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum nisi ut facilisis nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.'
      }
    },
    {
      title: 'Microsoft',
      period: 'Jan 2016 - Dec 2018',
      description: {
        title: 'UI Designer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum nisi ut facilisis nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.'
      }
    }
  ];

  // Professional skills - expanded with more skills
  const professionalSkills = [
    { skill: 'Web Design', level: 90 },
    { skill: 'Mobile App Design', level: 80 },
    { skill: 'UI/UX Design', level: 95 },
    { skill: 'Prototyping', level: 85 },
    { skill: 'HTML/CSS', level: 92 },
    { skill: 'JavaScript', level: 88 },
    { skill: 'React', level: 85 },
    { skill: 'Figma', level: 90 },
    { skill: 'Adobe XD', level: 82 },
    { skill: 'Sketch', level: 78 }
  ];

  // Render appropriate content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Education
        return educationItems.map((item, index) => (
          <ResumeItem 
            key={index} 
            title={item.title} 
            period={item.period} 
            description={item.description} 
          />
        ));
      case 1: // Experience
        return experienceItems.map((item, index) => (
          <ResumeItem 
            key={index} 
            title={item.title} 
            period={item.period} 
            description={item.description} 
          />
        ));
      case 2: // Professional Skills
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.skill}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">My Resume</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>

        {/* Mobile layout (vertical tabs and content) - only on mobile phones */}
        <div className="block sm:hidden">
          {/* Vertical tabs for mobile */}
          <div className="mb-6 border-l border-gray-200">
            <div className="flex flex-col space-y-5">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`relative flex items-center text-left pl-6 ${
                    activeTab === index 
                      ? "text-orange-500 font-medium" 
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className={`absolute left-0 w-0.5 h-5 ${
                    activeTab === index ? "bg-orange-500" : "bg-transparent"
                  }`}></span>
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content below tabs for mobile */}
          <div className="bg-white rounded-lg p-5 shadow-sm mt-5">
            {renderTabContent()}
          </div>
        </div>

        {/* Tablet layout (horizontal tabs with line separators) */}
        <div className="hidden sm:block lg:hidden mb-10">
          {/* Horizontal tabs for tablet */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6 md:space-x-12">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`relative flex items-center group ${
                    activeTab === index ? "text-orange-500 font-medium" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {index > 0 && (
                    <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-px bg-gray-300"></span>
                  )}
                  <span className={`${activeTab === index ? "border-b-2 border-orange-500 pb-1" : ""}`}>
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content for tablet view */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {renderTabContent()}
          </div>
        </div>

        {/* Desktop layout (side-by-side tabs and content) */}
        <div className="hidden lg:flex flex-row mb-10">
          <div className="w-1/6 mb-0">
            <div className="flex flex-col space-y-6">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`relative flex items-center group whitespace-nowrap ${
                    activeTab === index ? "text-gray-900 font-medium" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className={`absolute left-0 w-6 h-px ${
                    activeTab === index ? "bg-orange-500" : "bg-gray-300"
                  } mr-3`}></span>
                  <span className="pl-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content for desktop */}
          <div className="w-5/6 bg-white rounded-lg p-8 shadow-sm">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;