# FragCeylon Website

Website for **FragCeylon** – premium Ceylon spices from Kurunegala, Sri Lanka.

- **Frontend:** React 18 + Vite + React Router (`/frontend`)
- **Backend:** Node.js + Express API with Nodemailer (`/backend`)
- **Pages:** Home · About · Products · Contact
- Contact form enquiries are emailed to **fragceylonpvtltd@gmail.com**

---

## 1. Project structure

```
FRAGCEYLON/
├── package.json              ← helper scripts (install / build / start)
├── README.md
├── .gitignore
├── backend/
│   ├── server.js             ← Express app (API + serves the built site)
│   ├── routes/               ← products, testimonials, offers, contact
│   ├── data/                 ← products.json, testimonials.json, offers.json
│   ├── utils/readData.js
│   ├── .env.example          ← copy to .env and add the Gmail App Password
│   └── package.json
└── frontend/
    ├── index.html
    ├── vite.config.js        ← dev proxy: /api → http://localhost:5000
    ├── public/
    │   ├── favicon.svg
    │   └── images/           ← PUT YOUR IMAGES HERE (see images/README.txt)
    └── src/
        ├── main.jsx, App.jsx, index.css, api.js
        ├── data/siteData.js  ← business details, team, fallback content
        ├── hooks/useApiData.js
        ├── components/       ← Navbar, Footer, Hero, ProductSlider, ContactForm ...
        └── pages/            ← Home, About, Products, Contact, NotFound
```

---

## 2. Requirements

- **Node.js 18 or newer** (check with `node -v`)

---

## 3. Install

From the `FRAGCEYLON` folder:

```bash
npm run install:all
```

(or run `npm install` inside `backend` and inside `frontend` separately)

---

## 4. Set up the email (contact form)

1. Copy `backend/.env.example` → `backend/.env`
2. Fill in:
   ```
   EMAIL_USER=fragceylonpvtltd@gmail.com
   EMAIL_PASS=xxxxxxxxxxxxxxxx      ← Gmail App Password, NOT the normal password
   EMAIL_TO=fragceylonpvtltd@gmail.com
   ```
3. To create the App Password: sign in to the Gmail account → **Google Account → Security →
   turn on 2-Step Verification → App passwords** → create one and paste the 16 characters
   (no spaces). Google changes these menus from time to time – check Google's help page
   "Sign in with app passwords" if it looks different.

Without this, the site works but the form shows an error when sending.

---

## 5. Run in development (2 terminals)

```bash
# Terminal 1 – API on http://localhost:5000
npm run dev:backend

# Terminal 2 – website on http://localhost:5173
npm run dev:frontend
```

Open **http://localhost:5173**.

---

## 6. Run in production (one server)

```bash
npm run build     # builds the React site into frontend/dist
npm start         # Express serves the API + the built site on http://localhost:5000
```

Upload the whole project to any Node.js host (Render, Railway, a VPS ...), set the
same `.env` values there, run `npm run install:all`, `npm run build`, `npm start`.

If the frontend is hosted separately (e.g. Netlify/Vercel), set `VITE_API_URL` in
`frontend/.env` to the backend URL and add the frontend URL to `CLIENT_URL` in `backend/.env`.

---

## 7. API

| Method | Endpoint | Description |
|-------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/products` | All products |
| GET | `/api/products/:id` | One product (id or slug) |
| GET | `/api/testimonials` | Testimonials |
| GET | `/api/offers` | Active offers only |
| POST | `/api/contact` | `{ fullName, email, phone, product?, message }` → emails the enquiry |

The contact route validates input, has a hidden honeypot field against bots, and allows
max 5 messages per 15 minutes per IP.

---

## 8. What to edit

| What | Where |
|------|-------|
| Images | `frontend/public/images/` – exact names in `images/README.txt` |
| Phone, email, address, opening hours, social links, map | `frontend/src/data/siteData.js` → `SITE` |
| Google Map | Google Maps → Share → **Embed a map** → copy the `src` link into `SITE.mapEmbedUrl` |
| Products | `backend/data/products.json` **and** `PRODUCTS` in `siteData.js` (fallback) |
| Testimonials | `backend/data/testimonials.json` (+ fallback in `siteData.js`) |
| Offers (set `"active": false` to hide; section hides when none are active) | `backend/data/offers.json` (+ fallback) |
| Team names | `TEAM` in `siteData.js` |
| Colours & fonts | `frontend/src/index.css` (`:root` variables) |

### Placeholders still to replace
- All images
- Team names (`[NAME]`)
- Opening hours (currently a sample: Mon – Sat, 8:30 AM – 5:30 PM)
- Pack sizes (50g / 100g / 250g / 1kg)
- Offer details, code `CEYLON10` and `[DATE]`
- Testimonials (sample reviews)
- Facebook / Instagram / TikTok links
- Google Map embed link
