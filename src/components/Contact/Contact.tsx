import React, { useState } from "react";
import styles from "./Contact.module.scss";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatusType = "idle" | "success" | "error";

interface FormStatus {
  type: FormStatusType;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: "idle",
      message: "",
    });

    try {
      const response = await fetch("https://formspree.io/f/xwvrqako", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });

        setFormData(initialFormData);
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send your message right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }

    window.setTimeout(() => {
      setStatus({
        type: "idle",
        message: "",
      });
    }, 5000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        {/* =========================================
            SECTION INTRO
        ========================================= */}

        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>CONTACT</span>

          <h2 className={styles.sectionTitle}>
            Get In <span>Touch</span>
          </h2>

          <div className={styles.titleLine}></div>

          <p className={styles.sectionSubtitle}>
            I am currently open to new opportunities. Whether you have a
            project, a question or just want to say hello 👋, my inbox is always
            open!
          </p>
        </div>

        {/* =========================================
            CONTACT CONTENT
        ========================================= */}

        <div className={styles.content}>
          {/* =========================================
              LEFT — INFORMATION CARD
          ========================================= */}

          <div className={styles.infoSide}>
            <div className={styles.infoCard}>
              <div className={styles.cardGlow}></div>

              <div className={styles.infoHeader}>
                <span className={styles.infoBadge}>LET'S CONNECT</span>

                <h3 className={styles.infoTitle}>Let us Work Together</h3>

                <p className={styles.infoText}>
                  I am available for freelance projects, remote positions and
                  contract work. I bring dedication, clean code and great
                  communication to every project I work on.
                </p>
              </div>

              <div className={styles.contactItems}>
                {/* EMAIL */}
                <a
                  href="mailto:judem0144@gmail.com"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>@</span>

                  <span className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Email</span>

                    <span className={styles.contactValue}>
                      judem0144@gmail.com
                    </span>
                  </span>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/RemoDollar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>GH</span>

                  <span className={styles.contactDetails}>
                    <span className={styles.contactLabel}>GitHub</span>

                    <span className={styles.contactValue}>
                      github.com/RemoDollar
                    </span>
                  </span>
                </a>

                {/* LINKEDIN */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>LI</span>

                  <span className={styles.contactDetails}>
                    <span className={styles.contactLabel}>LinkedIn</span>

                    <span className={styles.contactValue}>
                      Martins Madubuegwu
                    </span>
                  </span>
                </div>

                {/* LOCATION */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>NG</span>

                  <span className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Location</span>

                    <span className={styles.contactValue}>Nigeria</span>
                  </span>
                </div>

                {/* AVAILABILITY */}
                <div className={styles.contactItem}>
                  <span
                    className={`${styles.contactIcon} ${styles.availableIcon}`}
                  >
                    ✓
                  </span>

                  <span className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Availability</span>

                    <span className={styles.contactAvailable}>
                      Open to Work
                    </span>
                  </span>
                </div>
              </div>

              <div className={styles.availabilityBar}>
                <span className={styles.availabilityDot}></span>

                <span>Currently available for new opportunities</span>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT — CONTACT FORM
          ========================================= */}

          <div className={styles.formSide}>
            <div className={styles.formHeader}>
              <span>START A CONVERSATION</span>

              <h3>Tell me about your project.</h3>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                {/* NAME */}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    className={styles.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Martins Madubuegwu"
                    autoComplete="name"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    className={styles.input}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject
                </label>

                <input
                  id="contact-subject"
                  className={styles.input}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>

                <textarea
                  id="contact-message"
                  className={styles.textarea}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={7}
                  required
                />
              </div>

              {/* STATUS */}
              {status.type !== "idle" && (
                <div
                  className={`${styles.statusMessage} ${
                    status.type === "success" ? styles.success : styles.error
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

                <span className={styles.submitArrow}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
