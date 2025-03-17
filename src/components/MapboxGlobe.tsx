'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RecenterButton from './RecenterButton';
import MapMarkers from './MapMarkers';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

if (!mapboxgl.accessToken) {
    console.error("Mapbox Access Token is missing! Check your .env.local file.");
}

const defaultZoom = 1.3;
const MinZoom = 1;  
const MaxZoom = 11.5; 
const defaultCenter: [number, number] = [76, 20];

const MapboxGlobe = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            projection: 'globe',
            zoom: defaultZoom,
            center: defaultCenter,
            minZoom: MinZoom,  
            maxZoom: MaxZoom,  
        });

        mapRef.current = map;

        map.addControl(new mapboxgl.NavigationControl(), 'left');
        map.scrollZoom.enable();

        map.on('style.load', () => {
            map.setFog({
                color: 'rgba(200, 200, 200, 0.5)',
                "horizon-blend": 0.05,
                "range": [0.8, 8],
            });
            setMapLoaded(true);
        });

        return () => map.remove();
    }, []);

    const recenterMap = () => {
        if (mapRef.current) {
            mapRef.current.flyTo({
                center: defaultCenter,
                zoom: defaultZoom,
                speed: 1.5,
            });
        } else {
            console.error("Map instance not initialized");
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
            <RecenterButton onRecenter={recenterMap} />
            {mapLoaded && mapRef.current && <MapMarkers map={mapRef.current} />}
        </div>
    );
};

export default MapboxGlobe;
