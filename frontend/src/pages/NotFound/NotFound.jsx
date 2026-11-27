import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '50vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: 12 }}>Page not found</h1>
        <p className="lead" style={{ marginBottom: 28 }}>
          Sorry, we couldn&apos;t find that page.
        </p>
        <Link to="/" className="btn btn--dark">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
