'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2h1c2h1LXNpbmdoIiwiYSI6ImNtN3hudWR3YjAxMWYybHNmN3p0ZTNoY20ifQ.JL_UC09YqYLKew0IsRG6sA';

const MapboxGlobe = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            projection: 'globe',
            zoom: 1,
            center: [30, 15]
        });

        map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.enable(); // Enable scroll zoom

        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });

        // Rotation settings
        const secondsPerRevolution = 240;
        const maxSpinZoom = 5;
        const slowSpinZoom = 3;
        let userInteracting = false;
        const spinEnabled = true;

        const spinGlobe = () => {
            const zoom = map.getZoom();
            if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
                let distancePerSecond = 360 / secondsPerRevolution;
                if (zoom > slowSpinZoom) {
                    const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                    distancePerSecond *= zoomDif;
                }
                const center = map.getCenter();
                center.lng -= distancePerSecond;
                map.easeTo({ center, duration: 1000, easing: (n) => n });
            }
        };

        map.on('mousedown', () => (userInteracting = true));
        map.on('dragstart', () => (userInteracting = true));
        map.on('moveend', () => spinGlobe());

        spinGlobe();

        return () => map.remove();
    }, []);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default MapboxGlobe;