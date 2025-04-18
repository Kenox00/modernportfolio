import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiArrowRight } from 'react-icons/fi';
import image from '../../../assets/images/hero.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProjectCard = ({ image, company, title, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1">{company}</p>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <a 
          href={link} 
          className="text-sm text-orange-500 hover:text-orange-600 transition-colors" 
        >
          View Case Study
        </a>
      </div>
    </div>
  );
};

const LatestProject = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      image: image,
      company: 'Google',
      title: 'Senior Product Designer',
      link: '/case-study/1'
    },
    {
      id: 2,
      image: image,
      company: 'Google',
      title: 'Senior Product Designer',
      link: '/case-study/2'
    },
    {
      id: 3,
      image: image,
      company: 'Google',
      title: 'Senior Product Designer',
      link: '/case-study/3'
    },
    {
      id: 4,
      image: image,
      company: 'Microsoft',
      title: 'UX Designer',
      link: '/case-study/4'
    },
    {
      id: 5,
      image: image,
      company: 'Apple',
      title: 'UI Designer',
      link: '/case-study/5'
    }
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header section with title and button on the same line */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Project</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
          </div>
          
          {/* View All Work button - positioned to the right */}
          <a 
            href="/work" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full transition-colors"
          >
            View All Work
            <FiArrowRight className="text-white" />
          </a>
        </div>

        {/* Carousel with projects */}
        <div className="relative mb-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletActiveClass: 'bg-orange-500 !opacity-100',
              bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map(project => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  image={project.image}
                  company={project.company}
                  title={project.title}
                  link={project.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex justify-between mt-8">
            <div className="swiper-button-prev !static !w-10 !h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors !m-0 after:!content-[''] !shadow-md">
              <span className="sr-only">Previous</span>
              <span className="block transform -translate-x-0.5">‹</span>
            </div>
            
            {/* Pagination dots */}
            <div className="swiper-pagination !static !w-auto flex items-center"></div>
            
            <div className="swiper-button-next !static !w-10 !h-10 bg-orange-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors !m-0 after:!content-[''] !shadow-md">
              <span className="sr-only">Next</span>
              <span className="block transform translate-x-0.5">›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;