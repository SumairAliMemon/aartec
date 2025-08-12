"use client";

import { useState } from 'react';
import ContactModal from '../publish/ContactModal';

export default function MBCHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollNow = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Apply for Masters of Business Creation"
      />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 rounded-full mb-6">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-700 font-semibold text-sm">Reality is the Greatest Teacher</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Masters of Business Creation
            <span className="bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
              (MBC)
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            Build. Launch. Grow. For Real.
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Turn Your Idea Into a Real Business — With Real Support. At aartec.com, we don't just teach business — we build it with you. 
            The Masters of Business Creation (MBC) is for serious entrepreneurs who want to accelerate their business journey with the backing 
            of a world-class team, real market execution, and immersive support.
          </p>
          
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Whether you're a first-time founder or an experienced operator ready to scale — this is your launchpad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleEnrollNow}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Apply Now</span>
            </button>
            <button className="border-2 border-blue-500 text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Schedule Discovery Call</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
