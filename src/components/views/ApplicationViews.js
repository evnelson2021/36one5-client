import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { Route, Routes } from 'react-router-dom';
import { Authorized } from './Authorized';
import { EventList } from '../events/EventList.js';
import { Map } from '../maps/Map.js';

export const ApplicationViews = () => {

		return <>
		<h2 className="title--main">36one5</h2>
		<div>Your one-stop shop for events</div>
			<Routes>
			<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				{/* <Route element={<Authorized />}> */}
					<Route path="/" element={<EventList />} />
					<Route path="map" >
						<Route index element={<Map />} /></Route>
					<Route path="events" >
						<Route index element={<EventList />} />
						{/* <Route path="new" element={<EventForm />} /> */}
						{/* <Route path="edit/:eventId" element={<UpdateEvent />} /> */}
					</Route>
					
				{/* </Route> */}
			</Routes>
		</>
	}

		

		{/* <div id="map">
			<MapContainer center={[36.1627, -86.7816]} zoom={4} style={{ height: "500px" }} scrollWheelZoom={true} ></MapContainer>
		</div> */}


