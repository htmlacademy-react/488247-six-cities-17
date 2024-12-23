import {useRef, useEffect} from 'react';
import {Icon, Marker, Zoom, layerGroup} from 'leaflet';

import useMap from '../../hooks/use-map';

import { Prefix, MapSetting } from '../../const';
import type { PrefixType, Location, Point } from '../../types';
import 'leaflet/dist/leaflet.css';

type MapSectionProps = {
  prefix?: PrefixType;
  location: Location;
  points: Point[];
  activeOfferId: string | null;
  weelScalable?: Zoom;
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
  prefix = Prefix.Cities,
  location,
  points,
  activeOfferId,
  weelScalable,
}: MapSectionProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location, weelScalable);

  useEffect(() => {
    if (map) {
      map.setView([
        location.latitude,
        location.longitude
      ],
      location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach(({id, latitude, longitude}) => {
        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });

        marker.setIcon(
          activeOfferId !== null && id === activeOfferId
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
