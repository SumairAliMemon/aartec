"use client";

export default function BrandWhoItsForSection() {
  const targetAudience = [
    {
      title: "EXECUTIVES",
      subtitle: "Building a Personal Brand",
      color: "from-blue-600 to-blue-800",
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.99 2.99 0 0 0 17.05 7H16c-.8 0-1.54.32-2.08.84L12 9.76 10.08 7.84A2.99 2.99 0 0 0 8 7H6.95a2.99 2.99 0 0 0-2.91 1.37L1.5 16H4v6h3v-6h2v6h3v-6h2v6h6zm-12.5-7.5L10 8l-2.5 6.5z"/>
        </svg>
      ),
      description: "Senior leaders looking to establish authority and credibility in their industry through a polished digital presence"
    },
    {
      title: "FOUNDERS", 
      subtitle: "Getting Ready to Launch",
      color: "from-indigo-600 to-indigo-800",
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <circle cx="12" cy="12" r="3" fill="white" opacity="0.3"/>
        </svg>
      ),
      description: "Entrepreneurs ready to launch with a professional foundation that scales with their growing business"
    },
    {
      title: "COACHES",
      subtitle: "Coaches Who Want to Grow Online",
      color: "from-purple-600 to-purple-800",
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <path d="M18 8c0-.55-.45-1-1-1s-1 .45-1 1c0 .55.45 1 1 1s1-.45 1-1zm-2 2c-.55 0-1 .45-1 1v1c.55 0 1-.45 1-1s-.45-1-1-1z" opacity="0.7"/>
        </svg>
      ),
      description: "Professional coaches and consultants wanting to expand their reach and attract premium clients online"
    },
    {
      title: "HALF-FINISHED",
      subtitle: "Anyone tired of half-finished websites", 
      color: "from-cyan-600 to-cyan-800",
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
          <path d="M10 9h8v2h-8zm0 3h4v2h-4z"/>
          <path d="M12 12l3 3h-6l3-3z" opacity="0.5"/>
        </svg>
      ),
      description: "Business owners frustrated with incomplete projects who need a reliable partner to finally get it done right"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Who It's For</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Perfect for ambitious professionals ready to make their mark online
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {targetAudience.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-white border-2 border-gray-100 hover:border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden min-h-[320px] flex flex-col`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="mb-6 relative z-10 flex justify-center">
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex-grow flex flex-col text-center">
                <h3 className="text-blue-900 text-lg md:text-xl font-bold mb-2 tracking-wide">{item.title}</h3>
                <h4 className="text-gray-800 text-base md:text-lg font-semibold mb-4 leading-tight">{item.subtitle}</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">{item.description}</p>
                
                {/* Bottom indicator */}
                <div className="mt-6 pt-4">
                  <div className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mx-auto group-hover:w-16 transition-all duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-4">
            Sound like you? Let's build something amazing together.
          </p>
          <div className="inline-flex items-center space-x-2 text-purple-600 font-semibold">
            <span>Scroll down to see what you get</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
