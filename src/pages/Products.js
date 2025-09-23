import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard title="Smart Sensor" description="Advanced IoT sensors for agriculture and industry." />
        <ProductCard title="Drone Systems" description="Autonomous drones for monitoring and delivery." />
        <ProductCard title="AI Platform" description="Custom AI solutions for your business." />
      </div>
    </div>
  );
}
