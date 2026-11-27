import Icon from '../Icons.jsx';
import './TestimonialCard.css';

export default function TestimonialCard({ testimonial }) {
  const { name, location, rating = 5, quote } = testimonial;

  return (
    <figure className="t-card">
      <div className="t-card__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={17} className={i < rating ? 'is-on' : ''} />
        ))}
      </div>
      <blockquote className="t-card__quote">“{quote}”</blockquote>
      <figcaption className="t-card__author">
        <span className="t-card__avatar" aria-hidden="true">
          {name.charAt(0)}
        </span>
        <span>
          <strong>{name}</strong>
          <small>{location}</small>
        </span>
      </figcaption>
    </figure>
  );
}
