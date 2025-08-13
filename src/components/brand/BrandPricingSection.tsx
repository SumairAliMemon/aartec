"use client";

import ContactModal from '@/components/publish/ContactModal';
import { useState } from 'react';

export default function BrandPricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-left">Pricing</h2>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-purple-100">
            <div className="mb-6 md:mb-8 text-left">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">One-time investment:</h3>
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                $10,000
              </div>
              <div className="text-lg md:text-xl text-gray-600 mt-2">USD</div>
            </div>
            
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 text-left">
              Everything you need to launch strong and look sharp.
            </p>
            
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 text-left">
              Want to spread it out? Payment plans are available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Book a Free Discovery Call</span>
              </button>
              <button 
                onClick={handleGetStarted}
                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Start Your Project Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Brand in a Box - Let's Get Started!"
      />
    </>
  );
}
