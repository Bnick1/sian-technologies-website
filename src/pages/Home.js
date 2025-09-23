import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="my-8 px-4">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductCard title="Smart Sensor" description="Advanced IoT sensors for agriculture and industry." />
          <ProductCard title="Drone Systems" description="Autonomous drones for monitoring and delivery." />
          <ProductCard title="AI Platform" description="Custom AI solutions for your business." />
        </div>
      </section>

      <section className="my-8 px-4">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard title="AI Consulting" description="Expert AI guidance and implementation." />
          <ServiceCard title="System Design" description="Full IoT & mechatronics system development." />
          <ServiceCard title="Maintenance" description="Reliable support and maintenance for all solutions." />
        </div>
      </section>
    </div>
  );
}
