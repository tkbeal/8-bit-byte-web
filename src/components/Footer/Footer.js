import React from "react";
import "./footer.css";
// Icons
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ margin: "auto" }}>
        <div className="footer-social-links">
          <a
            href="https://www.facebook.com/realkbeal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FA icon={faFacebookF} size="1x" />
          </a>
          <a
            href="https://twitter.com/realkbeal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FA icon={faTwitter} size="1x" />
          </a>
          <a
            href="https://www.instagram.com/realkbeal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FA icon={faInstagram} size="1x" />
          </a>
        </div>
        <p style={{ marginTop: 20, color: "whitesmoke", fontFamily: "Oswald" }}>
          &copy; Copyright 2020 Kevin Beal
        </p>
      </div>
    </div>
  );
};

export default Footer;
