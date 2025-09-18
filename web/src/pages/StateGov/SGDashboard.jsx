import React from 'react';
import { stateGovData } from '../../constants/data';
import StatCard from '../../components/common/StatCard';
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import { FiAward, FiCheckCircle, FiMap, FiFileText } from 'react-icons/fi';

const iconMap = {
    "Total Pattas Granted": FiAward,
    "Overall Settlement Rate": FiCheckCircle,
    "Districts Covered": FiMap,
    "Pending Appeals": FiFileText,
};

const SGDashboard = () => {
  const { statewideMetrics, districtPerformance } = stateGovData;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statewideMetrics.map((metric, index) => (
          <StatCard
            key={index}
            title={metric.title}
            value={metric.value}
            color={metric.color}
            icon={iconMap[metric.title]}
          />
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-text-primary mb-4">District Performance (Settlement Rate %)</h3>
        <SimpleBarChart data={districtPerformance} xAxisKey="name" barKey="rate" fill="#4CAF50" />
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
         <h3 className="text-xl font-semibold text-text-primary mb-4">District Performance Ranking</h3>
          <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                          <th className="px-6 py-3">Rank</th>
                          <th className="px-6 py-3">District</th>
                          <th className="px-6 py-3">Settlement Rate</th>
                          <th className="px-6 py-3">Total Claims Processed</th>
                      </tr>
                  </thead>
                  <tbody>
                      {districtPerformance.sort((a, b) => b.rate - a.rate).map((d, i) => (
                           <tr key={d.name} className="bg-white border-b hover:bg-gray-50">
                              <td className="px-6 py-4 font-bold text-gray-900">{i + 1}</td>
                              <td className="px-6 py-4 font-medium text-gray-900">{d.name}</td>
                              <td className="px-6 py-4 font-medium text-primary">{d.rate}%</td>
                              <td className="px-6 py-4">{d.claims.toLocaleString()}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>

    </div>
  );
};

export default SGDashboard;
