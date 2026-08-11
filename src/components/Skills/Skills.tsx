import React, { useState } from "react";
import styles from "./Skills.module.scss";

interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Tools";
}

const skills: Skill[] = [
  {
    name: "HTML5",
    level: 90,
    category: "Frontend",
  },
  {
    name: "CSS3",
    level: 90,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 95,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Frontend",
  },
  {
    name: "React",
    level: 95,
    category: "Frontend",
  },
  {
    name: "SCSS",
    level: 98,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frontend",
  },
  {
    name: "Git",
    level: 90,
    category: "Tools",
  },
  {
    name: "WordPress",
    level: 95,
    category: "Tools",
  },
  {
    name: "Vite",
    level: 90,
    category: "Tools",
  },
  {
    name: "Responsive Design",
    level: 90,
    category: "Frontend",
  },
  {
    name: "SEO",
    level: 90,
    category: "Tools",
  },
];

const categories = ["All", "Frontend", "Tools"] as const;

type Category = (typeof categories)[number];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      className={styles.skills}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>MY EXPERTISE</span>

          <h2 id="skills-title" className={styles.sectionTitle}>
            My <span>Skills</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ===================================================== */}

        <div
          className={styles.filterButtons}
          role="group"
          aria-label="Filter skills by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                className={`${styles.filterBtn} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* =====================================================
            SKILLS GRID
        ===================================================== */}

        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill) => (
            <article key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillName}>{skill.name}</h3>

                <span
                  className={styles.skillPercent}
                  aria-label={`${skill.level} percent experience`}
                >
                  {skill.level}%
                </span>
              </div>

              <div
                className={styles.progressBar}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={1}
                aria-valuemax={100}
                aria-label={`${skill.name} experience level`}
              >
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>

              <span className={styles.skillCategory}>{skill.category}</span>
            </article>
          ))}
        </div>

        {/* =====================================================
            WHAT I BRING TO THE TABLE
        ===================================================== */}

        <section
          className={styles.extraSection}
          aria-labelledby="strengths-title"
        >
          <div className={styles.extraHeading}>
            <span className={styles.sectionEyebrow}>HOW I WORK</span>

            <h3 id="strengths-title" className={styles.extraTitle}>
              What I Bring To The Table
            </h3>
          </div>

          <div className={styles.extraGrid}>
            {/* Fast Learner */}
            <article className={styles.extraCard}>
              <div className={styles.extraIcon} aria-hidden="true">
                ⚡
              </div>

              <h4>Fast Learner</h4>

              <p>
                I pick up new technologies quickly and apply them effectively in
                real projects.
              </p>
            </article>

            {/* Mobile First */}
            <article className={styles.extraCard}>
              <div className={styles.extraIcon} aria-hidden="true">
                📱
              </div>

              <h4>Mobile First</h4>

              <p>
                I build every project with mobile responsiveness as a top
                priority.
              </p>
            </article>

            {/* Clean Code */}
            <article className={styles.extraCard}>
              <div className={styles.extraIcon} aria-hidden="true">
                💫
              </div>

              <h4>Clean Code</h4>

              <p>
                I write readable, well-structured and maintainable code on every
                project.
              </p>
            </article>

            {/* Detail Oriented */}
            <article className={styles.extraCard}>
              <div className={styles.extraIcon} aria-hidden="true">
                🎯
              </div>

              <h4>Detail Oriented</h4>

              <p>
                I pay close attention to UI details to deliver polished,
                pixel-conscious results.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
