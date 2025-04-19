import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import { FiCalendar, FiUser, FiTag, FiArrowRight } from 'react-icons/fi';

// Import blog image
import blogImage from '../../assets/images/hero.png';

// Import blog data
import blogData from '../../data/blogData.json';

// Component to render different content types
const ContentRenderer = ({ content }) => {
  switch(content.type) {
    case 'heading':
      const HeadingTag = `h${content.level}`;
      return <HeadingTag className={`font-bold mt-8 mb-3 ${content.level === 2 ? 'text-xl' : 'text-lg'}`}>{content.text}</HeadingTag>;
    
    case 'paragraph':
      return <p className="mb-5 text-gray-700 leading-relaxed text-base">{content.text}</p>;
    
    case 'list':
      return (
        <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-700 text-sm">
          {content.items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      );
    
    case 'code':
      return (
        <div className="bg-gray-100 p-4 rounded-md my-5 overflow-auto">
          <pre className="text-xs text-gray-800 font-mono whitespace-pre-wrap">
            {content.code}
          </pre>
        </div>
      );
    
    case 'callout':
      return (
        <div className="border-l-4 border-orange-500 bg-orange-50 p-4 my-6 rounded-r-md">
          <p className="text-gray-800 italic text-sm">{content.text}</p>
        </div>
      );
    
    default:
      return null;
  }
};

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog post with the matching id
    const blogPost = blogData.blogPosts.find(post => post.id === parseInt(id));
    
    if (blogPost) {
      setBlog({
        ...blogPost,
        image: blogImage // Use the imported image
      });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  // If blog data is still loading
  if (!blog) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{blog.title}</h1>
          
          {/* Featured single image at top */}
          <div className="mb-6 mt-4">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-auto rounded-md object-cover max-h-[300px]"
            />
          </div>
          
          {/* Blog meta information */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-500">
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <FiUser className="mr-1" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <FiTag className="mr-1" />
              <span>{blog.category}</span>
            </div>
          </div>
          
          {/* Blog content */}
          <article className="prose max-w-none text-sm">
            {blog.content.map((contentItem, index) => (
              <ContentRenderer key={index} content={contentItem} />
            ))}

            {/* Tags inline at end of content */}
            <div className="flex flex-wrap gap-2 my-6">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Author footer */}
          <div className="flex justify-between items-center text-xs mt-10 pt-4 border-t border-gray-200">
            <div className="text-gray-600">
              Written by <span className="font-medium">{blog.author}</span>
            </div>
            <Link to="/blog" className="text-orange-500 flex items-center">
              <span className="font-medium">Continue Reading</span>
              <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default SingleBlog;