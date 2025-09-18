import React from 'react';
import { schemesData } from '../../constants/data';
import { FiInfo, FiExternalLink } from 'react-icons/fi';

const Schemes = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-primary">Government Schemes & Benefits</h1>
        <p className="text-text-secondary mt-1">Information on programs available to tribal communities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemesData.map((scheme, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-2">{scheme.name}</h2>
              <p className="text-text-secondary mb-4 text-sm">{scheme.description}</p>
              <div className="border-t pt-4">
                  <h3 className="font-semibold mb-1 text-sm flex items-center"><FiInfo className="mr-2 text-primary"/>Eligibility</h3>
                  <p className="text-text-secondary text-sm">{scheme.eligibility}</p>
              </div>
            </div>
            <a 
              href={scheme.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 flex items-center justify-center bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 w-full"
            >
              Learn More <FiExternalLink className="ml-2"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
