import React, { useState, useEffect, useCallback } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { apiMaps } from '../../services/api';
import { useAddress } from '../../context/useAddress';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, ContainerMap, Error } from './styles';

interface IGeoLocation {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

interface IResults {
  results: IGeoLocation[];
  error_message?: string;
}

const Map: React.FC = () => {
  const { dataAddress } = useAddress();
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 55,
    latitude: 0,
    longitude: 0,
    zoom: 15,
  });
  const [error, setError] = useState<string | null>(null);
  const [geoLocation, setGeoLocation] = useState<IGeoLocation | null>(null);

  const handleResize = useCallback(() => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight - 55,
    });
  }, [viewport]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    async function getGeolocation() {
      try {
        const { data }: { data: IResults } = await apiMaps.get(
          `/geocode/json?address=${dataAddress?.logradouro}&key=AIzaSyDn3kjobwhdVVPyANhoHL0fAVhjXpSRUa4`,
        );

        if (data.error_message) {
          throw 'Error';
        }

        const [geometry]: IGeoLocation[] = data.results;

        setGeoLocation(geometry);
        setViewport(actualValue => ({
          ...actualValue,
          latitude: geometry.geometry.location.lat,
          longitude: geometry.geometry.location.lng,
        }));
      } catch (err) {
        setError('Erro ao obter a localização');
      }
    }

    if (dataAddress?.logradouro) {
      getGeolocation();
    }
  }, [dataAddress]);

  return (
    <Container>
      {geoLocation ? (
        <ContainerMap data-testid="mapgl">
          <MapGL
            mapStyle="mapbox://styles/mapbox/basic-v9"
            mapboxApiAccessToken={
              'pk.eyJ1IjoiYW5kcmV2cmNvZWxobyIsImEiOiJjanZiNWZ3bGkxamQ5NGFtZW9yOTU4ODY1In0.ISHC_i_ClZelfGb3KF_RCA'
            }
            {...viewport}
            onViewportChange={setViewport}>
            <Marker
              data-testid="mapgl"
              latitude={geoLocation.geometry.location.lat}
              longitude={geoLocation.geometry.location.lng}>
              <i className="fa fa-map-pin"></i>
            </Marker>
          </MapGL>
        </ContainerMap>
      ) : null}
      {error && <Error data-testid="error-map">{error}</Error>}
    </Container>
  );
};

export default Map;