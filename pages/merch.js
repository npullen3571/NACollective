// pages/merch.js
import React from 'react';

export async function getServerSideProps() {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 10
  });

  const productData = products.data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description || '',
    image: product.images?.[0] || '/placeholder.png',
    priceId: product.default_price.id,
    price:
      product.default_price.unit_amount != null
        ? (product.default_price.unit_amount / 100).toFixed(2)
        : null
  }));

  return {
    props: { products: productData }
  };
}

export default function MerchPage({ products }) {
  const handleBuyNow = async (priceId) => {
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId })
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Error starting checkout');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Merch</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '2rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.price && <p>${product.price}</p>}
            <button
              style={{
                padding: '0.5rem 1rem',
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => handleBuyNow(product.priceId)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
