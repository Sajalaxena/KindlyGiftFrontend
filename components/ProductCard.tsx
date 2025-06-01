// components/ProductCard.tsx
import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="product-card">
  <img src={product.image} alt={product.title} />
  <h3>{product.title}</h3>
  <p>₹{product.price}</p>
  <button>Add to Cart</button>
</div>

  );
}
