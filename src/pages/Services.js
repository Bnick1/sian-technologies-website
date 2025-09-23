import React from 'react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServiceCard title="AI Consulting" description="Expert AI guidance and implementation." />
        <ServiceCard title="System Design" description="Full IoT & mechatronics system development." />
        <ServiceCard title="Maintenance" description="Reliable support and maintenance for all solutions." />
      </div>
    </div>
  );
}
