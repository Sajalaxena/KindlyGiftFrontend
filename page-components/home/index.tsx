// components/HomePage.tsx
'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/app/lib/shopify';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('az');

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'az':
        return a.title.localeCompare(b.title);
      case 'za':
        return b.title.localeCompare(a.title);
      case 'low':
        return a.price - b.price;
      case 'high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="px-4 py-6">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-semibold">Products</h1>

        <Select onValueChange={setSortOption} defaultValue="az">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="az">Name (A-Z)</SelectItem>
            <SelectItem value="za">Name (Z-A)</SelectItem>
            <SelectItem value="low">Price (Low to High)</SelectItem>
            <SelectItem value="high">Price (High to Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
