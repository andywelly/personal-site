'use client';

import { useEffect } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { School, Work, VolunteerActivism, CardMembership } from '@mui/icons-material';
import Image from 'next/image';

export default function AboutPage() {
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

  return (
    <div>
      {/* Header Section */}
      <div className="w-full fade-in bg-[rgba(5,101,112,0.50)]">
        <section className="max-w-[800px] mx-auto fade-left title-set flex-col md:flex-row py-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-left">About Me</h1>
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-xl">
                A timeline of my academic, professional, and volunteer experiences.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
              <Image
                src="/me.jpeg" // Path to your image in the public folder
                alt="Andwele Ancheta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Timeline Section */}
      <div className="max-w-[1200px] mx-auto">
        <Timeline position="alternate">
          {/* Bachelor's Degree */}
          <TimelineItem className='fade-right'>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-4">
                <h2 className="text-2xl font-bold">Bachelor of Science in Computing and Software Systems</h2>
                <p className="text-gray-400 font-bold py-2">University of Melbourne | Feb 2022 - Nov 2024</p>
                <p className="text-white text-wrap">
                  Graduated with Division A Second Class Honours. <br/>
                  Built a solid foundation in software engineering methodologies,
                  problem-solving, and critical thinking through hands-on projects and collaborative coursework
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Grocery Fill Lead at Coles Group */}
          <TimelineItem className='fade-left'>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <Work />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-4">
                <h2 className="text-2xl font-bold">Grocery Fill Lead</h2>
                <p className="text-gray-400 font-bold py-2">Coles Group | Jan 2022 – Present</p>
                <p>
                  Developed strong leadership, problem-solving, and organisational skills through coordinating team activities, 
                  managing stock levels, and communicating with suppliers.
                  Successfully trained new employees and resolved logistical issues, contributing to improved operational efficiency and reduced errors.
                </p>

              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Distribution Coordinator at Project Juan Charity */}
          <TimelineItem className='fade-right'>
            <TimelineSeparator>
              <TimelineDot color="success">
                <VolunteerActivism />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-4">
                <h2 className="text-2xl font-bold">Distribution Coordinator</h2>
                <p className="text-gray-400 font-bold py-2">Project Juan Charity | Jun 2021 – Present</p>
                <p>
                Made a significant community impact by coordinating disaster relief for over 180 families, 
                organising the distribution of vital resources, and raising over $5,000 to support local projects.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Software Development Volunteer at Langwarrin Community Centre */}
          <TimelineItem className='fade-left'>
            <TimelineSeparator>
              <TimelineDot color="info">
                <VolunteerActivism />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-4">
                <h2 className="text-2xl font-bold">Software Development Client Work</h2>
                <p className="text-gray-400 font-bold py-2">Langwarrin Community Centre | Jul 2024 – Nov 2024</p>
                <p>
                    Led a team of 5 to successfully deliver a user-friendly full-stack web application (ReactJS, CSS, PostgreSQL, Strapi) 
                    to clients.  Focused on seamless data integration (RESTful APIs) and efficient deployments (CI/CD pipelines), 
                    while promoting effective teamwork using Git, Jira, and Confluence.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Certifications */}
          <TimelineItem className='fade-right'>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <CardMembership />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-4">
                <h2 className="text-2xl font-bold">Certifications and Awards</h2>
                <ul className='py-2'>
                    <li className='py-1'>AWS Certified Cloud Practitioner (Issued Feb 2024)</li>
                    <li className='py-1'>Google Foundations of Cybersecurity  (Issued Jan 2025)</li>
                    <li className='py-1'>Pursuing ISC2 Certified in Cybersecurity (CC)  </li>
                    <li className='py-1'>INFO30006 Exemplar for Research on AI-Generated Content</li>
                    <li className='py-1'>Outstanding Leadership and Team Collaboration Award, Coles Group</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}