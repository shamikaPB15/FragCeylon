import { Link } from 'react-router-dom';
import Icon from '../Icons.jsx';
import { SITE, whatsappLink } from '../../data/siteData.js';
import './ContactCTA.css';

// "Love our spices? Let's talk!" banner shown under the product grid
export default function ContactCTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box">
          <div className="cta__text">
            <h2>Love our spices? Let&apos;s talk!</h2>
            <p>Contact us for prices, bulk orders or custom packaging.</p>
            <ul className="cta__details">
              {SITE.phones.map((p) => (
                <li key={p.tel}>
                  <Icon name="phone" size={15} />
                  <a href={`tel:${p.tel}`}>{p.display}</a>
                </li>
              ))}
              <li>
                <Icon name="mail" size={15} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--gold">
              Contact Us
            </Link>
            <a href={`tel:${SITE.phones[0].tel}`} className="btn btn--outline">
              <Icon name="phone" size={16} /> Call Us
            </a>
            <a
              href={whatsappLink('Hi FragCeylon, I would like to know more about your spices.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
