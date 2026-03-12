import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
interface NavLink {
  id: number;
  label: string;
  href: string;
}
const navLinks: NavLink[] = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Skills", href: "#skills" },
  { id: 5, label: "Contact", href: "#contact" },
];
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = (): void => {
    setIsMenuOpen(false);
  };
  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Martins<span>.</span>
        </a>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={styles.hireBtn} onClick={handleLinkClick}>
          Hire Me
        </a>
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.mobileHireBtn}
              onClick={handleLinkClick}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
