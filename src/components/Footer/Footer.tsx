import React from "react"
import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a href="#home" className={styles.logo}>
            Martins<span>.</span>
          </a>
          <div className={styles.links}>
            <a href="#home" className={styles.link}>Home</a>
            <a href="#about" className={styles.link}>About</a>
            <a href="#projects" className={styles.link}>Projects</a>
            <a href="#skills" className={styles.link}>Skills</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/RemoDollar" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              GitHub
            </a>
            <a href="mailto:judem0144@gmail.com" className={styles.socialBtn}>
              Email
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Martins Madubuegwu. Built with React, TypeScript and SCSS.
          </p>
          <p className={styles.credit}>
            Designed and developed with dedication
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
