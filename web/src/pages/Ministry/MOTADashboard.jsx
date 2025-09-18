import React from 'react';
import { ministryData } from '../../constants/data';
import StatCard from '../../components/common/StatCard';
import SimplePieChart from '../../components/charts/SimplePieChart';
import { FiGlobe, FiUsers, FiMapPin, FiBarChart2 } from 'react-icons/fi';

const iconMap = {
    "Total CFR Area (acres)": FiGlobe,
    "National Settlement Rate": FiBarChart2,
    "States Implemented": FiMapPin,
    "Total Beneficiaries": FiUsers,
}

const MOTADashboard = () => {
  const { nationalMetrics, statePerformance } = ministryData;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nationalMetrics.map((metric, index) => (
          <StatCard
            key={index}
            title={metric.title}
            value={metric.value}
            color={metric.color}
            icon={iconMap[metric.title]}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-text-primary mb-4">State-wise Performance Comparison (Settlement Rate)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                          <th className="px-6 py-3">State</th>
                          <th className="px-6 py-3">Settlement Rate</th>
                          <th className="px-6 py-3">Performance Bar</th>
                      </tr>
                  </thead>
                  <tbody>
                      {statePerformance.sort((a,b) => b.rate - a.rate).map((s) => (
                           <tr key={s.name} className="bg-white border-b hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium text-gray-900">{s.name}</td>
                              <td className="px-6 py-4 font-bold text-primary">{s.rate}%</td>
                              <td className="px-6 py-4">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="h-2.5 rounded-full" style={{ width: `${s.rate}%`, backgroundColor: s.color }}></div>
                                </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Performance Distribution</h3>
            <SimplePieChart data={statePerformance} />
        </div>
      </div>
    </div>
  );
};

export default MOTADashboard;
