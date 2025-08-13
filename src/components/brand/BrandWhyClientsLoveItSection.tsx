"use client";

import ContactModal from '@/components/publish/ContactModal';
import { useState } from 'react';

export default function BrandWhyClientsLoveItSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const benefits = [
    {
      title: "No tech headaches",
      color: "from-green-500 to-green-700"
    },
    {
      title: "No generic designs", 
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "No chasing multiple people to get it all done",
      color: "from-violet-500 to-violet-700"
    }
  ];

  return (
    <>
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-left">Why Clients Love It</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${benefit.color} p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-32 flex items-center justify-center text-center`}
              >
                <h3 className="text-white text-base md:text-lg font-semibold">{benefit.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mb-8 md:mb-12">
            <p className="text-base md:text-lg text-gray-700 text-left">
              You'll work with one team — start to finish — who gets your goals and builds something that truly fits your business.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white shadow-xl">
            <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-left">Ready to Get Started?</h3>
            <p className="text-base md:text-xl text-purple-100 mb-6 md:mb-8 text-left">
              Let's build something you're proud to share.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button 
                onClick={handleGetStarted}
                className="bg-white text-purple-600 hover:bg-purple-50 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Book a Free Discovery Call</span>
              </button>
              <button 
                onClick={handleGetStarted}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
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
