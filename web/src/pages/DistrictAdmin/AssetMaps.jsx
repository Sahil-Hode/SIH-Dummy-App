import React from 'react';
import MapComponent from '../../components/common/MapComponent';
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import { mapData } from '../../constants/data';
import { FiMap, FiBarChart2 } from 'react-icons/fi';

const resourceInventoryData = [
  { name: 'Village A', land: 400, water: 240, forest: 200 },
  { name: 'Village B', land: 300, water: 139, forest: 221 },
  { name: 'Village C', land: 200, water: 980, forest: 150 },
  { name: 'Village D', land: 278, water: 390, forest: 230 },
];

const AssetMaps = () => {
    return (
        <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-primary">Asset Maps</h1>
                <p className="text-text-secondary mt-1">Visualization of natural resources and land cover analysis.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center"><FiMap className="mr-2 text-primary"/>Resource Visualization Map</h3>
                    <MapComponent data={mapData} height="h-[400px]" />
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center"><FiBarChart2 className="mr-2 text-primary"/>Village-wise Resource Inventory (in acres)</h3>
                    <SimpleBarChart data={resourceInventoryData} xAxisKey="name" barKey="forest" fill="#2E7D32" />
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Statistical Overview</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">Village</th>
                                <th scope="col" className="px-6 py-3">Agricultural Land (acres)</th>
                                <th scope="col" className="px-6 py-3">Water Bodies (acres)</th>
                                <th scope="col" className="px-6 py-3">Forest Cover (acres)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resourceInventoryData.map(item => (
                                <tr key={item.name} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.name}</th>
                                    <td className="px-6 py-4">{item.land}</td>
                                    <td className="px-6 py-4">{item.water}</td>
                                    <td className="px-6 py-4">{item.forest}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AssetMaps;
