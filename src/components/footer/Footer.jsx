import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      {/* CTA Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-colors">
            <span>Get Started</span>
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
              <FiArrowRight className="text-white text-sm" />
            </div>
          </button>
        </div>

        {/* Footer Content - Tablet Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Description - Full width on mobile, 3 cols on tablet */}
          <div className="md:col-span-3">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 text-gray-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 text-gray-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 text-gray-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 text-gray-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <FaDribbble size={14} />
              </a>
            </div>
          </div>
          
          {/* Middle gap - Empty column */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Navigation - 2 cols on tablet */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact - 2 cols on tablet */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-600 font-semibold mr-2">S :</span>
                <span className="text-gray-600">+1 123 456 789</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 font-semibold mr-2">S :</span>
                <span className="text-gray-600">+1 123 456 789</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 font-semibold mr-2">E :</span>
                <span className="text-gray-600">support@template.net</span>
              </li>
            </ul>
          </div>

          {/* Address - 2 cols on tablet */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">Address</h3>
            <p className="text-gray-600">
              3265 Cityview Drive<br />
              Philadelphia, PA
            </p>
          </div>
        </div>

        {/* Copyright - Simplified version as in image */}
        <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-200 pt-6 text-sm text-gray-600">
          <div>© 2023 Ojjomedia. All Rights Reserved.</div>
          <div className="flex mt-3 md:mt-0 space-x-6">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Terms & Condition</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;