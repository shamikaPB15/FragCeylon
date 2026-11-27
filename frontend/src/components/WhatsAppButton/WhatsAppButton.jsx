import Icon from '../Icons.jsx';
import { whatsappLink } from '../../data/siteData.js';
import './WhatsAppButton.css';

// Floating WhatsApp button shown on every page (bottom-right)
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Hi FragCeylon, I would like to know more about your spices.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FragCeylon on WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
