import './Logo.css';

// Web-sized copies live in /public/images/logo (originals in /public/images/logo/original)
// "height" also caps the size if the stylesheet has not loaded yet.
const LOGOS = {
  nav: { src: '/images/logo/logo-nav-white.png', height: 76 },
  // Same logo with cream lettering, for the dark footer
  footer: { src: '/images/logo/logo-footer.png', height: 230 },
  card: { src: '/images/logo/logo-stacked-pvt-ltd.png', height: 130 },
};

/**
 * Company logo.
 * variant: "nav" | "footer" | "card"
 */
export default function Logo({ variant = 'nav' }) {
  const { src, height } = LOGOS[variant];

  return (
    <span className={`logo logo--${variant}`}>
      <img className="logo__img" src={src} height={height} alt="FragCeylon (Pvt) Ltd" />
    </span>
  );
}
