import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer, Zoom} from 'leaflet';

import { MapSettings } from '../const';
import {Location} from '../types';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: Location,
  scalable?: Zoom,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (map) {
      map.panTo({
        lat: location.latitude,
        lng: location.longitude
      });
    }
  }, [location, map]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
        scrollWheelZoom: scalable,
      });

      const layer = new TileLayer(
        MapSettings.Layer, { attribution: MapSettings.Copiright }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location, scalable]);

  return map;
}
