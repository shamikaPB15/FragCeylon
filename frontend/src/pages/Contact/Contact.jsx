import { useSearchParams } from 'react-router-dom';
import ContactInfoCard from '../../components/ContactInfoCard/ContactInfoCard.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import MapEmbed from '../../components/MapEmbed/MapEmbed.jsx';
import Reveal from '../../components/Reveal.jsx';
import { PRODUCTS } from '../../data/siteData.js';
import './Contact.css';

export default function Contact() {
  // Coming from a product "Enquire" button? → /contact?product=<slug>
  const [params] = useSearchParams();
  const product = PRODUCTS.find((p) => p.slug === params.get('product'));
  const productName = product?.name || '';
  const initialMessage = productName ? `Hi FragCeylon, I'm interested in ${productName}.` : '';

  return (
    <section className="contact-page">
      <div className="container">
        {/* ---------- HEADING ---------- */}
        <Reveal className="contact-page__head">
          <h1>
            Let&apos;s Connect,
            <span>Bring Ceylon&apos;s Finest to Your Kitchen</span>
          </h1>
          <p>
            Reach out for product enquiries, bulk orders, or custom packaging. Our team is happy to
            help you find the perfect Ceylon spices.
          </p>
        </Reveal>

        {/* ---------- INFO CARD + FORM ---------- */}
        <div className="contact-page__grid">
          <Reveal>
            <ContactInfoCard />
          </Reveal>
          <Reveal delay={120}>
            <ContactForm product={productName} initialMessage={initialMessage} />
          </Reveal>
        </div>

        {/* ---------- MAP ---------- */}
        <Reveal className="contact-page__map">
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
