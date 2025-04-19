import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import a sample blog image - replace with your actual image path
import blogImage from '../../../assets/images/hero.png'; 

const BlogCard = ({ title, excerpt, image, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
      <div className="p-3   rounded-lg h-full flex flex-col">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover" 
          />
        </div>
        <div className="p-3 flex flex-col flex-1">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 flex-1">
            {excerpt}
          </p>
          <a 
            href={link} 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 text-sm font-medium"
          >
            Read More <FiArrowRight className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const LatestBlog = () => {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'How to make web templates',
      excerpt: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: blogImage,
      link: '/blog/how-to-make-web-templates'
    },
    {
      id: 2,
      title: 'How to make web templates',
      excerpt: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: blogImage,
      link: '/blog/how-to-make-web-templates'
    },
    {
      id: 3,
      title: 'How to make web templates',
      excerpt: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: blogImage,
      link: '/blog/how-to-make-web-templates'
    },
    {
      id: 4,
      title: 'How to make web templates',
      excerpt: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: blogImage,
      link: '/blog/how-to-make-web-templates'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blog</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>

        {/* Blog posts carousel */}
        <div className="relative mb-12">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.blog-swiper-pagination',
              bulletActiveClass: 'bg-orange-500 !opacity-100',
              bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer',
            }}
            navigation={{
              prevEl: '.blog-swiper-button-prev',
              nextEl: '.blog-swiper-button-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop={true}
            grabCursor={true}
            className="pb-12"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id} className="h-auto">
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  link={post.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center mt-6 relative">
            <button className="blog-swiper-button-prev absolute left-0 !w-10 !h-10 bg-white text-gray-800 border border-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors !m-0 after:!content-[''] !shadow-sm z-10">
              <span className="sr-only">Previous</span>
              <FiArrowRight className="transform rotate-180 text-lg" />
            </button>
            
            {/* Pagination dots */}
            <div className="blog-swiper-pagination !static !w-auto flex items-center justify-center"></div>
            
            <button className="blog-swiper-button-next absolute right-0 !w-10 !h-10 bg-orange-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors !m-0 after:!content-[''] !shadow-md z-10">
              <span className="sr-only">Next</span>
              <FiArrowRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Explore More button */}
        <div className="flex justify-center">
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-colors"
          >
            <span>Explore More</span>
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
              <FiArrowRight className="text-white text-sm" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;