'use client';

import { useState, useRef, useEffect } from 'react';

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
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate clients for infinite loop effect
  const infiniteClients = [...clients, ...clients, ...clients, ...clients];

  const handleVisitWebsite = (website: string) => {
    window.open(website, '_blank');
  };

  // Manual scroll controls
  const scrollLeftManual = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRightManual = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Touch and mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000); // Resume animation after 1 second
  };

  // Handle card interactions for mobile
  const handleCardClick = (index: number, website: string, e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) return;
    
    // On mobile, first tap shows details, second tap visits website
    if (showDetails === index) {
      handleVisitWebsite(website);
    } else {
      setShowDetails(index);
      // Hide details after 3 seconds
      setTimeout(() => setShowDetails(null), 3000);
    }
  };

  const handleCardHover = (index: number) => {
    if (!isDragging && window.innerWidth > 768) { // Only on desktop
      setShowDetails(index);
    }
  };

  const handleCardLeave = () => {
    if (window.innerWidth > 768) { // Only on desktop
      setShowDetails(null);
    }
  };

  return (
    <div className="w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg relative">
      {/* Control buttons */}
      <button
        onClick={scrollLeftManual}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Scroll left"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollRightManual}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Scroll right"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pause/Play button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-4 right-4 z-30 bg-white/90 hover:bg-white text-blue-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label={isPaused ? 'Resume animation' : 'Pause animation'}
      >
        {isPaused ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        )}
      </button>

      {/* Infinite scrolling container */}
      <div 
        ref={scrollContainerRef}
        className={`flex items-center h-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none ${
          !isPaused && !isDragging ? 'animate-infinite-scroll' : ''
        }`}
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {infiniteClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="group flex-shrink-0 mx-6 relative"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            {/* Large Card - Shows name by default, details on hover/tap */}
            <div 
              className="w-80 h-40 bg-white rounded-xl shadow-lg border-2 border-blue-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-300 overflow-hidden relative"
              onClick={(e) => handleCardClick(index, client.website, e)}
            >
              
              {/* Company Name - Always Visible (Background) */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transition-opacity duration-300 ${
                showDetails === index ? 'opacity-10' : 'opacity-100'
              }`}>
                <h3 className="text-white font-bold text-xl text-center px-4">{client.name}</h3>
              </div>
              
              {/* Company Details - Show on Hover/Tap (Foreground) */}
              <div className={`absolute inset-0 p-4 bg-white transition-all duration-300 flex flex-col justify-between ${
                showDetails === index ? 'opacity-100' : 'opacity-0'
              }`}>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVisitWebsite(client.website);
                  }}
                  className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 text-xs w-full flex-shrink-0"
                >
                  Visit Website →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Instructions for mobile users */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 md:hidden">
        <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          Tap cards or drag to browse • Tap twice to visit
        </div>
      </div>
      
      {/* Fade effects on sides */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-50 to-transparent pointer-events-none z-20"></div>
    </div>
  );
}
