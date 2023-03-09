import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

export const ApplicationViews = () => {
// 	var map = L.map('map').setView([36.1627, 86.7816], 13);

// 	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

	return <>
		<h1 className="title--main">Honey Rae Repairs</h1>
		<div>Your one-stop shop for repairing your tech</div>

		{/* <div id="map">
			<MapContainer center={[36.1627, -86.7816]} zoom={4} style={{ height: "500px" }} scrollWheelZoom={true} ></MapContainer>
		</div> */}
	</>
}

