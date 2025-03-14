'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2h1c2h1LXNpbmdoIiwiYSI6ImNtN3hudWR3YjAxMWYybHNmN3p0ZTNoY20ifQ.JL_UC09YqYLKew0IsRG6sA';

const MapboxGlobe = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const defaultZoom = 1; // Default zoom level
    const zoomedInLevel = 6; // Zoom level when clicking a marker

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            projection: 'globe',
            zoom: defaultZoom,
            center: [30, 15]
        });

        map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.enable();

        map.on('style.load', () => {
            map.setFog({});
            loadMarkers(map);
        });

        return () => map.remove();
    }, []);

    const loadMarkers = async (map: mapboxgl.Map) => {
        try {
            const response = await fetch('/coordinates.json');
            const data = await response.json();

            console.log("Fetched Data:", data);

            if (!Array.isArray(data)) {
                console.error("Invalid JSON format. Expected an array.");
                return;
            }

            const markers: { [key: string]: { count: number; coords: [number, number] } } = {};

            // Aggregate alumni count per location
            data.forEach(({ latitude, longitude }) => {
                if (isNaN(latitude) || isNaN(longitude)) return;

                const key = `${latitude},${longitude}`;
                if (!markers[key]) {
                    markers[key] = { count: 1, coords: [longitude, latitude] };
                } else {
                    markers[key].count += 1;
                }
            });

            // Add clustered markers with click-to-zoom feature
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
                            speed: 1.5, // Smooth transition
                        });
                    } else {
                        map.flyTo({
                            center: [30, 15], // Reset to default center
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

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default MapboxGlobe;
