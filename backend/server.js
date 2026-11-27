/**
 * FragCeylon – Express API server
 * --------------------------------
 * Routes:
 *   GET  /api/health
 *   GET  /api/products        GET /api/products/:id
 *   GET  /api/testimonials
 *   GET  /api/offers
 *   POST /api/contact         (emails the enquiry to EMAIL_TO)
 *
 * In production it also serves the built React app from ../frontend/dist
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import productsRouter from './routes/products.js';
import testimonialsRouter from './routes/testimonials.js';
import offersRouter from './routes/offers.js';
import contactRouter from './routes/contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Middleware ----------
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim());

// CORS only matters for the API. Listed origins get CORS headers; others simply
// don't (same-origin requests from the built site work without them).
app.use(
  '/api',
  cors({
    origin(origin, callback) {
      callback(null, !origin || allowedOrigins.includes(origin));
    },
  })
);
app.use(express.json({ limit: '20kb' }));
app.set('trust proxy', 1); // needed for correct IPs behind a host/proxy (rate limiting)

// ---------- API routes ----------
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/products', productsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/offers', offersRouter);
app.use('/api/contact', contactRouter);

// Unknown API route
app.use('/api', (req, res) => res.status(404).json({ success: false, message: 'Not found' }));

// ---------- Serve the React build (production) ----------
const distPath = path.join(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  // Let React Router handle all other routes
  app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));
}

// ---------- Error handler ----------
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ success: false, message: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`FragCeylon API running on http://localhost:${PORT}`);
});
