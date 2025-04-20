// components/imageCarousel.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface TimelineImage {
  src: string;
  alt: string;
  title: string;
}

const timelineImages: TimelineImage[] = [
  { src: "/graduation.jpeg", alt: "University of Melbourne", title: "Education" },
  { src: "/langwarrin_timeline.png", alt: "Langwarrin Community Centre", title: "Software Development" },
  { src: "/coles.jpeg", alt: "Coles Group", title: "Work Experience" },
  { src: "/project_juan.jpeg", alt: "Project Juan Charity", title: "Volunteer Work" },
  { src: "/aws.png", alt: "Certifications", title: "Certifications" },
  { src: "/basketball.jpeg", alt: "Basketball Team", title: "Hobbies" }
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === timelineImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? timelineImages.length - 1 : prev - 1));
  };

  return (
    <div className="md:hidden mx-auto my-6 px-4 fade-in">  
      <h3 className="text-center text-xl font-semibold mb-3">Journey Images</h3>
      <div className="relative">
        <div className="w-full aspect-square relative rounded-lg overflow-hidden">
          <Image 
            src={timelineImages[currentSlide].src}
            alt={timelineImages[currentSlide].alt}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
            <p className="font-medium">{timelineImages[currentSlide].title}</p>
          </div>
        </div>
        
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <ArrowBackIosIcon fontSize="small" />
        </button>
        
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </button>
        
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1.5 mt-2">
          {timelineImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}