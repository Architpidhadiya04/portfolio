import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, success: null, error: "Please fill in your name, email, and message." });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({ loading: false, success: "Message sent! I will reply soon.", error: null });
    } catch (error) {
      setStatus({ loading: false, success: null, error: error.text || error.message || "Failed to send message." });
    }
  };

  return (
    <section className="contact-panel">
      <div className="contact-grid-v2">
        <div className="contact-info-panel">
          <div className="section-label">Get in Touch</div>
          <h2 className="serif-title">Let's discuss your next project.</h2>
          <p className="contact-desc-text">
            Have a role, project, or general inquiry? Feel free to reach out. I typically respond within 24 hours.
          </p>

          <div className="contact-details-list">
            <a href="mailto:architpidhadiya04@gmail.com" className="contact-link-item">
              <div className="icon-badge">
                <Mail size={16} />
              </div>
              <div className="link-detail">
                <span className="link-label">Email Me</span>
                <strong className="link-val">architpidhadiya04@gmail.com</strong>
              </div>
            </a>
            <div className="contact-link-item">
              <div className="icon-badge">
                <MessageSquare size={16} />
              </div>
              <div className="link-detail">
                <span className="link-label">Response Time</span>
                <strong className="link-val">Usually within a business day</strong>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form-v2" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              name="subject"
              type="text"
              autoComplete="off"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              autoComplete="off"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your project, role, or idea..."
              required
              className="form-textarea"
            />
          </div>

          <button className="btn btn-primary btn-submit" type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
            <Send size={14} />
          </button>

          {status.success && (
            <div className="form-status success">
              <CheckCircle size={16} /> <span>{status.success}</span>
            </div>
          )}
          {status.error && (
            <div className="form-status error">
              <AlertCircle size={16} /> <span>{status.error}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
