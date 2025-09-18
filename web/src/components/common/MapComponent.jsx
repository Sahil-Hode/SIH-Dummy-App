import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, GeoJSON, LayerGroup, LayersControl } from 'react-leaflet';
import { FaLandmark, FaTree, FaWater } from 'react-icons/fa';

const statusColors = {
  Approved: 'green',
  Pending: 'orange',
  Rejected: 'red',
};

const getIcon = (type) => {
    switch(type) {
        case 'IFR': return <FaLandmark className="text-blue-500" />;
        case 'CR': return <FaLandmark className="text-purple-500" />;
        case 'CFR': return <FaLandmark className="text-indigo-500" />;
        default: return <FaLandmark />;
    }
}

const MapComponent = ({ data, height = 'h-[400px] md:h-[500px]' }) => {
  const { center, zoom, villages, forests, assets } = data;

  return (
    <div className={`${height} w-full rounded-lg shadow-lg overflow-hidden border`}>
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Street Map">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satellite View">
                    <TileLayer
                        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                        maxZoom={20}
                        subdomains={['mt1','mt2','mt3']}
                    />
                </LayersControl.BaseLayer>
                
                <LayersControl.Overlay checked name="Claim Status">
                    <LayerGroup>
                        {villages?.map((village, index) => (
                            <CircleMarker
                                key={`village-${index}`}
                                center={village.position}
                                radius={8}
                                pathOptions={{ color: statusColors[village.status], fillColor: statusColors[village.status], fillOpacity: 0.7 }}
                            >
                                <Popup>
                                    <strong>{village.name}</strong><br />
                                    Status: {village.status} <br/>
                                    Type: {village.type}
                                </Popup>
                            </CircleMarker>
                        ))}
                    </LayerGroup>
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Forest Areas">
                     <LayerGroup>
                        {forests?.map((forest, index) => (
                             <Marker key={`forest-${index}`} position={forest.position}>
                                 <Popup>
                                     <strong>{forest.name}</strong><br />
                                     Type: {forest.type}
                                 </Popup>
                             </Marker>
                        ))}
                     </LayerGroup>
                </LayersControl.Overlay>
                
                 <LayersControl.Overlay name="Natural Assets">
                     <LayerGroup>
                        {assets?.map((asset, index) => (
                             <Marker key={`asset-${index}`} position={asset.position}>
                                 <Popup>
                                     <strong>{asset.name}</strong><br />
                                     Type: {asset.type}
                                 </Popup>
                             </Marker>
                        ))}
                     </LayerGroup>
                </LayersControl.Overlay>

            </LayersControl>
        </MapContainer>
    </div>
  );
};

export default MapComponent;
