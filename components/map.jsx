import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import React from "react";
function RenderMap() {
  return (
    <Map
      initialViewState={{
        longitude: 132.455292,
        latitude: 34.385204,
        zoom: 10,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoiYmFkdTU2IiwiYSI6ImNsM2x2Y2VteTBnN2EzYnA1a3EwbnltanUifQ.8ahEwkB-cvNWVfggQ27Nfg">
      <GeolocateControl />
      <Marker longitude={132.455292} latitude={34.385204} anchor="bottom">
        <img width={20} height={30} src="./marker.png" />
      </Marker>
      <NavigationControl />
    </Map>
  );
}
export default RenderMap;
