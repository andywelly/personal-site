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
      <ContactForm />
    </div>
  );
}