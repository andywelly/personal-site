import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="social-links flex justify-center gap-4">
        <a href="https://github.com/andywelly" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/andwele-ancheta/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:andwele.ancheta@outlook.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="flex justify-center gap-4 py-5">&copy; {new Date().getFullYear()} Andwele Ancheta. All rights reserved.</p>
    </footer>
  );
};

