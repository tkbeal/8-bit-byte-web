import React from "react";
import snackpassLogo from "../../assets/images/snackpass-logo.png";
import marylandLogo from "../../assets/images/maryland-logo.gif";
import targetLogo from "../../assets/images/target-logo.png";

const LOGO_SIZE = 75;

const About = () => {
  return (
    <div style={styles.aboutContainer} id="about">
      <div style={styles.innerContainer}>
        <h2 style={{ marginBottom: 20 }}>about me</h2>
        <p style={styles.descriptionText}>
          I graduated in 2020 from the University of Maryland with a BS in
          Computer Science. My technical interests include web and mobile full
          stack work and basically everything JS related.
        </p>
      </div>
      <div style={styles.rowContainer}>
        <div>
          <h2 style={{ marginBottom: 20 }}>places i've worked</h2>
          <div style={styles.placesRow}>
            <img src={snackpassLogo} style={styles.logo} />
            <div style={{ textAlign: "start" }}>
              <h3>snackpass</h3>
              <p>software engineer, august 2020 - current</p>
            </div>
          </div>
          <div style={styles.placesRow}>
            <img src={marylandLogo} style={styles.logo} />
            <div style={{ textAlign: "start" }}>
              <h3>university of maryland</h3>
              <p>teaching assistant, august 2019 - july 2020</p>
            </div>
          </div>
          <div style={styles.placesRow}>
            <img src={targetLogo} style={styles.logo} />
            <div style={{ textAlign: "start" }}>
              <h3>target</h3>
              <p>software engineering intern, summer 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const styles = {
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerContainer: {
    maxWidth: 600,
    textAlign: "center",
  },
  rowContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 750,
    textAlign: "center",
    marginTop: 100,
  },
  descriptionText: {
    lineHeight: 1.8,
    fontSize: "1.1rem",
  },
  placesRow: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 500,
    marginTop: 20,
    gap: 24,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: 50,
  },
};
