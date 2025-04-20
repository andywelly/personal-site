// app/about/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Timeline } from '@mui/lab';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MailPopup from './mailpopup';
import './imageflip.css';

// Import our new components
import ImageCarousel from './imageCarousel';
import TimelineEntry from './timelineItem';
import timelineData from '../data/timelineData';

export default function AboutPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.5,
    });

    const hiddenElements = document.querySelectorAll('.fade-left, .fade-right, .fade-in');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setIsEmailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEmailModalOpen(false);
  };

  const handleEmailRedirect = () => {
    window.location.href = 'mailto:andwele.ancheta@outlook.com';
  };
  
  return (
    <div>
      <MailPopup
        isOpen={isEmailModalOpen}
        onClose={handleCloseModal}
        onEmailRedirect={handleEmailRedirect}
      />
      {/* Header Section */}
      <div className="w-full fade-in bg-[rgba(5,101,112,0.50)] px-4 sm:px-6">
        <section className="max-w-[800px] mx-auto fade-in title-set flex flex-col md:flex-row py-8 md:py-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-left">About Me</h1>
              <div className='flex gap-4 mt-2 sm:mt-0'>
                <a href="https://github.com/andywelly" target="_blank" rel="noopener noreferrer" title='Open Github'>
                  <GitHubIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/andwele-ancheta/" target="_blank" rel="noopener noreferrer" title='Open LinkedIn'>
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  href="#"
                  onClick={handleEmailClick}
                  className="focus:outline-none"
                  aria-label="Email"
                  title='Open Email'
                >
                  <EmailIcon fontSize="large" />
                </a>
                <a href="/resume.pdf" title='View Resume'>
                  <AssignmentIndIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-lg sm:text-xl">
                A timeline of my academic, professional, and volunteer experiences.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="image-flip-container">
              <div className="image-flip-inner">
                {/* Front Side */}
                <div className="image-flip-front">
                  <Image
                    src="/me_front.jpeg" // Front image
                    alt="Front of Andwele Ancheta"
                    width={180}
                    height={180}
                    className="object-cover sm:w-[200px] sm:h-[200px]"
                  />
                </div>
                {/* Back Side */}
                <div className="image-flip-back">
                  <Image
                    src="/me.jpg" // Back image
                    alt="Back of Andwele Ancheta"
                    width={180}
                    height={180}
                    className="object-cover sm:w-[200px] sm:h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Image Carousel */}
      <ImageCarousel />

      {/* Timeline Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-12 md:mt-0">
        <Timeline position="alternate">
          {timelineData.map((entry, index) => (
            <TimelineEntry
              key={index}
              {...entry}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
}