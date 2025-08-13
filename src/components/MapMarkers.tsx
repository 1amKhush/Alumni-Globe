import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';
import PopupCard from './PopupCard'; // Import the new PopupCard component
import { Feature, GeoJsonProperties, Geometry } from 'geojson';

interface MapMarkersProps {
  map: mapboxgl.Map;
}

const zoomedInLevel = 3;

const MapMarkers: React.FC<MapMarkersProps> = ({ map }) => {
  useEffect(() => {
    if (!map) return;

    const loadClusters = async () => {
      try {
        const response = await fetch('/coordinates.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid JSON format. Expected an array.");

        const features: Feature<Geometry, GeoJsonProperties>[] = data.map(({ lat, lng, name, batch, branch, company, position, linkedin, email, photo }) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          properties: {
            name,
            batch,
            branch,
            company,
            position,
            linkedin,
            email,
            photo
          },
        }));

        if (map.getSource('markers')) {
          if (map.getLayer('clusters')) map.removeLayer('clusters');
          if (map.getLayer('cluster-count')) map.removeLayer('cluster-count');
          if (map.getLayer('unclustered-point')) map.removeLayer('unclustered-point');
          map.removeSource('markers');
        }

        map.addSource('markers', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features,
          },
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'markers',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#51bbd6',
              10,
              '#f1f075',
              30,
              '#f28cb1',
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              15,
              10,
              20,
              30,
              25,
            ],
            'circle-stroke-width': 2,
            'circle-stroke-color': '#fff',
          },
        });

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'markers',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
          },
          paint: {
            'text-color': '#000',
          },
        });

        map.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'markers',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': '#ff5c5c',
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#fff',
          },
        });

        map.on('click', 'clusters', (e) => {
          const features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
          const clusterId = features[0].properties?.cluster_id;
          const source = map.getSource('markers') as mapboxgl.GeoJSONSource;

          source.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;
            map.flyTo({
              center: (features[0].geometry as any).coordinates,
              zoom: zoom || zoomedInLevel,
              speed: 1.5,
            });
          });
        });

        map.on('click', 'unclustered-point', (e) => {
          const coordinates = (e.features?.[0].geometry as any).coordinates.slice();
          const properties = e.features?.[0].properties;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          const popupNode = document.createElement('div');
          const root = createRoot(popupNode);
          root.render(<PopupCard properties={properties} />);

          new mapboxgl.Popup({ closeOnClick: true, closeButton: false, className: "alumni-popup" })
            .setLngLat(coordinates)
            .setDOMContent(popupNode)
            .addTo(map);

            const zoom = map.getZoom() > zoomedInLevel ? map.getZoom() : zoomedInLevel

          map.flyTo({
            center: coordinates,
            zoom: zoom || zoomedInLevel,
            speed: 1.5,
          });
        });

        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = '';
        });
        map.on('mouseenter', 'unclustered-point', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'unclustered-point', () => {
          map.getCanvas().style.cursor = '';
        });

      } catch (error) {
        console.error("Error loading clustered markers:", error);
      }
    };

    loadClusters();
  }, [map]);

  return null;
};

export default MapMarkers;