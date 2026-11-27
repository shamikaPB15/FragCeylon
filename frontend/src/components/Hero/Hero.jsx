import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder.jsx';
import './Hero.css';

/**
 * Full-width hero with background image + dark overlay.
 * Props: image, imageLabel, eyebrow, title, subtitle, children (buttons), size ("lg" | "md")
 */
export default function Hero({ image, imageLabel, eyebrow, title, subtitle, children, size = 'md' }) {
  return (
    <section className={`hero hero--${size}`}>
      <div className="hero__bg">
        <ImagePlaceholder src={image} alt="" label={imageLabel} dark />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content container">
        {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children && <div className="hero__actions">{children}</div>}
      </div>
    </section>
  );
}
