import React from 'react';

const StatCard = ({ title, value, color, icon: Icon }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between transition-all hover:shadow-lg hover:-translate-y-1">
      <div>
        <p className="text-sm font-medium text-text-secondary capitalize">{title}</p>
        <p className="text-2xl md:text-3xl font-bold text-text-primary">{value}</p>
      </div>
      <div className={`text-white p-3 rounded-full ${color}`}>
        {Icon && <Icon size={24} />}
      </div>
    </div>
  );
};

export default StatCard;
