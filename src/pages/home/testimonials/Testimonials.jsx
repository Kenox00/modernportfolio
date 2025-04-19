import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Sample avatar image - replace with your own
import avatarImage from '../../../assets/images/hero.png';

const TestimonialCard = ({ name, position, content, rating }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      {/* Avatar and user info */}
      <div className="flex items-center mb-4">
        <img 
          src={avatarImage} 
          alt={name} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4" 
        />
        <div>
          <h3 className="font-bold text-gray-900 text-sm md:text-base">{name}</h3>
          <p className="text-xs md:text-sm text-gray-500">{position}</p>
        </div>
      </div>
      
      {/* Testimonial content */}
      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
        {content}
      </p>
      
      {/* Star rating */}
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-orange-400 text-sm md:text-base mr-1" />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Edward Leonard',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    },
    {
      id: 2,
      name: 'Edward Leonard',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    },
    {
      id: 3,
      name: 'Edward Leonard',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    },
    {
      id: 4,
      name: 'Edward Leonard',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header section with title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonial</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletActiveClass: 'bg-orange-500 !opacity-100',
              bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer',
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  name={testimonial.name}
                  position={testimonial.position}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation controls - Updated to match image design */}
          <div className="flex justify-center items-center mt-10 relative">
            {/* Left arrow button - white circle with gray border */}
            <button className="swiper-button-prev !w-10 !h-10 bg-white text-gray-800 border border-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors !m-0 after:!content-[''] !shadow-sm absolute left-0 z-10">
              <span className="sr-only">Previous</span>
              <FiArrowLeft className="text-gray-600" />
            </button>
            
            {/* Pagination dots */}
            <div className="swiper-pagination !w-auto flex items-center justify-center"></div>
            
            {/* Right arrow button - orange circle */}
            <button className="swiper-button-next !w-10 !h-10 bg-orange-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors !m-0 after:!content-[''] !shadow-md absolute right-0 z-10">
              <span className="sr-only">Next</span>
              <FiArrowRight className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Start Your Project button - Updated to match image design */}
        <div className="flex justify-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-colors"
          >
            <span>Start Your Project</span>
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center ml-1">
              <FiArrowRight className="text-white text-sm" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;