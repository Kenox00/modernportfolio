import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import BlogGrid from './BlogGrid';

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-3 text-center">Blog</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
          <BlogGrid />
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Blogs;