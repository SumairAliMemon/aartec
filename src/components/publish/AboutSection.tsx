"use client";

import { useState } from 'react';
import ContactModal from './ContactModal';

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChooseAartec = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Choose Aartec - Let's Get Started!"
      />
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-blue-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-400/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Large Image - Background */}
            <div className="absolute top-0 left-0 w-80 h-80 lg:w-96 lg:h-96 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/OIP.jpeg" 
                alt="Professional workspace" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Small Image - Overlapping */}
            <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-56 lg:h-56 z-10 transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/OIP2.jpeg" 
                alt="Creative workspace" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              aartec.com - Your All-in-One Publishing Solution!
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              At aartec.com, we're dedicated to making your publishing dreams a reality. We can help you with anything from writing and editing to designing and releasing your book in print and on Amazon's Kindle.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Whether you're new to publishing or a seasoned author, our team has the expertise and tools to help you achieve your writing goals. Join us as we bring your story to life and share it with the world. Our services include:
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "✓ Amazon Publishing",
                "✓ Book Publishing", 
                "✓ Author Website",
                "✓ Book Writing",
                "✓ Book Editing", 
                "✓ Book Cover Design",
                "✓ Ebook Editing",
                "✓ Ebook Writing",
                "✓ Book Illustrations",
                "✓ Ghost Writing",
                "✓ Book Marketing",
                "✓ Proofreading Services",
                "✓ Book Printing",
                "✓ Children Book Illustration"
              ].map((service, index) => (
                <div key={index} className="text-white font-medium">
                  {service}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button 
                onClick={handleChooseAartec}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 sm:flex-initial"
              >
                Choose Aartec!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
