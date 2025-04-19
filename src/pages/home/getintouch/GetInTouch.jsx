import React, { useState } from 'react';
import { FiArrowRight, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>

        {/* Contact Form and Info - Exact match for tablet view */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-2/3 lg:w-3/5">
            <h3 className="text-xl font-semibold mb-6">Leave a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm text-gray-600 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-600 mb-1">Messages</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-colors"
              >
                <span>Send Message</span>
                <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
                  <FiArrowRight className="text-white text-sm" />
                </div>
              </button>
            </form>
          </div>

          {/* Contact Information Cards - Updated for exact image match */}
          <div className="w-full md:w-1/3 lg:w-2/5">
            <div className="flex flex-col space-y-8 md:space-y-6 lg:space-y-8">
              {/* Location Card */}
              <div className="flex flex-col items-center">
                {/* Icon centered at top */}
                <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <FiMapPin className="text-white" />
                </div>
                <div className="w-full max-w-[220px] mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Country:</span>
                    <span className="font-medium text-gray-900">Bangladesh</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">City:</span>
                    <span className="font-medium text-gray-900">Dhaka</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Street:</span>
                    <span className="font-medium text-gray-900">35 Vhatara, Badda</span>
                  </div>
                </div>
              </div>

              {/* Email & Social Card */}
              <div className="flex flex-col items-center">
                {/* Icon centered at top */}
                <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <FiMail className="text-white" />
                </div>
                <div className="w-full max-w-[220px] mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Email:</span>
                    <span className="font-medium text-gray-900">info@youremail.com</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Skype:</span>
                    <span className="font-medium text-gray-900">@yourusername</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Telegram:</span>
                    <span className="font-medium text-gray-900">@yourusername</span>
                  </div>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="flex flex-col items-center">
                {/* Icon centered at top */}
                <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <FiPhone className="text-white" />
                </div>
                <div className="w-full max-w-[220px] mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Support:</span>
                    <span className="font-medium text-gray-900">15369</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Office:</span>
                    <span className="font-medium text-gray-900">+58 (021) 356 587 235</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Personal:</span>
                    <span className="font-medium text-gray-900">+58 (021) 356 587 235</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;