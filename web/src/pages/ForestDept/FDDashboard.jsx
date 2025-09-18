import React from 'react';
import { forestDeptData } from '../../constants/data';
import StatCard from '../../components/common/StatCard';
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import { FiTrendingDown, FiAlertOctagon, FiFileText, FiShield } from 'react-icons/fi';

const iconMap = {
    "Forest Cover Change": FiTrendingDown,
    "Boundary Disputes": FiAlertOctagon,
    "Verification Backlog": FiFileText,
    "Encroachment Alerts": FiShield,
};

const FDDashboard = () => {
  const { healthMetrics, protectedAreas, deforestationData } = forestDeptData;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
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
            <h3 className="text-xl font-semibold text-text-primary mb-4">Monthly Deforestation Alerts (acres)</h3>
            <SimpleBarChart data={deforestationData} xAxisKey="month" barKey="area" fill="#d32f2f" />
        </div>
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Protected Area Monitoring</h3>
            <div className="space-y-4">
                {protectedAreas.map((area, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50 border">
                        <p className="font-semibold text-text-primary">{area.name}</p>
                        <div className="flex justify-between items-center mt-1">
                            <p className="text-sm text-text-secondary">{area.status}</p>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${area.alert === 'High' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>{area.alert} Priority</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FDDashboard;
