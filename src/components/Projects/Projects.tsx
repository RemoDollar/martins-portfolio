import React from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import ProjectMockup from "./ProjectMockup";
import styles from "./Projects.module.scss";

interface Project {
  id: number;
  title: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;

  visual: "browser" | "laptop" | "ai-dashboard" | "kanban";
}

const projects: Project[] = [
  {
    id: 1,
    title: "FLTH Podcast",
    category: "Production",
    status: "Live",
    featured: true,

    description:
      "A premium podcast platform focused on storytelling, inspiration and community. Built with React, TypeScript and SCSS featuring a modern UI, smooth animations and fully responsive layouts.",

    tech: ["React", "TypeScript", "SCSS", "Vite"],

    github: "https://github.com/RemoDollar",

    live: "#",

    visual: "browser",
  },

  {
    id: 2,
    title: "E-M Unisex Salon",
    category: "Production",
    status: "Live",

    description:
      "Professional salon website with service listings, booking information, gallery, contact section and mobile-first responsive design.",

    tech: ["HTML5", "SCSS", "JavaScript", "WordPress"],

    github: "https://github.com/RemoDollar/e-munisexsalon",

    live: "https://e-munisexsalon.com",

    visual: "browser",
  },

  {
    id: 3,
    title: "Martins Portfolio",
    category: "Open Source",
    status: "Live",

    description:
      "Personal developer portfolio showcasing my experience, projects, skills and frontend expertise using React and TypeScript.",

    tech: ["React", "TypeScript", "SCSS", "Vite"],

    github: "https://github.com/RemoDollar/martins-portfolio",

    live: "#",

    visual: "laptop",
  },

  {
    id: 4,
    title: "GrokScript",
    category: "Open Source",
    status: "Live",

    description:
      "AI-powered content generation platform for creating cinematic prompts, YouTube Shorts, storytelling workflows and production-ready scripts.",

    tech: ["React", "TypeScript", "OpenAI", "Node.js"],

    github: "https://github.com/RemoDollar",

    live: "#",

    visual: "ai-dashboard",
  },

  {
    id: 5,
    title: "AI Task Manager",
    category: "Currently Building",
    status: "Building",

    description:
      "An intelligent task management platform powered by AI for organizing work, generating suggestions and improving productivity.",

    tech: ["React", "TypeScript", "MongoDB", "Node.js"],

    github: "https://github.com/RemoDollar",

    live: "#",

    visual: "kanban",
  },
];

const Projects: React.FC = () => {
  const featured = projects.find((project) => project.featured);

  const others = projects.filter((project) => !project.featured);

  return (
    <section className={styles.projects} id="projects">
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className={styles.blurOne}></div>

      <div className={styles.blurTwo}></div>

      <div className={styles.grid}></div>

      <div className={styles.container}>
        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className={styles.heading}>
          <span className={styles.subtitle}>FEATURED WORK</span>

          <h2 className={styles.title}>
            My <span>Projects</span>
          </h2>

          <p className={styles.description}>
            Every project represents a challenge solved through thoughtful
            design, clean architecture and modern frontend technologies.
          </p>
        </div>

        {/* =========================================
            FEATURED PROJECT
        ========================================= */}

        {featured && (
          <div className={styles.featuredProject}>
            <div className={styles.projectImage}>
              <div className={styles.imageOverlay}></div>

              <ProjectMockup type={featured.visual} />
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectTop}>
                <span className={styles.category}>{featured.category}</span>

                <span
                  className={`${styles.status} ${
                    featured.status === "Live" ? styles.live : styles.building
                  }`}
                >
                  {featured.status}
                </span>
              </div>

              <h3>{featured.title}</h3>

              <p>{featured.description}</p>

              <div className={styles.techStack}>
                {featured.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${featured.title} GitHub repository`}
                >
                  <FaGithub />
                </a>

                <a
                  href={featured.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${featured.title} live`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =========================================
            OTHER PROJECTS
        ========================================= */}

        <div className={styles.projectsGrid}>
          {others.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              {/* Project Mockup */}

              <div className={styles.cardMockup}>
                <ProjectMockup type={project.visual} />
              </div>

              {/* Card Header */}

              <div className={styles.cardHeader}>
                <span
                  className={`${styles.status} ${
                    project.status === "Live" ? styles.live : styles.building
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Information */}

              <div className={styles.cardContent}>
                <span className={styles.category}>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technology Stack */}

                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Project Links */}

                <div className={styles.cardLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            BOTTOM CALL TO ACTION
        ========================================= */}

        <div className={styles.bottomCTA}>
          <h3>Interested in seeing more?</h3>

          <p>
            I'm constantly building products, experimenting with AI and creating
            modern web experiences. Explore more of my work on GitHub or let's
            build something amazing together.
          </p>

          <div className={styles.ctaButtons}>
            <a
              href="https://github.com/RemoDollar"
              target="_blank"
              rel="noreferrer"
              className={styles.githubButton}
            >
              View GitHub
            </a>

            <a href="#contact" className={styles.contactButton}>
              Contact Me
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
