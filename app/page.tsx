// app/page.tsx
import ProductCard from '../components/ProductCard';
import { fetchProducts } from './lib/shopify';
export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
