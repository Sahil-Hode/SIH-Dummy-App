import React from 'react';
import MapComponent from '../../components/common/MapComponent';
import { mapData } from '../../constants/data';
import { FiMapPin, FiCheckSquare, FiClock, FiXSquare } from 'react-icons/fi';

const MapView = () => {
    return (
         <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-primary">Public FRA Map View</h1>
                <p className="text-text-secondary mt-1">General information on forest right areas and claim status.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <FiMapPin className="text-gray-500 h-6 w-6 mr-3"/>
                    <div>
                        <p className="text-sm text-gray-500">Total Claims Displayed</p>
                        <p className="text-lg font-bold">{mapData.villages.length}</p>
                    </div>
                </div>
                 <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <FiCheckSquare className="text-green-500 h-6 w-6 mr-3"/>
                    <div>
                        <p className="text-sm text-gray-500">Approved</p>
                        <p className="text-lg font-bold">{mapData.villages.filter(v => v.status === 'Approved').length}</p>
                    </div>
                </div>
                 <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <FiClock className="text-orange-500 h-6 w-6 mr-3"/>
                    <div>
                        <p className="text-sm text-gray-500">Pending</p>
                        <p className="text-lg font-bold">{mapData.villages.filter(v => v.status === 'Pending').length}</p>
                    </div>
                </div>
                 <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <FiXSquare className="text-red-500 h-6 w-6 mr-3"/>
                    <div>
                        <p className="text-sm text-gray-500">Rejected</p>
                        <p className="text-lg font-bold">{mapData.villages.filter(v => v.status === 'Rejected').length}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <MapComponent data={mapData} height="h-[65vh]" />
            </div>
        </div>
    );
}

export default MapView;
