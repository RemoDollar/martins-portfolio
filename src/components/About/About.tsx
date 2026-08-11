import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import styles from "./About.module.scss";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "MongoDB",
  "SCSS",
  "Git",
  "WordPress",
];

const stats = [
  {
    number: "3+",
    label: "Years Experience",
    icon: <FaBriefcase />,
  },
  {
    number: "15+",
    label: "Projects Completed",
    icon: <FaLaptopCode />,
  },
  {
    number: "10+",
    label: "Technologies",
    icon: <FaCode />,
  },
  {
    number: "100%",
    label: "Commitment",
    icon: <FaGraduationCap />,
  },
];

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      {/* Background Effects */}

      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.container}>
        {/* Section Header */}

        <div className={styles.heading}>
          <span className={styles.subtitle}>GET TO KNOW ME</span>

          <h2 className={styles.title}>
            About <span>Me</span>
          </h2>

          <p className={styles.titleDescription}>
            Passionate Frontend Engineer dedicated to crafting beautiful,
            responsive and scalable web experiences that solve real-world
            problems.
          </p>
        </div>

        <div className={styles.content}>
          {/* LEFT */}

          <div className={styles.left}>
            <div className={styles.glassCard}>
              <span className={styles.smallTitle}>WHO I AM</span>

              <div className={styles.aboutTags}>
                <span>Frontend Developer</span>

                <span className={styles.dot}>•</span>

                <span>Problem Solver</span>

                <span className={styles.dot}>•</span>

                <span>Continuous Learner</span>
              </div>
              <p>
                I build modern, fast and scalable web applications using React,
                TypeScript and today's frontend technologies. My goal is to
                create digital products that combine clean architecture with
                exceptional user experiences.
              </p>

              <p>
                My background in Physics strengthened my analytical thinking,
                allowing me to approach software engineering with precision,
                creativity and a problem-solving mindset.
              </p>

              <a href="#contact" className={styles.contactButton}>
                Let's Work Together
                <FaArrowRight />
              </a>
            </div>

            {/* Personal Info */}

            <div className={styles.infoCard}>
              <h4>Professional Information</h4>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt />
                  <div>
                    <span>Location</span>
                    <strong>Nigeria</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaEnvelope />
                  <div>
                    <span>Email</span>
                    <strong>judem0144@gmail.com</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaGraduationCap />
                  <div>
                    <span>Education</span>
                    <strong>BSc Physics</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaBriefcase />
                  <div>
                    <span>Availability</span>
                    <strong>Open for Full-Time & Remote Opportunities</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className={styles.right}>
            <div className={styles.statsGrid}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <div className={styles.icon}>{item.icon}</div>

                  <h3>{item.number}</h3>

                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className={styles.techCard}>
              <h3>Technologies I Work With</h3>

              <div className={styles.techGrid}>
                {technologies.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
