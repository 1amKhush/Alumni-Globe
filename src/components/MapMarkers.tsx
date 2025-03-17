import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapMarkersProps {
    map: mapboxgl.Map;
}

const zoomedInLevel = 3;
const defaultZoom = 1.5;
const defaultCenter: [number, number] = [76, 20];

const MapMarkers: React.FC<MapMarkersProps> = ({ map }) => {
    useEffect(() => {
        if (!map) return;

        const loadMarkers = async () => {
            try {
                const response = await fetch('/coordinates.json');
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                const data = await response.json();
                if (!Array.isArray(data)) throw new Error("Invalid JSON format. Expected an array.");

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

                    new mapboxgl.Marker(el)
                        .setLngLat(coords)
                        .addTo(map);

                    el.addEventListener('click', () => {
                        const currentZoom = map.getZoom();
                        map.flyTo({
                            center: currentZoom < zoomedInLevel ? coords : defaultCenter,
                            zoom: currentZoom < zoomedInLevel ? zoomedInLevel : defaultZoom,
                            speed: 1.5,
                        });
                    });
                });
            } catch (error) {
                console.error("Error loading markers:", error);
            }
        };

        loadMarkers();
    }, [map]);

    return null;
};

export default MapMarkers;
