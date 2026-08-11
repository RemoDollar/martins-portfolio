import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <main className={styles.notFound}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        <img
          src={profile}
          alt="Portrait of Martins Madubuegwu"
          className={styles.profile}
        />

        <h1 className={styles.code}>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you're looking for doesn't exist, may have been moved, or the
          URL may be incorrect.
        </p>

        <Link to="/" className={styles.button} aria-label="Return to homepage">
          <FaArrowLeft aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
