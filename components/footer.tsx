import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/andywelly" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/andwele-ancheta/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:andwele.ancheta@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
