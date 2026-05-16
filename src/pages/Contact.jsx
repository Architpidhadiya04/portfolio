import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

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
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h2>Talk to me about your next build.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-intro">
          <p>
            Use this form to send a message directly to my inbox. If you want,
            you can also reach me instantly at <strong>architpidhadiya04@gmail.com</strong>.
          </p>
          <div className="contact-summary">
            <Mail size={20} />
            <div>
              <strong>architpidhadiya04@gmail.com</strong>
              <span>Preferred email for quick replies</span>
            </div>
          </div>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          </label>

          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </label>

          <label>
            Subject
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project, role, or idea" />
          </label>

          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Tell me what you'd like to build." />
          </label>

          <button className="button primary" type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send message"}
            <Send size={18} />
          </button>

          {status.success && (
            <p className="status success">
              <CheckCircle size={16} /> {status.success}
            </p>
          )}
          {status.error && (
            <p className="status error">
              <AlertCircle size={16} /> {status.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
