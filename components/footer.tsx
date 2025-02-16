import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links flex justify-center gap-4">
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
      <p className="flex justify-center gap-4 py-5">&copy; {new Date().getFullYear()} Andwele Ancheta. All rights reserved.</p>
    </footer>
  );
}