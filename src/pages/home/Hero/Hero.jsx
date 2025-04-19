import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaDribbble } from 'react-icons/fa';
import image from '../../../assets/images/hero.png'; // Replace with your image path

const Hero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr_1.5fr] items-center gap-10">
          {/* Name and Social Icons */}
          <div>
            <h1 className="text-5xl font-black leading-tight text-gray-900 mb-6">
              Rayan
              <br />
              Adlardard
            </h1>
            <div className="flex gap-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaDribbble size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-orange-500 overflow-hidden">
              <img 
                src={image}
                alt="Rayan Adlardard - Product Designer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description and CTA */}
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              I'm a Professional Product Designer in New York
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Meet Rayan Adlardard, a product designer with a passion for crafting seamless user experiences. 
              With 8 years of experience in the industry, Rayan has honed their skills in designing products that 
              not only look great but also work well.
            </p>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Let's Talk
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet layout (matching the image you shared) */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Name */}
          <div className="mb-6 text-left w-full">
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              Rayan
              <br />
              Adlardard
            </h1>
          </div>
          
          {/* Social account text and icons in a row */}
          <div className="flex flex-col items-start w-full mb-6">
            <p className="text-sm text-gray-500 mb-2">Social account</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaDribbble size={16} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-orange-500 overflow-hidden">
              <img 
                src={image}
                alt="Rayan Adlardard - Product Designer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Title and Description */}
          <div className="text-left w-full space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              I'm a Professional Product Designer in New York
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Meet Rayan Adlardard, a product designer with a passion for crafting seamless user experiences. 
              With 8 years of experience in the industry, Rayan has honed their skills in designing products that 
              not only look great but also work well.
            </p>
            
            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Let's Talk
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;