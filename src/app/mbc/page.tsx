'use client';

import CircularGalleryWrapper from '@/components/mbc/CircularGalleryWrapper';
import MBCFAQSection from '@/components/mbc/MBCFAQSection';
import ContactModal from '@/components/publish/ContactModal';
import { useState } from 'react';

export default function MBCPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollNow = () => {
    setIsModalOpen(true);
  };

  const clients = [
    {
      name: "WorkReel",
      description: "WorkReel is a video-driven, career marketplace that matches businesses with talent.",
      image: "https://picsum.photos/seed/workreel/800/600",
      website: "https://workreel.com"
    },
    {
      name: "MoeMhanna.com", 
      description: "Moe is a strategy-minded thinker who leverages his strategic expertise to help others achieve their goals through the practical 5 steps of SPARK winning strategy model.",
      image: "https://picsum.photos/seed/moemhanna/800/600",
      website: "https://moemhanna.com"
    },
    {
      name: "Oxygen Ecommerce",
      description: "An ecommerce site selling oxygen throughout the world. We optimized this WordPress site to give a world class ecommerce experience.",
      image: "https://picsum.photos/seed/oxygen/800/600",
      website: "https://oxygen-ecommerce.com"
    },
    {
      name: "Fintechs.fi",
      description: "Fintechs.fi provides a place that aggregates all the FinTech related news",
      image: "https://picsum.photos/seed/fintechs/800/600",
      website: "https://fintechs.fi"
    },
    {
      name: "Hawkr",
      description: "Hawkr provides a digital platform for musicians to sell their Tshirts at their events to fans without having to carry the inventory.",
      image: "https://picsum.photos/seed/hawkr/800/600",
      website: "https://hawkr.com"
    },
    {
      name: "InterFunnels",
      description: "InterFunnels is a Software as a Service platform which makes building websites and ecommerce platforms simple.",
      image: "https://picsum.photos/seed/interfunnels/800/600",
      website: "https://interfunnels.com"
    }
  ];

  // Transform clients data for CircularGallery
  const galleryItems = clients.map(client => ({
    image: client.image,
    text: client.name
  }));

  return (
    <>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Apply for Masters of Business Creation"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Masters of Business Creation
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-8">
              Reality is the Greatest Teacher
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8 inline-block">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Program Dates:</strong> 1st January 2026 — 31st December 2026
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Location:</strong> Islamabad, Pakistan or London, United Kingdom or Silicon Valley, United States
              </p>
              <p className="text-lg text-red-600 font-semibold">
                <strong>Seats Available:</strong> Only 100 entrepreneurs per cohort — Apply early to secure your spot.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Build. Launch. Grow. Graduate.
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The aartec.com Masters of Business Creation (MBC) is not just another MBA. It's a launchpad — bringing ambitious founders from around the world for a life-changing year of doing business, not just talking about it.
            </p>
          </div>
        </section>

        {/* What Makes MBC Different */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              What Makes aartec.com MBC Different?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">A Real Team</h3>
                <p className="text-gray-700">
                  You don't build alone. Each founder gets a dedicated team of 3 trained graduates working full-time to launch and grow your startup alongside you.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-800 mb-4">No Elitist Barriers</h3>
                <p className="text-gray-700">
                  No GMAT. No pointless entrance hoops. We don't care about your grades — we care about your grit.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Accredited Partnership</h3>
                <p className="text-gray-700">
                  While aartec University is new and proudly unaccredited for now, your MBC is delivered in partnership with UET Mardan, ensuring your degree stands up to scrutiny.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Everything Covered</h3>
                <p className="text-gray-700">
                  Starting from USD 100,000 tuition covers it all — your food, accommodation in Islamabad for you and your 3 teammates, top-class learning, and intensive coaching. You don't need to give up any equity and own your business outright.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl md:col-span-2">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Keep Your Team</h3>
                <p className="text-gray-700">
                  When you graduate, you don't leave empty-handed. You have a trained team that stays with you — so your company keeps moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Clients</h2>
            
            {/* Infinite Scrolling Client Gallery */}
            <div className="max-w-8xl mx-auto relative">
              <CircularGalleryWrapper clients={clients} />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* MBC CORE */}
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">MBC CORE</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $100,000
                </div>
                <p className="text-gray-600 mb-6">1 Year</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3 Fulltime Staff
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All expenses paid for one year
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    MBC Degree for you and your 3 staff
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Elite peer group to learn from
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Coaching and mentoring from elite entrepreneurs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Food and accommodation in Islamabad with Personal Chef and Chauffeur
                  </li>
                </ul>
                
                <button 
                  onClick={handleEnrollNow}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                </button>
              </div>

              {/* MBC GLOBAL */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow transform scale-105">
                <h3 className="text-2xl font-bold mb-4">MBC GLOBAL</h3>
                <div className="text-4xl font-bold mb-6">
                  $400,000
                </div>
                <p className="text-blue-100 mb-6">1 Year</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in MBC Core +
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3 Fulltime staff in London
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    MBC degrees for you London based staff
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All food and accommodation in London for you
                  </li>
                </ul>
                
                <button 
                  onClick={handleEnrollNow}
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Enroll Now
                </button>
              </div>

              {/* MBC ULTRA */}
              <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">MBC ULTRA</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $1,000,000
                </div>
                <p className="text-gray-600 mb-6">1 Year</p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in MBC Global +
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3 fulltime staff in San Francisco (Silicon Valley)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Food/Accommodation for entire year at Silicon Valley
                  </li>
                </ul>
                
                <button 
                  onClick={handleEnrollNow}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <MBCFAQSection />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Social Networks</h3>
                <div className="flex space-x-4">
                  <span>Facebook-f</span>
                  <span>Whatsapp</span>
                  <span>Instagram</span>
                  <span>Linkedin</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p>imagine@aartec.com</p>
                <p>+447733003930</p>
                <p>205 Lavender Hill,</p>
                <p>London SW11 5TB,</p>
                <p>United Kingdom</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Browse</h3>
                <p>Masters of Business Creation</p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>&copy; aartec.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
