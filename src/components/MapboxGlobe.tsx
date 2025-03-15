'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RecenterButton from './RecenterButton';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2h1c2h1LXNpbmdoIiwiYSI6ImNtN3hudWR3YjAxMWYybHNmN3p0ZTNoY20ifQ.JL_UC09YqYLKew0IsRG6sA';

const MapboxGlobe = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null); // Fix: Store map instance

    const defaultZoom = 1.5; 
    const zoomedInLevel = 3;
    const defaultCenter: [number, number] = [76, 20];

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            projection: 'globe',
            zoom: defaultZoom,
            center: defaultCenter,
        });

        mapRef.current = map; // **Fix: Assign map instance to ref**

        const defNavBtn = new mapboxgl.NavigationControl();
        map.addControl(defNavBtn, 'bottom-left');
        
        map.scrollZoom.enable();

        map.on('style.load', () => {
            map.setFog({
                color: 'rgba(200, 200, 200, 0.5)',
                "horizon-blend": 0.05,
                "range": [0.8, 8], 
            });
            loadMarkers(map);
        });

        return () => map.remove();
    }, []);

    const loadMarkers = async (map: mapboxgl.Map) => {
        try {
            const response = await fetch('/coordinates.json');
            const data = await response.json();

            if (!Array.isArray(data)) {
                console.error("Invalid JSON format. Expected an array.");
                return;
            }

            const markers: { [key: string]: { count: number; coords: [number, number] } } = {};

            data.forEach(({ latitude, longitude }) => {
                if (isNaN(latitude) || isNaN(longitude)) return;

                const key = `${latitude},${longitude}`;
                if (!markers[key]) {
                    markers[key] = { count: 1, coords: [longitude, latitude] };
                } else {
                    markers[key].count += 1;
                }
            });

            Object.values(markers).forEach(({ count, coords }) => {
                const el = document.createElement('div');
                el.style.width = `${15 + count * 2}px`;
                el.style.height = `${15 + count * 2}px`;
                el.style.backgroundColor = 'red';
                el.style.color = 'white';
                el.style.borderRadius = '50%';
                el.style.display = 'flex';
                el.style.justifyContent = 'center';
                el.style.alignItems = 'center';
                el.style.fontSize = '12px';
                el.style.fontWeight = 'bold';
                el.style.border = '2px solid white';
                el.style.cursor = 'pointer';
                el.innerText = count.toString();

                const marker = new mapboxgl.Marker(el)
                    .setLngLat(coords)
                    .addTo(map);

                el.addEventListener('click', () => {
                    const currentZoom = map.getZoom();
                    if (currentZoom < zoomedInLevel) {
                        map.flyTo({
                            center: coords,
                            zoom: zoomedInLevel,
                            speed: 1.5, 
                        });
                    } else {
                        map.flyTo({
                            center: defaultCenter, 
                            zoom: defaultZoom,
                            speed: 1.5,
                        });
                    }
                });
            });

        } catch (error) {
            console.error("Error loading markers:", error);
        }
    };

    // **Fix: Now mapRef.current will contain the Mapbox instance**
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

    return(
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
            <RecenterButton onRecenter={recenterMap} />
        </div>
    );
};

export default MapboxGlobe;
