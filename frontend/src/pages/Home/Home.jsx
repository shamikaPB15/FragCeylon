import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero.jsx';
import ProductSlider from '../../components/ProductSlider/ProductSlider.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icons.jsx';
import useApiData from '../../hooks/useApiData.js';
import { getProducts } from '../../api.js';
import { PRODUCTS } from '../../data/siteData.js';
import './Home.css';

const HIGHLIGHTS = [
  { icon: 'leaf', title: '100% Natural', text: 'Pure spices with nothing added.' },
  { icon: 'handshake', title: 'Sourced from Local Farmers', text: 'Fair, direct partnerships in Sri Lanka.' },
  { icon: 'box', title: 'Carefully Packed', text: 'Sealed fresh to keep every bit of aroma.' },
];

export default function Home() {
  const products = useApiData(getProducts, PRODUCTS);

  return (
    <>
      {/* ---------- HERO ---------- */}
      {/* REPLACE: /images/home-hero.jpg (1920×900) */}
      <Hero
        size="lg"
        image="/images/home-hero.jpg"
        imageLabel="Home Hero Image – 1920×900"
        eyebrow="Premium Ceylon Spices"
        title="The True Taste of Ceylon"
        subtitle="Premium Sri Lankan spices from FragCeylon, sourced from local farmers and packed with care."
      >
        <Link to="/products" className="btn btn--gold">
          Explore Products
        </Link>
        <Link to="/about" className="btn btn--outline">
          Our Story
        </Link>
      </Hero>

      {/* ---------- ABOUT THE BUSINESS ---------- */}
      <section className="section home-about">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Who We Are</span>
            <h2>Welcome to FragCeylon</h2>
            <p className="lead">
              For generations, Sri Lanka has been known as the island of spices. At FragCeylon, we
              bring that heritage to your kitchen. From our home in Kurunegala, we work closely with
              local growers to source authentic Ceylon cinnamon, pepper, cloves, turmeric and more,
              then clean, dry and pack them carefully so every pack arrives fresh, fragrant and full
              of flavour.
            </p>
          </Reveal>

          <div className="home-about__highlights">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 120} className="highlight">
                <span className="highlight__icon">
                  <Icon name={h.icon} size={28} />
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRODUCTS SLIDER ---------- */}
      <section className="section section--alt home-products">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Our Collection</span>
            <h2>Our Spices</h2>
            <p>Hand-picked, naturally processed and packed fresh – straight from Sri Lanka.</p>
          </Reveal>

          <Reveal>
            <ProductSlider products={products} />
          </Reveal>

          <div className="home-products__more">
            <Link to="/products" className="btn btn--dark">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <Testimonials title="What Our Customers Say" />
    </>
  );
}
