import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (rolePath) => {
    // In a real app, you'd handle authentication here.
    // For this demo, we'll just navigate.
    navigate(rolePath);
  };

  const roles = [
    { name: "District Administration", path: "/district-admin" },
    { name: "Forest Department", path: "/forest-department" },
    { name: "State Government", path: "/state-government" },
    { name: "Ministry of Tribal Affairs", path: "/ministry" },
    { name: "NGO / Public", path: "/public" },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center font-sans p-4 bg-cover" style={{backgroundImage: "url('/src/assets/hero-bg.jpg')"}}>
       <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 z-10">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="VanSakshya Logo" className="h-16 w-auto mb-3" />
          <h1 className="text-3xl font-bold text-primary">Welcome to VanSakshya</h1>
          <p className="text-text-secondary mt-1">Select your role to proceed</p>
        </div>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-text-secondary">Username / Email</label>
            <input 
              type="text" 
              id="username"
              defaultValue="demouser"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-text-secondary">Password</label>
            <input 
              type="password" 
              id="password"
              defaultValue="password"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </form>

        <div className="mt-6">
          <p className="text-center font-semibold text-text-primary mb-3">Login As</p>
          <div className="grid grid-cols-1 gap-3">
            {roles.map((role) => (
              <button
                key={role.name}
                onClick={() => handleLogin(role.path)}
                className="group w-full flex justify-between items-center bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <span>{role.name}</span>
                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity"/>
              </button>
            ))}
          </div>
           <div className="text-center mt-4">
               <a href="#" onClick={() => navigate('/')} className="text-sm text-primary hover:underline">← Back to Home</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
