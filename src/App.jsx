import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Sian Technologies
          </h1>
          <p className="text-xl md:text-2xl">
            Innovative AI, IoT & Mechatronics Solutions
          </p>
        </div>
      </header>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Smart Sensor</h3>
              <p className="text-gray-600">Advanced IoT sensors for agriculture and industry.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚁</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Drone Systems</h3>
              <p className="text-gray-600">Autonomous drones for monitoring and delivery.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">AI Platform</h3>
              <p className="text-gray-600">Custom AI solutions for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">AI Consulting</h3>
              <p className="text-gray-600">Expert AI guidance and implementation.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">System Design</h3>
              <p className="text-gray-600">Full IoT & mechatronics system development.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Maintenance</h3>
              <p className="text-gray-600">Reliable support and maintenance for all solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Sian Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;