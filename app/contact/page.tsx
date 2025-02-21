'use client';

import ContactForm from '@/components/contact';
import { useEffect } from 'react';


export default function ContactPage() {
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
    <div className='fade-in'>
      <h2 className="text-5xl font-bold text-center mb-4 pt-4">Contact Me</h2>
      <ContactForm />
    </div>
  );
}