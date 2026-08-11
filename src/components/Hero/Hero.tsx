import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import profileImg from "../../assets/profile.jpg";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.background}>
        <span className={styles.blobOne}></span>
        <span className={styles.blobTwo}></span>
        <span className={styles.grid}></span>
      </div>

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Available for Full-Time & Remote Roles
          </div>

          <p className={styles.intro}>HELLO, I'M</p>

          <h1 className={styles.heading}>
            Martins
            <br />
            Madubuegwu
          </h1>

          <div className={styles.typewriter}>
            <span>I build </span>

            <TypeAnimation
              sequence={[
                "React Applications",
                2000,
                "Frontend Experiences",
                2000,
                "Modern Websites",
                2000,
                "Scalable Interfaces",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className={styles.description}>
            Frontend Developer passionate about building beautiful, accessible
            and high-performance web applications using React, TypeScript and
            modern frontend technologies.
          </p>

          {/* CTA Buttons */}

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="/Martins_Madubuegwu_Resume_QR.pdf"
              download="Martins_Madubuegwu_Resume_QR.pdf"
              className={styles.secondaryBtn}
              aria-label="Download Martins Madubuegwu Resume"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Tech Stack */}

          <div className={styles.techStack}>
            <span>React</span>
            <span>TypeScript</span>
            <span>SCSS</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          {/* Statistics */}

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Projects</p>
            </div>

            <div className={styles.statCard}>
              <h3>3+</h3>
              <span>Years Building Projects</span>
            </div>

            <div className={styles.statCard}>
              <h3>100%</h3>
              <p>Responsive</p>
            </div>
          </div>

          {/* Socials */}

          <div className={styles.socials}>
            <a
              href="https://github.com/RemoDollar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/martins-jude-579b06338"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:judem0144@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className={styles.imageArea}>
          <div className={styles.ring}></div>
          <div className={styles.ring2}></div>
          <div className={styles.ring3}></div>

          <div className={styles.profile}>
            <img src={profileImg} alt="Martins Madubuegwu" />
          </div>

          {/* Floating Glass Card */}

          <div className={styles.glassCard}>
            <div className={styles.glassHeader}>
              <span className={styles.liveDot}></span>
              Currently Building
            </div>

            <div className={styles.glassBody}>
              <h4>AI Task Manager</h4>

              <p>React • TypeScript • Node.js • MongoDB</p>

              <div className={styles.progress}>
                <div className={styles.progressBar}></div>
              </div>

              <small>Actively improving portfolio projects</small>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className={styles.scroll}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>

        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
