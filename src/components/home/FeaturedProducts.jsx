import React from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../product/ProductCard';

// Dummy products for the featured section
const featuredProducts = [
  {
    id: 1,
    title: 'Siemens S7-1200 CPU 1214C DC/DC/DC',
    brand: 'Siemens',
    price: 24500,
    originalPrice: 28000,
    image: '/images/products/siemens_s7_1200.png'
  },
  {
    id: 2,
    title: 'Omron E2E Next Proximity Sensor',
    brand: 'Omron',
    price: 4500,
    originalPrice: 5500,
    image: '/images/products/omron_e2e_next.png'
  },
  {
    id: 3,
    title: 'Lexip Smart Home Hub V2',
    brand: 'Lexip',
    price: 12900,
    originalPrice: 15000,
    image: '/images/products/lexip_hub_v2.png'
  },
  {
    id: 4,
    title: 'Allen-Bradley Micro850 Controller',
    brand: 'Allen-Bradley',
    price: 39900,
    originalPrice: 42000,
    image: '/images/products/allen_bradley_micro850.png'
  }
];

export default function FeaturedProducts() {
  return (
    <section>
      <div className="flex justify-between items-end mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Top Selling Hardware</h2>
        </div>
        <Link to="/shop" className="text-sm font-bold text-lexip-600 hover:text-lexip-800 transition-colors whitespace-nowrap hidden sm:block">
          See Full Shop &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <Link to="/shop" className="mt-4 text-sm font-bold text-lexip-600 hover:text-lexip-800 transition-colors text-center block sm:hidden">
        See Full Shop &gt;
      </Link>
    </section>
  );
}
