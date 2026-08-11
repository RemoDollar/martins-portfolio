import React from "react";
import styles from "./ProjectMockup.module.scss";

type MockupType = "browser" | "laptop" | "ai-dashboard" | "kanban";

interface ProjectMockupProps {
  type: MockupType;
}

const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  /* =========================================================
     BROWSER MOCKUP
     Used by:
     - FLTH Podcast
     - E-M Unisex Salon
  ========================================================= */

  if (type === "browser") {
    return (
      <div className={`${styles.mockup} ${styles.browserMockup}`}>
        <div className={styles.browserFrame}>
          {/* Browser top bar */}
          <div className={styles.browserTopBar}>
            <div className={styles.browserDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.browserAddress}>
              <span>www.project-preview.com</span>
            </div>
          </div>

          {/* Browser content */}
          <div className={styles.browserContent}>
            <div className={styles.browserNav}>
              <div className={styles.browserLogo}>PROJECT</div>

              <div className={styles.browserNavLinks}>
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Contact</span>
              </div>
            </div>

            <div className={styles.browserHero}>
              <div className={styles.browserHeroText}>
                <span className={styles.mockupEyebrow}>DIGITAL EXPERIENCE</span>

                <h4>
                  Building something
                  <br />
                  meaningful.
                </h4>

                <p>
                  Modern design. Clean experience.
                  <br />
                  Built for people.
                </p>

                <div className={styles.mockupButton}>Explore</div>
              </div>

              <div className={styles.browserHeroVisual}>
                <div className={styles.browserCircle}></div>

                <div className={styles.browserGlassCard}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className={styles.browserBottomCards}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     LAPTOP MOCKUP
     Used by:
     - Martins Portfolio
  ========================================================= */

  if (type === "laptop") {
    return (
      <div className={`${styles.mockup} ${styles.laptopMockup}`}>
        <div className={styles.laptopScreen}>
          <div className={styles.laptopDisplay}>
            <div className={styles.portfolioSidebar}>
              <div className={styles.portfolioAvatar}></div>

              <div className={`${styles.portfolioLine} ${styles.short}`}></div>

              <div className={styles.portfolioLine}></div>

              <div className={styles.portfolioLine}></div>

              <div className={styles.portfolioLine}></div>
            </div>

            <div className={styles.portfolioMain}>
              <span className={styles.portfolioSmallText}>
                FRONTEND DEVELOPER
              </span>

              <h4>
                Building modern
                <br />
                digital experiences.
              </h4>

              <p>React · TypeScript · SCSS</p>

              <div className={styles.portfolioButtons}>
                <span></span>
                <span></span>
              </div>

              <div className={styles.portfolioCards}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.laptopBase}>
          <div className={styles.laptopHinge}></div>
        </div>
      </div>
    );
  }

  /* =========================================================
     AI DASHBOARD MOCKUP
     Used by:
     - GrokScript
  ========================================================= */

  if (type === "ai-dashboard") {
    return (
      <div className={`${styles.mockup} ${styles.aiDashboardMockup}`}>
        <div className={styles.aiDashboardFrame}>
          {/* Dashboard header */}
          <div className={styles.aiHeader}>
            <div className={styles.aiBrand}>
              <span className={styles.aiBrandIcon}>✦</span>

              <span>GrokScript</span>
            </div>

            <div className={styles.aiHeaderActions}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className={styles.aiBody}>
            <aside className={styles.aiSidebar}>
              <div className={`${styles.aiSideItem} ${styles.active}`}>
                Dashboard
              </div>

              <div className={styles.aiSideItem}>Projects</div>

              <div className={styles.aiSideItem}>Prompts</div>

              <div className={styles.aiSideItem}>Scripts</div>

              <div className={styles.aiSideItem}>Settings</div>
            </aside>

            <main className={styles.aiMain}>
              <div className={styles.aiWelcome}>
                <span>AI CONTENT STUDIO</span>

                <h4>
                  Create something
                  <br />
                  remarkable.
                </h4>
              </div>

              <div className={styles.aiGenerator}>
                <div className={styles.aiGeneratorTop}>
                  <span>Prompt Generator</span>

                  <span>AI</span>
                </div>

                <div className={styles.aiPromptLines}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className={styles.aiGenerateButton}>Generate</div>
              </div>

              <div className={styles.aiStats}>
                <div>
                  <strong>24</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>86</strong>
                  <span>Scripts</span>
                </div>

                <div>
                  <strong>142</strong>
                  <span>Prompts</span>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     KANBAN MOCKUP
     Used by:
     - AI Task Manager
  ========================================================= */

  return (
    <div className={`${styles.mockup} ${styles.kanbanMockup}`}>
      <div className={styles.kanbanFrame}>
        {/* Kanban header */}
        <div className={styles.kanbanHeader}>
          <div>
            <strong>AI TASK MANAGER</strong>

            <span className={styles.kanbanSubtitle}>
              Smart productivity workspace
            </span>
          </div>

          <div className={styles.kanbanHeaderButton}>+ Task</div>
        </div>

        {/* Kanban columns */}
        <div className={styles.kanbanColumns}>
          {/* To Do */}
          <div className={styles.kanbanColumn}>
            <div className={styles.kanbanColumnTitle}>
              <span>To Do</span>
              <strong>3</strong>
            </div>

            <div className={styles.kanbanTask}>
              <span></span>

              <div>
                <strong>Design dashboard</strong>
                <small>Frontend</small>
              </div>
            </div>

            <div className={styles.kanbanTask}>
              <span></span>

              <div>
                <strong>Update profile</strong>
                <small>UI</small>
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className={styles.kanbanColumn}>
            <div className={styles.kanbanColumnTitle}>
              <span>In Progress</span>
              <strong>2</strong>
            </div>

            <div className={`${styles.kanbanTask} ${styles.featuredTask}`}>
              <span></span>

              <div>
                <strong>AI suggestions</strong>
                <small>AI Feature</small>
              </div>
            </div>

            <div className={styles.kanbanTask}>
              <span></span>

              <div>
                <strong>Authentication</strong>
                <small>Backend</small>
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className={styles.kanbanColumn}>
            <div className={styles.kanbanColumnTitle}>
              <span>Completed</span>
              <strong>4</strong>
            </div>

            <div className={`${styles.kanbanTask} ${styles.completedTask}`}>
              <span></span>

              <div>
                <strong>Task creation</strong>
                <small>Complete</small>
              </div>
            </div>

            <div className={`${styles.kanbanTask} ${styles.completedTask}`}>
              <span></span>

              <div>
                <strong>Task deletion</strong>
                <small>Complete</small>
              </div>
            </div>
          </div>
        </div>

        {/* AI assistant */}
        <div className={styles.kanbanAiBar}>
          <span className={styles.kanbanAiIcon}>✦</span>

          <div>
            <strong>AI Assistant</strong>

            <small>Ready to help organize your work.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup;
