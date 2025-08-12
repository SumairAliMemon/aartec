"use client";

import { useState } from 'react';
import ContactModal from '../publish/ContactModal';

export default function MBCPricingCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleEnrollNow = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const tiers = [
    {
      name: "MBC Lite",
      price: "$50,000",
      team: "Team of 3",
      location: "Remote",
      benefits: "Year-long business execution support with startup team",
      popular: false,
      features: [
        "Dedicated team of 3 professionals",
        "Remote collaboration & support",
        "12-month execution program",
        "Weekly strategy sessions",
        "Basic branding & web presence",
        "Marketing funnel setup"
      ]
    },
    {
      name: "MBC",
      price: "$100,000", 
      team: "Team of 3",
      location: "Islamabad (1 year)",
      benefits: "All expenses paid: accommodation, co-working, network, and in-person team",
      popular: true,
      features: [
        "Dedicated team of 3 professionals",
        "1-year Islamabad residency included",
        "All accommodation & expenses paid",
        "Co-working office access",
        "In-person mentoring & networking",
        "Weekend excursions & local immersion",
        "Visa & travel assistance"
      ]
    },
    {
      name: "MBC Elite",
      price: "$250,000",
      team: "Team of 15", 
      location: "Hybrid/Global",
      benefits: "Full-scale execution with an elite cross-functional team",
      popular: false,
      features: [
        "Elite team of 15 specialists",
        "Full cross-functional execution",
        "Global hybrid collaboration",
        "Advanced tech development",
        "Complete brand & marketing suite",
        "Investor-ready materials",
        "International market entry support"
      ]
    }
  ];

  return (
    <>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={`Apply for ${selectedTier}`}
      />
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the level of support and execution power for your business journey</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl p-8 flex flex-col ${tier.popular ? 'ring-4 ring-green-500 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <div className="text-green-600 font-semibold mb-1">{tier.team}</div>
                  <div className="text-blue-600 font-medium mb-3">{tier.location}</div>
                  <p className="text-gray-600 text-sm">{tier.benefits}</p>
                </div>
                
                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => handleEnrollNow(tier.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg' 
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Rolling Admissions - Apply Anytime</p>
            <p className="text-sm text-gray-500">We only accept serious applicants ready to commit time and capital.</p>
          </div>
        </div>
      </section>
    </>
  );
}
