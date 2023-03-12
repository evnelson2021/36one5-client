import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    const customIcon = new Icon({
        iconUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png',
        iconSize: [30, 30],
        // iconAnchor: [1, 1],
        // popupAnchor: [-0, -76]
    })

// ICONS:
// var myIcon = L.icon({
//     iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Circle-icons-arrow-down.svg/2048px-Circle-icons-arrow-down.svg.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'my-icon-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [22, 94]
// });

// L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

return <>
<div id="map" className="map-container">

    <MapContainer center={[36.1327, -86.7816]} zoom={11} style={{ height: "550px", width:"600px" }} scrollWheelZoom={true} > 
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
    
        <Marker position={[36.1627, -86.7816]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
        <Marker position={[36.1627, -86.8884]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
        <Marker position={[36.1627, -86.8316]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
        <Marker position={[36.0911, -86.816]} icon={customIcon}>
            <Popup>This is a venue.</Popup>
        </Marker >
    </MapContainer>

</div>
</>
}

// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//     }).addTo(map)