import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    const customIcon = new Icon({
        iconUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png',
        iconSize: [20, 20],
        // iconAnchor: [1, 1],
        // popupAnchor: [-0, -76]
    })

return <>
<div id="map" className="map-container">

    <MapContainer center={[36.1627, -86.7816]} zoom={12} style={{ height: "500px" }} scrollWheelZoom={true} > 
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
    
        <Marker position={[36.1627, -86.7816]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
        <Marker position={[36.1627, -86.8884]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
        <Marker position={[36.1627, -86.5816]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
        <Marker position={[36.0911, -86.7816]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
    </MapContainer>

</div>
</>
}