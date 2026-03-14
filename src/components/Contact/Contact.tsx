import React, { useState } from "react";
import styles from "./Contact.module.scss";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "success" | "error";
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Get In <span>Touch</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          I am currently open to new opportunities. Whether you have a project,
          a question or just want to say hello 👋 my inbox is always open!
        </p>
        <div className={styles.content}>
          <div className={styles.infoSide}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Let us Work Together</h3>
              <p className={styles.infoText}>
                I am available for freelance projects, remote positions and
                contract work. I bring dedication, clean code and great
                communication to every project I work on.
              </p>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>@</div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Email</span>
                    <a
                      href="mailto:judem0144@gmail.com"
                      className={styles.contactValue}
                    >
                      judem0144@gmail.com
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>GH</div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>GitHub</span>
                    <a
                      href="https://github.com/RemoDollar"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.contactValue}
                    >
                      github.com/RemoDollar
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>LI</div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/martins-jude-579b06338"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.contactValue}
                    >
                      Martins Madubuegwu
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>NG</div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>Nigeria</span>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>OK</div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Availability</span>
                    <span className={styles.contactAvailable}>
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formSide}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Martins Madubuegwu"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={styles.textarea}
                  rows={6}
                  required
                />
              </div>
              {status.type !== "idle" && (
                <div
                  className={`${styles.statusMessage} ${status.type === "success" ? styles.success : styles.error}`}
                >
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
