import { useState } from 'react';
import './Logo.css';

/**
 * Logo – uses /images/logo.png when it exists,
 * otherwise shows a simple placeholder mark.
 * {/* REPLACE: /images/logo.png (square, ~400×400, transparent PNG) *\/}
 *
 * variant: "nav" | "footer" | "card"
 */
export default function Logo({ variant = 'nav', showText = true }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`logo logo--${variant}`}>
      {failed ? (
        <span className="logo__mark" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="100%" height="100%">
            <path d="M32 10c-10 9-14 19-14 27a14 14 0 0 0 28 0c0-8-4-18-14-27z" fill="#D9A441" />
            <path d="M32 22v32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      ) : (
        <img
          className="logo__img"
          src="/images/logo.png"
          alt={showText ? '' : 'FragCeylon logo'}
          onError={() => setFailed(true)}
        />
      )}
      {showText && (
        <span className="logo__text">
          Frag<span>Ceylon</span>
        </span>
      )}
    </span>
  );
}
