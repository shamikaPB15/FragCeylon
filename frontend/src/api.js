// All calls to the Node backend live here.
// VITE_API_URL is empty in dev (Vite proxies /api to port 5000).
const BASE_URL = import.meta.env.VITE_API_URL || '';

async function getJson(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const getProducts = () => getJson('/api/products');
export const getTestimonials = () => getJson('/api/testimonials');
export const getOffers = () => getJson('/api/offers');

/**
 * Send the contact form.
 * Resolves with { success, message } or throws an Error with .errors (field errors).
 */
export async function sendContact(data) {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  let body = {};
  try {
    body = await res.json();
  } catch {
    /* non-JSON response */
  }
  if (!res.ok || !body.success) {
    const error = new Error(body.message || 'Something went wrong');
    error.errors = body.errors || {};
    throw error;
  }
  return body;
}
