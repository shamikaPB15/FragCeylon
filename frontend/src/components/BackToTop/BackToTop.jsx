import Icon from '../Icons.jsx';
import './BackToTop.css';

export default function BackToTop() {
  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrowUp" size={18} />
    </button>
  );
}
