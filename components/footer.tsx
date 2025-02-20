"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  // Use useEffect to set the year on the client side
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="social-links flex justify-center gap-4 relative z-10">
        <a href="https://github.com/andywelly" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/andwele-ancheta/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="mailto:andwele.ancheta@outlook.com">
          <EmailIcon fontSize="large" />
        </a>
      </div>
      <p className="flex justify-center gap-4 py-5 relative z-10">
        &copy; {year} Andwele Ancheta. All rights reserved.
      </p>
    </footer>
  );
}