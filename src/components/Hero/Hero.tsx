import React from "react";
import profileImg from "../../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi there, I am</p>
          <h1 className={styles.name}>Martins Madubuegwu</h1>
          <div className={styles.titleWrapper}>
            <span className={styles.titlePrefix}>I am a </span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "JavaScript Developer",
                2000,
                "UI Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className={styles.animatedTitle}
              repeat={Infinity}
            />
          </div>
          <p className={styles.description}>
            I build responsive, modern and user-friendly web applications.
            Passionate about clean code, great user experiences and continuously
            learning new technologies.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Hire Me
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/RemoDollar"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/martins-jude-579b06338"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a href="mailto:judem0144@gmail.com" className={styles.socialLink}>
              Email
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <img
              src={profileImg}
              alt="Martins Madubuegwu"
              className={styles.profileImg}
            />
          </div>
          <div className={styles.ring}></div>
          <div className={styles.ring2}></div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
