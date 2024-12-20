import {useRef, useEffect} from 'react';
import {Icon, Marker, Zoom, layerGroup} from 'leaflet';

import useMap from '../../hooks/use-map';

import { BlockPrefix, MapSetting } from '../../const';
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
  iconUrl: MapSetting.MarkerDefaultUrl,
  iconSize: MapSetting.MarkerSize,
  iconAnchor: MapSetting.MarkerAncor,
});

const currentCustomIcon = new Icon({
  iconUrl: MapSetting.MarkerActiveUrl,
  iconSize: MapSetting.MarkerSize,
  iconAnchor: MapSetting.MarkerAncor,
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
