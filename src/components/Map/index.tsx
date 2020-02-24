import React, { useState, useEffect, useCallback } from 'react';
import MapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const Map: React.FC = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 55,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

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

  return (
    <MapGL
      mapStyle="mapbox://styles/mapbox/basic-v9"
      mapboxApiAccessToken={
        'pk.eyJ1IjoiYW5kcmV2cmNvZWxobyIsImEiOiJjanZiNWZ3bGkxamQ5NGFtZW9yOTU4ODY1In0.ISHC_i_ClZelfGb3KF_RCA'
      }
      {...viewport}
      onViewportChange={setViewport}
    />
  );
};

export default Map;
