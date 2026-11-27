import Logo from '../Logo/Logo.jsx';
import Icon from '../Icons.jsx';
import { SITE, whatsappLink } from '../../data/siteData.js';
import './ContactInfoCard.css';

// Left card on the Contact page: logo, contact details, WhatsApp + Call buttons
export default function ContactInfoCard() {
  return (
    <div className="contact-card info-card">
      <Logo variant="card" />

      <ul className="info-card__list">
        {SITE.phones.map((p) => (
          <li key={p.tel}>
            <span className="info-card__icon"><Icon name="phone" size={18} /></span>
            <a href={`tel:${p.tel}`}>{p.display}</a>
          </li>
        ))}
        <li>
          {/* PLACEHOLDER opening hours – edit SITE.hours in src/data/siteData.js */}
          <span className="info-card__icon"><Icon name="clock" size={18} /></span>
          <span>{SITE.hours}</span>
        </li>
        <li>
          <span className="info-card__icon"><Icon name="mail" size={18} /></span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          <span className="info-card__icon"><Icon name="pin" size={18} /></span>
          <span>{SITE.address}</span>
        </li>
      </ul>

      <div className="info-card__actions">
        <a
          href={whatsappLink('Hi FragCeylon, I would like to know more about your spices.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--gold"
        >
          WhatsApp
        </a>
        <a href={`tel:${SITE.phones[0].tel}`} className="btn btn--gold">
          Call Now
        </a>
      </div>
    </div>
  );
}
