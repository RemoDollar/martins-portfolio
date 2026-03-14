import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };
  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          Martins<span>.</span>
        </a>
        <ul className={styles.desktopLinks}>
          <li>
            <a href="#home" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.link}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.link}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
        <a href="#contact" className={styles.hireBtn}>
          Hire Me
        </a>
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={isMenuOpen ? styles.bar1Active : styles.bar1}></span>
          <span className={isMenuOpen ? styles.bar2Active : styles.bar2}></span>
          <span className={isMenuOpen ? styles.bar3Active : styles.bar3}></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" className={styles.mobileLink} onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className={styles.mobileLink} onClick={closeMenu}>
            About
          </a>
          <a href="#projects" className={styles.mobileLink} onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" className={styles.mobileLink} onClick={closeMenu}>
            Skills
          </a>
          <a href="#contact" className={styles.mobileLink} onClick={closeMenu}>
            Contact
          </a>
          <a href="#contact" className={styles.mobileHire} onClick={closeMenu}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
