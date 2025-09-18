import React from 'react';
import MapComponent from '../../components/common/MapComponent';
import { mapData } from '../../constants/data';
import { FiFilter, FiLayers, FiDownload } from 'react-icons/fi';

const FRAAtlas = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-primary">Forest Rights Act (FRA) Atlas</h1>
                        <p className="text-text-secondary mt-1">Interactive mapping and verification of land rights claims.</p>
                    </div>
                    <button className="flex items-center bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
                        <FiDownload className="mr-2"/> Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Filters and Tools Panel */}
                <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center"><FiFilter className="mr-2"/>Filters</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="village" className="block text-sm font-medium text-text-secondary">Filter by Village</label>
                            <select id="village" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option>All Villages</option>
                                <option>Village A</option>
                                <option>Village B</option>
                                <option>Village C</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-text-secondary">Filter by Status</label>
                            <select id="status" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option>All</option>
                                <option>Approved</option>
                                <option>Pending</option>
                                <option>Rejected</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary">Claim Type</label>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center">
                                    <input id="ifr" name="claim_type" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" defaultChecked/>
                                    <label htmlFor="ifr" className="ml-3 block text-sm text-gray-900">IFR (Individual)</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="cr" name="claim_type" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" defaultChecked/>
                                    <label htmlFor="cr" className="ml-3 block text-sm text-gray-900">CR (Community)</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="cfr" name="claim_type" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" defaultChecked/>
                                    <label htmlFor="cfr" className="ml-3 block text-sm text-gray-900">CFR (Community Forest Resource)</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary mt-6 mb-4 flex items-center"><FiLayers className="mr-2"/>Map Layers</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="satellite" className="text-sm text-gray-900">Satellite Imagery</label>
                            <input id="satellite" type="checkbox" className="toggle-checkbox"/>
                        </div>
                         <div className="flex items-center justify-between">
                            <label htmlFor="forest-boundaries" className="text-sm text-gray-900">Forest Boundaries</label>
                            <input id="forest-boundaries" type="checkbox" className="toggle-checkbox" defaultChecked/>
                        </div>
                    </div>

                </div>

                {/* Map View */}
                <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
                     <MapComponent data={mapData} height="h-[80vh]"/>
                </div>
            </div>
        </div>
    );
}

// Add a simple style for the toggle in index.css if you want a fancier toggle
// /* Simple toggle switch */
// .toggle-checkbox {
//   @apply appearance-none w-12 h-6 bg-gray-300 rounded-full cursor-pointer;
//   @apply relative transition-colors duration-300;
// }
// .toggle-checkbox:checked {
//   @apply bg-primary;
// }
// .toggle-checkbox::after {
//   content: '';
//   @apply absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow;
//   @apply transition-transform duration-300;
// }
// .toggle-checkbox:checked::after {
//   @apply transform translate-x-6;
// }


export default FRAAtlas;
