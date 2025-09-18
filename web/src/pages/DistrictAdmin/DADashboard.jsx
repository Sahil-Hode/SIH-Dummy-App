import React from 'react';
import { districtAdminData, mapData } from '../../constants/data';
import StatCard from '../../components/common/StatCard';
import MapComponent from '../../components/common/MapComponent';
import { FiCheckSquare, FiClock, FiAlertTriangle, FiAward, FiEdit, FiTrash, FiPlayCircle, FiPauseCircle, FiCheckCircle } from 'react-icons/fi';

const iconMap = {
  "Pending Verifications": FiCheckSquare,
  "Avg. Processing Time": FiClock,
  "Fraud Alerts": FiAlertTriangle,
  "Top Performing Block": FiAward,
};

const statusIcon = {
    "Pending": <FiClock className="text-yellow-500" />,
    "In Progress": <FiPlayCircle className="text-blue-500" />,
    "Completed": <FiCheckCircle className="text-green-500" />
};

const DADashboard = () => {
  const { performanceMetrics, recentTasks, fraudAlerts } = districtAdminData;

  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <StatCard
            key={index}
            title={metric.title}
            value={metric.value}
            color={metric.color}
            icon={iconMap[metric.title]}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive District Map */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-text-primary mb-4">District Overview Map</h2>
          <MapComponent data={mapData} />
        </div>

        {/* Action Panels */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Recent Tasks Requiring Action</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {recentTasks.map(task => (
                <div key={task.id} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{task.village}</p>
                    <p className="text-sm text-text-secondary">Due: {task.due}</p>
                    <div className="flex items-center text-sm mt-1">
                        {statusIcon[task.status]}
                        <span className="ml-2">{task.status}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${task.priority === 'High' ? 'bg-red-200 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>{task.priority}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-red-600 mb-3">Urgent Fraud Alerts</h3>
            <div className="space-y-3">
              {fraudAlerts.map(alert => (
                <div key={alert.id} className="bg-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-red-800">{alert.village}</p>
                  <p className="text-sm text-red-600">{alert.reason}</p>
                  <div className="flex space-x-4 mt-2">
                     <button className="text-sm font-semibold text-blue-600 hover:underline">Review</button>
                     <button className="text-sm font-semibold text-secondary hover:underline">Flag</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DADashboard;
