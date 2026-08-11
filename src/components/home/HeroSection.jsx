import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Industrial Automation',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Smart Sensors',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'IoT Connectivity',
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToSlide = useCallback((index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    scrollToSlide(nextIndex);
  }, [currentIndex, scrollToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    scrollToSlide(prevIndex);
  }, [currentIndex, scrollToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / containerWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl group shadow-sm bg-slate-100">
      {/* Scrollable Track */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-48 md:h-80 lg:h-96 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full snap-center shrink-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Desktop Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 bg-white/80 backdrop-blur hover:bg-white text-slate-800 rounded-full items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6 pr-0.5" />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 bg-white/80 backdrop-blur hover:bg-white text-slate-800 rounded-full items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 pl-0.5" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? 'w-6 h-2 bg-lexip-600' 
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
