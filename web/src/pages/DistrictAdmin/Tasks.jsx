import React from 'react';
import { districtAdminData } from '../../constants/data';
import { FiPlus, FiFilter, FiCheckCircle, FiPlayCircle, FiClock } from 'react-icons/fi';

const Tasks = () => {
    const { recentTasks } = districtAdminData;

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-blue-100 text-blue-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    
    const getPriorityStyle = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-orange-100 text-orange-800';
            case 'Low': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
                 <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-primary">Task Management</h1>
                        <p className="text-text-secondary mt-1">Assign, track, and manage field verification tasks.</p>
                    </div>
                    <button className="flex items-center bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300">
                        <FiPlus className="mr-2"/> Create New Task
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
                 <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                     <h3 className="text-lg font-semibold text-text-primary">All Tasks</h3>
                     <div className="flex items-center gap-2">
                         <FiFilter/>
                         <select className="border border-gray-300 rounded-md p-1">
                             <option>All Status</option>
                             <option>Pending</option>
                             <option>In Progress</option>
                             <option>Completed</option>
                         </select>
                     </div>
                 </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Task ID</th>
                                <th className="px-6 py-3">Village</th>
                                <th className="px-6 py-3">Priority</th>
                                <th className="px-6 py-3">Due Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentTasks.map(task => (
                                <tr key={task.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{task.id}</td>
                                    <td className="px-6 py-4">{task.village}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityStyle(task.priority)}`}>{task.priority}</span>
                                    </td>
                                    <td className="px-6 py-4">{task.due}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(task.status)}`}>{task.status}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Details</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
