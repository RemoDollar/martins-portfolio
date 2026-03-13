import React, { useState } from "react";
import styles from "./Skills.module.scss";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "SCSS", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "WordPress", level: 75, category: "Tools" },
  { name: "Vite", level: 70, category: "Tools" },
  { name: "Responsive Design", level: 90, category: "Frontend" },
  { name: "SEO", level: 70, category: "Tools" },
];

const categories = ["All", "Frontend", "Tools"];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          My <span>Skills</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Technologies and tools I use to bring ideas to life.
        </p>
        <div className={styles.filterButtons}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className={styles.skillCategory}>{skill.category}</span>
            </div>
          ))}
        </div>
        <div className={styles.extraSection}>
          <h3 className={styles.extraTitle}>What I Bring To The Table</h3>
          <div className={styles.extraGrid}>
            <div className={styles.extraCard}>
              <span className={styles.extraIcon}>⚡</span>
              <h4>Fast Learner</h4>
              <p>
                I pick up new technologies quickly and apply them effectively in
                real projects.
              </p>
            </div>
            <div className={styles.extraCard}>
              <span className={styles.extraIcon}>📱</span>
              <h4>Mobile First</h4>
              <p>
                I build every project with mobile responsiveness as the top
                priority.
              </p>
            </div>
            <div className={styles.extraCard}>
              <span className={styles.extraIcon}>💫</span>
              <h4>Clean Code</h4>
              <p>
                I write readable, well-structured and maintainable code on every
                project.
              </p>
            </div>
            <div className={styles.extraCard}>
              <span className={styles.extraIcon}>🎯</span>
              <h4>Detail Oriented</h4>
              <p>
                I pay close attention to UI details to deliver pixel-perfect
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
