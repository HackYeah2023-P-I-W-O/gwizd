import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

export function Map() {
    return (
        <MapContainer
            style={{ width: '100%', height: '100%' }}
            center={[51.505, -0.09]}
            zoom={13}
            zoomControl={false}
        >
            <ZoomControl position='topright' />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    );
}
