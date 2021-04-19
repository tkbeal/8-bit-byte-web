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
import { Colors } from "../../utils/Colors";

const DownloadButton = () => (
  <a href={resume} download="TKB_Resume.pdf" style={styles.downloadButton}>
    <h4 style={styles.downloadText}>
      <FA icon={faFileDownload} size="1x" />
      &nbsp;&nbsp;VIEW RESUME
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
    <div style={styles.container}>
      <h1>kevin beal</h1>
      <h2 style={styles.jobTitle}>
        swe @ <span style={styles.highlighted}>snackpass</span>
      </h2>
      <SocialLinks />
      <DownloadButton />
    </div>
  );
};

export default HomePage;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  jobTitle: {
    marginBottom: 20,
    fontWeight: 300,
  },
  highlighted: {
    color: Colors.snackpass,
  },
  downloadText: {
    color: Colors.sesame,
  },
  downloadButton: {
    marginTop: 20,
    width: 110,
    backgroundColor: "#00ceff",
    padding: "8px 12px",
    borderRadius: 8,
  },
};
