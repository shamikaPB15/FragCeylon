import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import Icon from '../Icons.jsx';
import BackToTop from '../BackToTop/BackToTop.jsx';
import { SITE, PRODUCTS, whatsappLink } from '../../data/siteData.js';
import './Footer.css';

const EXPLORE = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

const SOCIALS = [
  { name: 'facebook', label: 'Facebook', href: SITE.social.facebook },
  { name: 'instagram', label: 'Instagram', href: SITE.social.instagram },
  { name: 'whatsapp', label: 'WhatsApp', href: whatsappLink() },
  { name: 'tiktok', label: 'TikTok', href: SITE.social.tiktok },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        {/* Column 1 – brand */}
        <div className="footer__brand">
          <Logo variant="footer" />
          <p>{SITE.tagline}</p>
          <div className="footer__social">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <Icon name={s.name} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 – explore */}
        <div className="footer__col">
          <h3 className="footer__title">Explore</h3>
          <ul>
            {EXPLORE.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – spices */}
        <div className="footer__col">
          <h3 className="footer__title">Our Spices</h3>
          <ul>
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to="/products">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – contact */}
        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__contact">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <span className="footer__icon"><Icon name="phone" size={14} /></span>
                <a href={`tel:${p.tel}`}>{p.display}</a>
              </li>
            ))}
            <li>
              <span className="footer__icon"><Icon name="pin" size={14} /></span>
              <span>{SITE.address}</span>
            </li>
            <li>
              <span className="footer__icon"><Icon name="mail" size={14} /></span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} FragCeylon. All rights reserved.</p>
        <BackToTop />
      </div>
    </footer>
  );
}
