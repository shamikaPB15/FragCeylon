import Hero from '../../components/Hero/Hero.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import ContactCTA from '../../components/ContactCTA/ContactCTA.jsx';
import OfferCard from '../../components/OfferCard/OfferCard.jsx';
import Reveal from '../../components/Reveal.jsx';
import useApiData from '../../hooks/useApiData.js';
import { getProducts, getOffers } from '../../api.js';
import { PRODUCTS, OFFERS } from '../../data/siteData.js';
import './Products.css';

export default function Products() {
  const products = useApiData(getProducts, PRODUCTS);
  const offers = useApiData(getOffers, OFFERS).filter((o) => o.active !== false);

  return (
    <>
      {/* ---------- HERO ---------- */}
      {/* REPLACE: /images/products-hero.jpg (1920×700) */}
      <Hero
        image="/images/products-hero.jpg"
        imageLabel="Products Hero Image – 1920×700"
        eyebrow="Shop FragCeylon"
        title="Our Spice Collection"
        subtitle="Pure, aromatic and straight from Sri Lanka."
      />

      {/* ---------- INTRO + PRODUCT GRID ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Our Range</span>
            <h2>Premium Ceylon Spices</h2>
            <p className="lead">
              Explore FragCeylon&apos;s range of premium Ceylon spices, each carefully selected,
              naturally processed and packed fresh. Available for home kitchens, restaurants and
              wholesale buyers.
            </p>
          </Reveal>

          <div className="product-grid">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 4) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT CALL-TO-ACTION ---------- */}
      <ContactCTA />

      {/* ---------- OFFERS & DISCOUNTS ---------- */}
      {/* Hidden automatically when no offers are active (backend/data/offers.json) */}
      {offers.length > 0 && (
        <section className="section section--alt offers">
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">Special Deals</span>
              <h2>Offers &amp; Discounts</h2>
              <p>Save on your favourite Ceylon spices with our latest offers.</p>
            </Reveal>
            <div className="offers__grid">
              {offers.map((offer, i) => (
                <Reveal key={offer.id} delay={i * 120}>
                  <OfferCard offer={offer} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
