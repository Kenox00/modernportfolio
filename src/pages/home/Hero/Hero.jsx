import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import image from '../../../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="bg-base-200 min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row items-center justify-between">
          {/* Left Side: Name and Social Icons */}
          <div className="flex-1 text-left pr-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-base-content leading-tight">
              Rayan <br /> Adlardard
            </h1>
            <div className="mt-6 border-t border-base-300 pt-4">
              <p className="text-sm text-secondary mb-2">Social account</p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                  <FaPinterestP className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Center: Image with Primary Background */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-primary rounded-full -z-10" />
              <img
                src={image}
                alt="Rayan Adlardard"
                className="w-auto h-72 lg:h-96 object-contain z-10"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 max-w-md pl-4">
            <h2 className="text-3xl lg:text-4xl font-semibold text-base-content mb-3">
              I'm a Professional Product Designer in New York
            </h2>

            <p className="text-secondary text-sm lg:text-base mb-6 leading-relaxed">
              Meet Rayan Adlardard, a product designer with a passion for crafting seamless user experiences. 
              With 6 years of experience in the industry, Rayan has honed their skills in designing products that 
              not only look great but also work well.
            </p>

            <button className="bg-primary text-primary-content font-medium py-2 px-6 rounded-full flex items-center hover:bg-primary-focus transition duration-300">
              <span>Let's Talk</span>
              <div className="bg-neutral rounded-full p-1 ml-2">
                <svg
                  className="w-4 h-4 text-neutral-content"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-base-content leading-tight mb-4">
            Rayan <br /> Adlardard
          </h1>
          
          {/* Image with Primary Background */}
          <div className="relative my-6">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-52 h-52 sm:w-64 sm:h-64 bg-primary rounded-full -z-10" />
            <img
              src={image}
              alt="Rayan Adlardard"
              className="w-auto h-60 sm:h-72 object-contain z-10"
            />
          </div>
          
          {/* Content */}
          <div className="max-w-md mx-auto mt-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-base-content mb-3">
              I'm a Professional Product Designer in New York
            </h2>

            <p className="text-secondary text-sm mb-6 leading-relaxed">
              Meet Rayan Adlardard, a product designer with a passion for crafting seamless user experiences. 
              With 6 years of experience in the industry, Rayan has honed their skills in designing products that 
              not only look great but also work well.
            </p>

            <button className="bg-primary text-primary-content font-medium py-2 px-6 rounded-full flex items-center justify-center mx-auto hover:bg-primary-focus transition duration-300">
              <span>Let's Talk</span>
              <div className="bg-neutral rounded-full p-1 ml-2">
                <svg
                  className="w-4 h-4 text-neutral-content"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="bg-base-100 mt-8 border-t border-base-300 pt-4 w-full max-w-xs">
            <p className="text-sm text-secondary mb-2">Social account</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-secondary-focus transition duration-300">
                <FaPinterestP className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;