import React from 'react';
import { Link } from 'react-router-dom';
import { FaTree, FaUsers, FaBalanceScale } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; 
import heroBg from '../assets/hero-bg.jpg';

const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen text-text-primary font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="VanSakshya Logo" className="h-10 w-auto mr-3" />
            <h1 className="text-2xl font-bold text-primary">VanSakshya</h1>
          </div>
          <div>
            <Link to="/login" className="bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg">
              Login / Dashboard
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white py-32 px-6" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center z-10">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">Empowering Tribal Rights, <br /> Protecting Our Forests.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">A unified platform for transparent implementation and monitoring of the Forest Rights Act.</p>
          <Link to="/public" className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-800 transition duration-300 transform hover:scale-105">
            Explore Public Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-2 text-text-primary">Key Features</h3>
          <p className="text-lg text-text-secondary mb-12">Bridging the gap between administration and communities.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <FaBalanceScale className="text-5xl text-secondary mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">Transparent Governance</h4>
              <p className="text-text-secondary">Streamlined claim processing, real-time status tracking, and clear accountability for all stakeholders.</p>
            </div>
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <FaTree className="text-5xl text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">Ecological Conservation</h4>
              <p className="text-text-secondary">Monitor forest health, manage resources effectively, and resolve land conflicts with powerful mapping tools.</p>
            </div>
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <FaUsers className="text-5xl text-accent mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">Community Empowerment</h4>
              <p className="text-text-secondary">Access to information, easy application tracking, and a platform for feedback to ensure voices are heard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} VanSakshya. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
