import React from 'react';

export default function ServiceCard({ title, description }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
