import TestimonialCard from '../TestimonialCard/TestimonialCard.jsx';
import Reveal from '../Reveal.jsx';
import useApiData from '../../hooks/useApiData.js';
import { getTestimonials } from '../../api.js';
import { TESTIMONIALS } from '../../data/siteData.js';
import './Testimonials.css';

/**
 * Testimonials section – used on Home and About.
 * Loads from GET /api/testimonials (falls back to siteData.js).
 * NOTE: current reviews are PLACEHOLDERS – replace in backend/data/testimonials.json
 */
export default function Testimonials({ title = 'What Our Customers Say', alt = false }) {
  const testimonials = useApiData(getTestimonials, TESTIMONIALS);

  return (
    <section className={`section testimonials ${alt ? 'section--alt' : ''}`}>
      <div className="container">
        <Reveal className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2>{title}</h2>
          <p>Real words from home cooks, chefs and spice lovers who trust FragCeylon.</p>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
