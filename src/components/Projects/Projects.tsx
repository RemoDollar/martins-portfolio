import React, { useState } from "react";
import styles from "./Projects.module.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-M unisex Salon",
    description:
      "A fully responsive salon business website built for a real client.",
    longDescription:
      "A professional salon website featuring service listings, gallery section, contact form, and mobile-first responsive design. Built with clean semantic HTML, custom SCSS architecture and smooth CSS animations.",
    tech: ["HTML5", "SCSS", "JavaScript", "WordPress"],
    liveUrl: "https://e-munisexsalon.com",
    githubUrl: "https://github.com/RemoDollar/e-munisexsalon",
    featured: true,
    status: "Live",
  },
  {
    id: 2,
    title: "Martins Portfolio",
    description:
      "My personal developer portfolio built with React, TypeScript and SCSS.",
    longDescription:
      "A modern dark-themed portfolio website showcasing my projects, skills and experience. Built with React, TypeScript, SCSS Modules and Vite for fast performance.",
    tech: ["React", "TypeScript", "SCSS", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/RemoDollar/martins-portfolio",
    featured: true,
    status: "In Progress",
  },
];

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          My <span>Projects</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Here are some of the projects I have built. Each one taught me
          something new.
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ""} ${hoveredId === project.id ? styles.hovered : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardIcons}>
                  <span className={styles.folderIcon}>⬡</span>
                  <div className={styles.cardLinks}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cardLink}
                      title="GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cardLink}
                      title="Live Site"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <span
                  className={`${styles.status} ${project.status === "Live" ? styles.live : styles.inProgress}`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.longDescription}
              </p>
              <div className={styles.techList}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.moreProjects}>
            <div className={styles.moreContent}>
              <span className={styles.moreIcon}>✦</span>
              <h3 className={styles.moreTitle}>More Coming Soon</h3>
              <p className={styles.moreText}>
                I am constantly building new projects. Check my GitHub for the
                latest work.
              </p>
              <a
                href="https://github.com/RemoDollar"
                target="_blank"
                rel="noreferrer"
                className={styles.githubBtn}
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
<span className={styles.folderIcon}>⬡</span>;
export default Projects;
