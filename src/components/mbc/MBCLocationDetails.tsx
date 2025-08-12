export default function MBCLocationDetails() {
  const locations = [
    {
      city: "New York, USA",
      venue: "Manhattan Business District",
      features: ["Wall Street Access", "Tech Hub Proximity", "Global Financial Center"],
      image: "🏙️",
      description: "Heart of global business and finance"
    },
    {
      city: "London, UK", 
      venue: "Canary Wharf Business Center",
      features: ["European Market Access", "Fintech Innovation Hub", "International Business Center"],
      image: "🌍",
      description: "Gateway to European markets"
    },
    {
      city: "Singapore",
      venue: "Marina Bay Business District", 
      features: ["Asian Market Gateway", "Innovation District", "Strategic Location"],
      image: "🏢",
      description: "Bridge to Asian opportunities"
    },
    {
      city: "Dubai, UAE",
      venue: "DIFC Innovation Hub",
      features: ["Middle East Hub", "Tax-Free Zone", "Global Business Center"],
      image: "🏗️", 
      description: "Crossroads of global commerce"
    }
  ];

  const facilities = [
    "State-of-the-art conference facilities",
    "Dedicated co-working spaces", 
    "Private meeting rooms",
    "High-speed internet and AV equipment",
    "Networking lounges",
    "Executive dining areas"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class facilities in major business capitals, designed for serious entrepreneurs
          </p>
        </div>
        
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 h-full">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{location.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{location.city}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{location.venue}</p>
                  <p className="text-gray-600 text-sm mb-4">{location.description}</p>
                </div>
                
                <div className="space-y-2">
                  {location.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Facilities Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Facilities</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every MBC location features world-class amenities designed to foster collaboration, 
                learning, and business development in a professional environment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h4 className="text-2xl font-bold mb-4">Experience Global Excellence</h4>
                <p className="text-blue-100 mb-6">
                  Train in the world's business capitals and build your global network from day one.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium">Next Cohort Starting Soon</p>
                  <p className="text-xs text-blue-200 mt-1">Limited seats available in each location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
