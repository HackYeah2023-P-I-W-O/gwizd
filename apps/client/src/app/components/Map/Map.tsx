import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet';

export function Map() {
    return (
        <MapContainer
            style={{ width: '100%', height: '100%' }}
            center={[50.05, 19.94]}
            zoom={8.5}
            zoomControl={false}
        >
            <ZoomControl position='topright' />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[50.05, 19.94]} />
            <Marker position={[50.25, 19.44]} />
            <Marker position={[49.85, 19.44]} />
            <Marker position={[49.85, 20.44]} />
        </MapContainer>
    );
}
