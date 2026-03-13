import React from "react"
import styles from "./About.module.scss"

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          About <span>Me</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.textSide}>
            <p className={styles.bio}>
              I am a passionate Frontend Developer based in Nigeria with 2 years
              of hands-on experience building modern and responsive web
              applications. I started my journey studying Physics at the Federal
              University of Lafia, where I developed strong problem-solving and
              analytical skills that I now apply to writing clean, efficient code.
            </p>
            <p className={styles.bio}>
              I specialize in building websites and web applications using
              JavaScript, React, TypeScript, and SCSS. I love turning complex
              problems into simple, beautiful and intuitive designs. When I am
              not coding, I am constantly learning new technologies to stay
              current in this fast-moving industry.
            </p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name</span>
                <span className={styles.infoValue}>Martins Madubuegwu</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>judem0144@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Nigeria</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Experience</span>
                <span className={styles.infoValue}>2 Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Availability</span>
                <span className={styles.infoAvailable}>Open to Work</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Education</span>
                <span className={styles.infoValue}>BSc Physics</span>
              </div>
            </div>
            <a href="#contact" className={styles.contactBtn}>
              Get In Touch
            </a>
          </div>
          <div className={styles.statsSide}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Dedication</span>
              </div>
            </div>
            <div className={styles.techStack}>
              <h3 className={styles.techTitle}>Technologies I Work With</h3>
              <div className={styles.techGrid}>
                {["JavaScript","TypeScript","React","HTML5","CSS3","SCSS","Tailwind CSS","Git","WordPress"].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
