'use client';

import { useEffect, useState } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { School, Work, VolunteerActivism, CardMembership, Computer, SportsBasketball } from '@mui/icons-material';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MailPopup from './mailpopup';
import './imageflip.css';

export default function AboutPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const timelineImages = [
    { src: "/graduation.jpeg", alt: "University of Melbourne", title: "Education" },
    { src: "/langwarrin_timeline.png", alt: "Langwarrin Community Centre", title: "Software Development" },
    { src: "/coles.jpeg", alt: "Coles Group", title: "Work Experience" },
    { src: "/project_juan.jpeg", alt: "Project Juan Charity", title: "Volunteer Work" },
    { src: "/aws.png", alt: "Certifications", title: "Certifications" },
    { src: "/basketball.jpeg", alt: "Basketball Team", title: "Hobbies" }
  ];
  
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
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === timelineImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? timelineImages.length - 1 : prev - 1));
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
      <div className="md:hidden mx-auto my-6 px-4 fade-in">  
        <h3 className="text-center text-xl font-semibold mb-3">Journey Images</h3>
        <div className="relative">
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
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

      {/* Timeline Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-12 md:mt-0">
        <Timeline position="alternate">
          {/* Bachelor's Degree */}
          <TimelineItem className='fade-right py-3 sm:py-5'>
            <TimelineOppositeContent className="hidden md:block">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/graduation.jpeg" 
                  alt="University of Melbourne"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Bachelor of Science in Computing and Software Systems</h2>
                <p className="text-gray-400 font-bold py-1 sm:py-2 text-sm sm:text-base">University of Melbourne | Feb 2022 - Nov 2024</p>
                <p className="text-white text-wrap text-sm sm:text-base">
                  Graduated with Division A Second Class Honours. <br/>
                  Built a solid foundation in software engineering methodologies,
                  problem-solving, and critical thinking through hands-on projects and collaborative coursework
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Software Development Volunteer at Langwarrin Community Centre */}
          <TimelineItem className='fade-left py-3 sm:py-5'>
            <TimelineOppositeContent className="hidden md:block">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/langwarrin_timeline.png"
                  alt="Langwarrin Community Centre"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="info">
                <Computer/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Software Development Client Work</h2>
                <p className="text-gray-400 font-bold py-1 sm:py-2 text-sm sm:text-base">Langwarrin Community Centre | Jul 2024 – Nov 2024</p>
                <p className="text-sm sm:text-base">
                  Led a team of 5 to successfully deliver a user-friendly full-stack web application (ReactJS, CSS, PostgreSQL, Strapi) 
                  to clients. Focused on seamless data integration (RESTful APIs) and efficient deployments (CI/CD pipelines), 
                  while promoting effective teamwork using Git, Jira, and Confluence.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Grocery Fill Lead at Coles Group */}
          <TimelineItem className='fade-right py-3 sm:py-5'>
            <TimelineOppositeContent className="hidden md:block">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/coles.jpeg" 
                  alt="Coles Group"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <Work />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Grocery Fill Lead</h2>
                <p className="text-gray-400 font-bold py-1 sm:py-2 text-sm sm:text-base">Coles Group | Jan 2022 – Present</p>
                <p className="text-sm sm:text-base">
                  Developed strong leadership, problem-solving, and organisational skills through coordinating team activities, 
                  managing stock levels, and communicating with suppliers.
                  Successfully trained new employees and resolved logistical issues, contributing to improved operational efficiency and reduced errors.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Distribution Coordinator at Project Juan Charity */}
          <TimelineItem className='fade-left py-3 sm:py-5'>
            <TimelineOppositeContent className="hidden md:block">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/project_juan.jpeg" 
                  alt="Project Juan Charity"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success">
                <VolunteerActivism />
              </TimelineDot>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Distribution Coordinator</h2>
                <p className="text-gray-400 font-bold py-1 sm:py-2 text-sm sm:text-base">Project Juan Charity | Jun 2021 – Present</p>
                <p className="text-sm sm:text-base">
                Made a significant community impact by coordinating disaster relief for over 180 families, 
                organising the distribution of vital resources, and raising over $5,000 to support local projects.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Certifications */}
          <TimelineItem className='fade-right py-3 sm:py-5'>
            <TimelineOppositeContent className="hidden md:block">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/aws.png"
                  alt="Certifications"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <CardMembership />
              </TimelineDot>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Certifications and Awards</h2>
                <ul className='py-1 sm:py-2 text-sm sm:text-base'>
                  <li className='py-1'>AWS Certified Cloud Practitioner (Issued Feb 2024)</li>
                  <li className='py-1'>Google Foundations of Cybersecurity (Issued Jan 2025)</li>
                  <li className='py-1'>INFO30006 Exemplar for Research on AI-Generated Content</li>
                  <li className='py-1'>Outstanding Leadership and Team Collaboration Award, Coles Group</li>
                  <li className='py-1'>Pursuing ISC2 Certified in Cybersecurity (CC)</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Hobbies */}
          <TimelineItem className='fade-left py-3 sm:py-5'>
            <TimelineOppositeContent className="hidden md:block">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/basketball.jpeg"
                  alt="basketball team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <SportsBasketball />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-2 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Hobbies and Interests</h2>
                <ul className='py-1 sm:py-2 text-sm sm:text-base'>
                  <li className='py-1'>I play multiple sports, including basketball, tennis, swimming and rockclimbing</li>
                  <li className='py-1'>Music is one of my passions, I can play proficiently nearly a dozen instruments</li>
                  <li className='py-1'>I love cooking and exploring new foods</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}