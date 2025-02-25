"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MailPopup from './mailpopup';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
   const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
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
    <footer className="footer">
       <MailPopup
        isOpen={isEmailModalOpen}
        onClose={handleCloseModal}
        onEmailRedirect={handleEmailRedirect}
      />
      <div className="social-links flex justify-center gap-4 relative z-10">
        <a href="https://github.com/andywelly" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/andwele-ancheta/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a
            href="#"
            onClick={handleEmailClick}
            className="focus:outline-none"
            aria-label="Email"
        >
          <EmailIcon fontSize="large" />
        </a>  
      </div>
      <p className="flex justify-center gap-4 py-5 relative z-10">
        &copy; {year} Andwele Ancheta. All rights reserved.
      </p>
    </footer>
  );
}