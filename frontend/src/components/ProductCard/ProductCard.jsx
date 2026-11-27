import { Link } from 'react-router-dom';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder.jsx';
import './ProductCard.css';

/**
 * One product card. "Enquire" opens the Contact page with
 * this product pre-filled in the message (/contact?product=slug).
 */
export default function ProductCard({ product }) {
  const { slug, name, description, image, sizes = [] } = product;

  return (
    <article className="product-card">
      <div className="product-card__media">
        {/* REPLACE: product photo in /public/images/products (800×800) */}
        <ImagePlaceholder src={image} alt={name} label={name} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>
        {sizes.length > 0 && (
          <p className="product-card__sizes">
            <span>Available in:</span> {sizes.join(' / ')}
          </p>
        )}
        <Link to={`/contact?product=${slug}`} className="btn btn--dark product-card__btn">
          Enquire
        </Link>
      </div>
    </article>
  );
}
