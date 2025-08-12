# NA Collective — Starter

This is a starter Next.js + Tailwind project with a simple audio visualizer + merch store using Stripe Checkout (test mode by default).

## Quick start (local)

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` in the project root with these variables (use Stripe test keys for now):
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Run the dev server:
```bash
npm run dev
```

4. Open `http://localhost:3000` — press **Enable Audio** to allow audible playback in your browser.

## Files of interest
- `pages/index.js` — home page with surprise player
- `pages/music.js` — Spotify embed + previews
- `pages/merch.js` — merch storefront (replace price IDs)
- `pages/api/create-checkout-session.js` — creates Stripe Checkout session
- `pages/api/webhook.js` — example webhook handler

## Deploying to Vercel
1. Push this repo to GitHub.
2. Import project on Vercel and set env vars in the Vercel dashboard (same keys as `.env.local`, but NEXT_PUBLIC_SITE_URL should be your Vercel URL like `https://na-collective.vercel.app`).
3. In Stripe, create webhook endpoint pointing to `https://<your-domain>/api/webhook`.

## Notes
- The project includes placeholder WAV preview tracks and placeholder merch images so the site works out-of-the-box.
- Replace the `price_XXXXXXXX` and `price_YYYYYYYY` values in `pages/merch.js` with your Stripe Price IDs.
- Make sure any audio you host is licensed appropriately.

Spotify artist: https://open.spotify.com/artist/6ys1HX75sDG7Bf4izo8t6g
