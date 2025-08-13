"use client";

import ContactModal from '@/components/publish/ContactModal';
import { useState } from 'react';

export default function BrandHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Brand in a Box — Powered by aartec
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
            Your online presence, done right.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-5xl mx-auto">
            If you're a founder, solopreneur, coach, or expert, ready to look as professional online as you do in real life then this service is the perfect fit for you.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 mb-10 md:mb-12 leading-relaxed max-w-6xl mx-auto">
            Brand in a Box is a complete, ready-to-go package that gives you a custom website, polished brand visuals, and reliable support, so you can focus on growing your business instead of chasing freelancers or wrestling with tech.
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
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Brand in a Box - Let's Get Started!"
      />
    </>
  );
}
