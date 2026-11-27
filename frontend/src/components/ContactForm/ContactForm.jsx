import { useEffect, useState } from 'react';
import { sendContact } from '../../api.js';
import { whatsappLink } from '../../data/siteData.js';
import './ContactForm.css';

const EMPTY = { fullName: '', email: '', phone: '', message: '', website: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;

function validate(values) {
  const errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!PHONE_RE.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number (e.g. +94 71 234 5678).';
  if (values.message.trim().length < 5) errors.message = 'Please enter your message.';
  return errors;
}

/**
 * Contact form → POST /api/contact → emailed to fragceylonpvtltd@gmail.com
 * Props:
 *  product        – product name chosen on the Products page (optional)
 *  initialMessage – pre-filled message (optional)
 */
export default function ContactForm({ product = '', initialMessage = '' }) {
  const [values, setValues] = useState({ ...EMPTY, message: initialMessage });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMessage, setServerMessage] = useState('');

  // If the user arrives from a product "Enquire" button, pre-fill the message
  useEffect(() => {
    if (initialMessage) setValues((v) => ({ ...v, message: initialMessage }));
  }, [initialMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      // Focus the first field with an error
      const first = Object.keys(found)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    setStatus('sending');
    setServerMessage('');
    try {
      await sendContact({ ...values, product });
      setStatus('success');
      setValues(EMPTY);
    } catch (err) {
      setStatus('error');
      if (err.errors && Object.keys(err.errors).length) setErrors(err.errors);
      setServerMessage(err.message);
    }
  };

  const field = (name, label, type = 'text', extra = {}) => (
    <div className="cf__field">
      <label htmlFor={`cf-${name}`} className="sr-only">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={`cf-${name}`}
          name={name}
          rows={6}
          placeholder={label}
          value={values[name]}
          onChange={handleChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
          {...extra}
        />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          type={type}
          placeholder={label}
          value={values[name]}
          onChange={handleChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
          {...extra}
        />
      )}
      {errors[name] && (
        <span id={`cf-${name}-err`} className="cf__error">
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form className="contact-card cf" onSubmit={handleSubmit} noValidate>
      {product && (
        <p className="cf__product">
          Enquiring about: <strong>{product}</strong>
        </p>
      )}

      {field('fullName', 'Full Name', 'text', { autoComplete: 'name', maxLength: 100 })}
      {field('email', 'Email Address', 'email', { autoComplete: 'email' })}
      {field('phone', 'Phone Number', 'tel', { autoComplete: 'tel' })}
      {field('message', 'Your Message', 'textarea', { maxLength: 3000 })}

      {/* Honeypot – hidden from people, bots fill it in */}
      <div className="cf__hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn--gold cf__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="cf__alert cf__alert--success">
            Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="cf__alert cf__alert--error">
            Something went wrong. Please try again or{' '}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              contact us on WhatsApp
            </a>
            .{serverMessage && <small> ({serverMessage})</small>}
          </p>
        )}
      </div>
    </form>
  );
}
