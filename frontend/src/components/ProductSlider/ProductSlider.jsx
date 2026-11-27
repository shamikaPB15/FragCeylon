import { useCallback, useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import Icon from '../Icons.jsx';
import './ProductSlider.css';

const AUTOPLAY_MS = 4000;

// How many cards are visible: 4 desktop, 2 tablet, 1 mobile
const getPerView = () => {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

export default function ProductSlider({ products }) {
  const [perView, setPerView] = useState(getPerView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const maxIndex = Math.max(0, products.length - perView);

  // Update cards-per-view on resize
  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Keep index in range when perView changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  // Auto-play (pauses on hover / focus)
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next, maxIndex]);

  // Swipe on touch devices
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -50) next();
    if (dx > 50) prev();
    touchStartX.current = null;
    setPaused(false);
  };

  // Arrow keys when the slider has focus
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="FragCeylon spices"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="slider__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <ul
          className="slider__track"
          style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
        >
          {products.map((product) => (
            <li
              key={product.slug}
              className="slider__slide"
              style={{ flexBasis: `${100 / perView}%` }}
            >
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>

      {maxIndex > 0 && (
        <div className="slider__controls">
          <button type="button" className="slider__arrow" onClick={prev} aria-label="Previous spices">
            <Icon name="arrowLeft" size={20} />
          </button>

          <div className="slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`slider__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>

          <button type="button" className="slider__arrow" onClick={next} aria-label="Next spices">
            <Icon name="arrowRight" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
