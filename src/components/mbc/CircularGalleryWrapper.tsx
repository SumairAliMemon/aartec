'use client';

interface Client {
  name: string;
  description: string;
  image: string;
  website: string;
}

interface CircularGalleryWrapperProps {
  clients: Client[];
}

export default function CircularGalleryWrapper({ clients }: CircularGalleryWrapperProps) {
  // Duplicate clients for infinite loop effect
  const infiniteClients = [...clients, ...clients, ...clients];

  const handleVisitWebsite = (website: string) => {
    window.open(website, '_blank');
  };

  return (
    <div className="w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg relative">
      {/* Infinite scrolling container */}
      <div className="flex animate-infinite-scroll hover:pause-animation items-center h-full">
        {infiniteClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="group flex-shrink-0 mx-6 relative"
          >
            {/* Large Card - Shows name by default, details on hover */}
            <div className="w-80 h-40 bg-white rounded-xl shadow-lg border-2 border-blue-100 cursor-pointer transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-300 overflow-hidden relative">
              
              {/* Company Name - Always Visible (Background) */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-10">
                <h3 className="text-white font-bold text-xl text-center px-4">{client.name}</h3>
              </div>
              
              {/* Company Details - Show on Hover (Foreground) */}
              <div className="absolute inset-0 p-4 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{client.name}</h3>
                  <p className="text-gray-600 text-xs leading-tight overflow-hidden"
                     style={{
                       display: '-webkit-box',
                       WebkitLineClamp: 4,
                       WebkitBoxOrient: 'vertical',
                       maxHeight: '3.5rem'
                     }}>
                    {client.description}
                  </p>
                </div>
                <button
                  onClick={() => handleVisitWebsite(client.website)}
                  className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 text-xs w-full flex-shrink-0"
                >
                  Visit Website →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Fade effects on sides */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-50 to-transparent pointer-events-none z-20"></div>
    </div>
  );
}
