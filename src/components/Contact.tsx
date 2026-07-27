import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { reveal } from '../lib/motion';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const initialValues: FormValues = { name: '', phone: '', email: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.';
  else if (!/^[+]?[\d\s-]{10,15}$/.test(values.phone.trim())) errors.phone = 'Enter a valid phone number.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';

  if (!values.message.trim()) errors.message = 'Please tell us how we can help.';

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    // NOTE: replace this with a real submission call (e.g. Formspree, EmailJS,
    // or your own API route) once a backend/email service is wired up.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <motion.div className="contact__intro" {...reveal}>
        <p className="eyebrow">Begin your journey</p>
        <h2 id="contact-title">
          Live beyond <em>expectation.</em>
        </h2>
        <p>Arrange a private presentation with our relationship team and discover a new benchmark for city living.</p>
        <div className="contact__details">
          <a href="tel:+916395399999">
            <Phone size={16} /> +91 63953 99999
          </a>
          <a href="mailto:enquiries@m3mbrabus.com">
            <Mail size={16} /> enquiries@m3mbrabus.com
          </a>
        </div>
      </motion.div>

      <motion.div className="contact__form-wrap" {...reveal}>
        {submitted ? (
          <div className="contact__success" role="status">
            <CheckCircle2 size={32} />
            <h3>Thank you.</h3>
            <p>Your enquiry has been received. Our relationship team will reach out within 24 hours.</p>
            <button type="button" className="outline" onClick={() => setSubmitted(false)}>
              Send another enquiry
            </button>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p className="contact__error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Your phone number"
                value={values.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p className="contact__error" id="phone-error">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p className="contact__error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help"
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p className="contact__error" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="gold" disabled={submitting}>
              {submitting ? 'Sending…' : 'Request a Callback'} <ArrowUpRight size={17} />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
