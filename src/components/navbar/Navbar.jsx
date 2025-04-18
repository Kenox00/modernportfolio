import React, { useState } from 'react';
import { CgColorBucket } from 'react-icons/cg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-base-100 shadow-md rounded-full mx-4 my-2 px-6 py-3 fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8">
        {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((link, index) => (
          <a
            key={link}
            href="#"
            className={`${
              index === 0 ? 'text-primary' : 'text-secondary'
            } hover:text-primary-focus font-medium transition duration-300`}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-primary hover:text-primary-focus transition duration-300">
          <CgColorBucket size={24} />
        </button>
        <button
          className="lg:hidden text-primary hover:text-primary-focus transition duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-base-100 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-primary hover:text-primary-focus"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 mt-12">
          {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map(
            (link, index) => (
              <a
                key={link}
                href="#"
                className={`${
                  index === 0 ? 'text-primary' : 'text-secondary'
                } hover:text-primary-focus font-medium text-xl`}
                onClick={toggleMenu}
              >
                {link}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;