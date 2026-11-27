import Hero from '../../components/Hero/Hero.jsx';
import TeamCard from '../../components/TeamCard/TeamCard.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icons.jsx';
import { TEAM, WHY_CHOOSE_US } from '../../data/siteData.js';
import './About.css';

export default function About() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      {/* REPLACE: /images/about-hero.jpg (1920×700) */}
      <Hero
        image="/images/about-hero.jpg"
        imageLabel="About Hero Image – 1920×700"
        eyebrow="About FragCeylon"
        title="Our Story"
        subtitle="Rooted in Sri Lanka's spice heritage."
      />

      {/* ---------- INTRO – BUSINESS & PEOPLE ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header about-intro">
            <span className="eyebrow">Who We Are</span>
            <h2>From Sri Lankan Spice Gardens to Your Kitchen</h2>
            <p className="lead">
              FragCeylon was started by a small team who grew up surrounded by the sights and scents
              of Sri Lankan spice gardens. We saw how much care local farmers put into their harvest
              and wanted to share that quality with the world. Based in Kurunegala, we partner
              directly with growers and handle every step ourselves, from selection and drying to
              grading and packing, so you get spices that are honest, fresh and truly Ceylon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- VISION & MISSION ---------- */}
      <section className="section section--alt">
        <div className="container vm">
          <Reveal className="vm__card">
            <span className="vm__icon"><Icon name="eye" size={28} /></span>
            <h3>Our Vision</h3>
            <p>
              To be a trusted name worldwide for authentic Ceylon spices, bringing the true taste of
              Sri Lanka to every kitchen while uplifting the farming communities behind it.
            </p>
          </Reveal>
          <Reveal className="vm__card" delay={120}>
            <span className="vm__icon"><Icon name="target" size={28} /></span>
            <h3>Our Mission</h3>
            <p>
              To source the finest spices directly from Sri Lankan farmers, process them with care and
              strict quality standards, and deliver them fresh, pure and fairly priced, while building
              long-term, fair partnerships with our growers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Our Promise</span>
            <h2>Why Choose Us</h2>
            <p>Six reasons home cooks, chefs and businesses choose FragCeylon.</p>
          </Reveal>
          <div className="why-grid">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="why-card">
                <span className="why-card__icon"><Icon name={item.icon} size={24} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE PEOPLE BEHIND ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Our Team</span>
            <h2>The People Behind FragCeylon</h2>
            <p>A small, passionate team that cares about every pack that leaves our hands.</p>
          </Reveal>
          {/* PLACEHOLDER team – edit TEAM in src/data/siteData.js */}
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.role} delay={i * 120}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BUSINESS DESCRIPTION ---------- */}
      <section className="section">
        <div className="container story">
          <Reveal className="story__media">
            {/* REPLACE: /images/about-business.jpg (1000×800) */}
            <ImagePlaceholder
              src="/images/about-business.jpg"
              alt="FragCeylon spices being prepared"
              label="Business Image – 1000×800"
            />
          </Reveal>
          <Reveal className="story__text" delay={120}>
            <span className="eyebrow">Our Craft</span>
            <h2>Grown with Care, Packed with Pride</h2>
            <p>
              Every spice we offer begins its journey in the fertile soils of Sri Lanka. We work hand
              in hand with experienced farmers who use time-honoured methods passed down through
              generations. From hand-peeling cinnamon bark into delicate quills to sun-drying
              peppercorns and cloves, each step is done with patience and respect for the craft.
            </p>
            <p>
              Whether you are a home cook, a restaurant, or a business looking for bulk supply, we are
              here to help. We keep our process transparent, our quality consistent, and our service
              personal. When you choose FragCeylon, you are not only getting pure, flavourful spices.
              You are also supporting the local communities who grow them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <Testimonials alt />
    </>
  );
}
