import { useState } from 'react';
import './ImagePlaceholder.css';

/**
 * Shows the real image if the file exists in /public/images.
 * If the file is missing, shows a styled placeholder box with a label.
 *
 * Props:
 *  src       – path of the image, e.g. "/images/home-hero.jpg"
 *  alt       – alt text for screen readers
 *  label     – text shown on the placeholder, e.g. "HERO IMAGE – 1920×900"
 *  className – extra classes for sizing
 *  dark      – darker placeholder (used behind hero text)
 */
export default function ImagePlaceholder({ src, alt = '', label, className = '', dark = false }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`img-ph ${dark ? 'img-ph--dark' : ''} ${className}`}
        role="img"
        aria-label={alt || label}
      >
        <span className="img-ph__label">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          {label}
          {src && <small>{src}</small>}
        </span>
      </div>
    );
  }

  return (
    <img
      className={`img-real ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
