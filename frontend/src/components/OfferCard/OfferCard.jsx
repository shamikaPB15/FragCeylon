import { Link } from 'react-router-dom';
import Icon from '../Icons.jsx';
import './OfferCard.css';

export default function OfferCard({ offer }) {
  const { badge, title, description, code, validUntil } = offer;
  return (
    <article className="offer-card">
      <span className="offer-card__badge">{badge}</span>
      <span className="offer-card__icon" aria-hidden="true">
        <Icon name="tag" size={22} />
      </span>
      <h3>{title}</h3>
      <p className="offer-card__desc">{description}</p>
      {code && (
        <p className="offer-card__code">
          Use code <strong>{code}</strong>
        </p>
      )}
      <p className="offer-card__valid">Valid until {validUntil}</p>
      <Link to="/contact" className="btn btn--outline-dark offer-card__btn">
        Claim Offer
      </Link>
    </article>
  );
}
