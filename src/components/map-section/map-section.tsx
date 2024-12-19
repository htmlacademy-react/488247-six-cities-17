import {useRef, useEffect} from 'react';
import {Icon, Marker, Zoom, layerGroup} from 'leaflet';

import useMap from '../../hooks/use-map';

import { BlockPrefix, MapSettings } from '../../const';
import type { BlockPrefixType, Location, Point } from '../../types';
import 'leaflet/dist/leaflet.css';

type MapSectionProps = {
  prefix?: BlockPrefixType;
  cityLocation: Location;
  points: Point[];
  activeOfferId: string | null;
  scalable?: Zoom;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapSettings.MarkerDefaultUrl,
  iconSize: [27, 39],
  iconAnchor: [15, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: MapSettings.MarkerActiveUrl,
  iconSize: [27, 39],
  iconAnchor: [15, 39]
});

export default function MapSection({
  prefix = BlockPrefix.Cities,
  cityLocation,
  points,
  activeOfferId,
  scalable,
}: MapSectionProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation, scalable);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker.setIcon(
          activeOfferId !== null && point.id === activeOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, activeOfferId]);

  return (
    <section className={`${prefix}__map map`} ref={mapRef}/>
  );
}
