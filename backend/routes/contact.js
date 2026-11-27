/**
 * POST /api/contact
 * Body: { fullName, email, phone, product?, message, website? }
 * "website" is a hidden honeypot field – real users leave it empty.
 * Sends the enquiry to EMAIL_TO (fragceylonpvtltd@gmail.com).
 */
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const router = Router();

// Max 5 enquiries per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages. Please try again later or contact us on WhatsApp.' },
});

// Gmail transporter (uses a Gmail App Password from .env)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;

// Escape user text before putting it into the HTML email
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function validate({ fullName, email, phone, message }) {
  const errors = {};
  if (!fullName || fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!email || !EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (!phone || !PHONE_RE.test(phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!message || message.trim().length < 5) errors.message = 'Please enter a message.';
  if (fullName && fullName.length > 100) errors.fullName = 'Name is too long.';
  if (message && message.length > 3000) errors.message = 'Message is too long (max 3000 characters).';
  return errors;
}

router.post('/', contactLimiter, async (req, res) => {
  const { fullName = '', email = '', phone = '', product = '', message = '', website = '' } = req.body || {};

  // Honeypot filled in → most likely a bot. Pretend it worked.
  if (website) return res.json({ success: true, message: 'Message sent.' });

  const errors = validate({ fullName, email, phone, message });
  if (Object.keys(errors).length) {
    return res.status(400).json({ success: false, message: 'Please check the form.', errors });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER / EMAIL_PASS missing in .env');
    return res.status(500).json({ success: false, message: 'Email service is not configured.' });
  }

  const sentAt = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Colombo' });
  const to = process.env.EMAIL_TO || 'fragceylonpvtltd@gmail.com';

  const rows = [
    ['Full Name', fullName],
    ['Email', email],
    ['Phone', phone],
    ...(product ? [['Product', product]] : []),
    ['Sent', `${sentAt} (Sri Lanka time)`],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;border-radius:10px;overflow:hidden">
      <div style="background:#2B1D14;color:#FBF6EE;padding:20px 24px">
        <h2 style="margin:0;font-size:20px">New Website Enquiry</h2>
        <p style="margin:4px 0 0;color:#D9A441">FragCeylon contact form</p>
      </div>
      <table style="width:100%;border-collapse:collapse;padding:12px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:10px 24px;font-weight:bold;color:#8B4A2B;width:120px;vertical-align:top">${label}</td>
            <td style="padding:10px 24px;color:#2B1D14">${escapeHtml(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
      <div style="padding:0 24px 24px">
        <p style="font-weight:bold;color:#8B4A2B;margin-bottom:6px">Message</p>
        <div style="background:#FBF6EE;padding:14px;border-radius:8px;white-space:pre-wrap;color:#2B1D14">${escapeHtml(message)}</div>
        <p style="font-size:12px;color:#888;margin-top:18px">Tip: just hit "Reply" to answer the customer directly.</p>
      </div>
    </div>`;

  const text =
    rows.map(([label, value]) => `${label}: ${value}`).join('\n') + `\n\nMessage:\n${message}`;

  try {
    await transporter.sendMail({
      from: `"FragCeylon Website" <${process.env.EMAIL_USER}>`,
      to,
      replyTo: `"${fullName.replace(/"/g, '')}" <${email}>`,
      subject: `New Website Enquiry – ${fullName}`,
      text,
      html,
    });

    // Optional auto-reply to the customer (failure here should not fail the request)
    if (process.env.SEND_AUTO_REPLY === 'true') {
      transporter
        .sendMail({
          from: `"FragCeylon" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: 'Thank you for contacting FragCeylon',
          text: `Hi ${fullName},\n\nThank you for contacting FragCeylon. We have received your message and will get back to you soon.\n\nWarm regards,\nFragCeylon\n+94 71 460 4536 | +94 71 760 5393\nfragceylonpvtltd@gmail.com`,
        })
        .catch((err) => console.error('Auto-reply failed:', err.message));
    }

    return res.json({ success: true, message: 'Message sent.' });
  } catch (err) {
    console.error('Email send failed:', err.message);
    return res.status(500).json({ success: false, message: 'Could not send your message right now.' });
  }
});

export default router;
