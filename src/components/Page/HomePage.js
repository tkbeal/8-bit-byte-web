import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import "./page.css";

// Resume PDF
import resume from "../../assets/resume.pdf";

// Icons
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const DownloadButton = () => (
  <a href={resume} download="TKB_Resume.pdf" className="download">
    <h4>
      <FA icon={faFileDownload} size="1x" />
      &nbsp;&nbsp;Download Resume
    </h4>
    <div className="download-line"></div>
  </a>
);

const SocialLinks = () => (
  <div className="social-links">
    <a
      href="https://www.facebook.com/realkbeal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faFacebookF} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/kevin-beal/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faLinkedinIn} size="2x" />
    </a>
    <a
      href="https://twitter.com/realkbeal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faTwitter} size="2x" />
    </a>
    <a
      href="https://www.instagram.com/realkbeal/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faInstagram} size="2x" />
    </a>
  </div>
);

const HomePage = () => {
  return (
    <div className="hero-container">
      <h1>kevin beal</h1>
      <h2 style={styles.jobTitle}>swe @snackpass</h2>
      <SocialLinks />
      <DownloadButton />
    </div>
  );
};

export default HomePage;

const styles = {
  jobTitle: {
    marginBottom: 20,
    fontWeight: 300,
  },
};
