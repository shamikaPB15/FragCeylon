import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import Icon from '../Icons.jsx';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Darker background + shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when the page changes
  useEffect(() => setOpen(false), [pathname]);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" aria-label="FragCeylon – Home">
          <Logo variant="nav" />
        </Link>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>

        <ul id="main-menu" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
