import "./Map.css";
import Navbar from "../components/Navbar";
import "@mappedin/react-sdk/lib/esm/index.css";
import Mappedin, {
  MapView,
  useMapData,
  useMap,
  Navigation,
} from "@mappedin/react-sdk";

import { useState } from "react";

import Labels from "../components/Labels";
import DrawPath from "../components/DrawPath";
import {useLocation } from "react-router-dom";


const FindDirections = (startLatitude, startLongitude, endSpace) => {
  const { mapData, mapView } = useMap();

  const start = mapView.createCoordinate(startLatitude, startLongitude);

  const directions = mapView.getDirections(start, endSpace);

  const [showDirections, setShowDirections] = useState(null);

  const [clicked, setClicked] = useState(0);

  const handleClick = (idx) => {
    setClicked(idx);
    setShowDirections(mapView.getDirections(directions.instructions[idx].coordinate, endSpace));
    
  } 



  return (
    <>
      {directions.instructions.map((element, index) => {
        var ret = element.action.type;
        if (element.action.bearing != null) {
          ret += " " + element.action.bearing;
        }
        ret += " in " + Math.ceil(element.distance) + " metre(s)";
        
        return <div className={clicked==index? "direction green": "direction"} key = {index}  onClick={() => {handleClick(index)}}>{ret}</div>
        
      })}
      {directions ? <Navigation directions={showDirections == null ? directions : showDirections} /> : null}
    </>
  );
};

const FindWashroom = ({ startLatitude, startLongitude }) => {
  const { mapData, mapView } = useMap();

  const washroomsList = mapData
    .getByType("space")
    .filter((space) => space.name.includes("Washroom"));

  // // console.log(washroomsList)
  const startCoordinate = mapView.createCoordinate(
    startLatitude,
    startLongitude
  );

  var shortestDistance = mapView.getDirections(
    startCoordinate,
    washroomsList[0]
  ).distance;
  // console.log(shortestDistance);
  var bestSpace = washroomsList[0];

  washroomsList.forEach((washroom) => {
    let distance = mapView.getDirections(startCoordinate, washroom).distance;
    // console.log(washroom)
    if (distance < shortestDistance) {
      bestSpace = washroom;
      distance = shortestDistance;
    }
  });

  return FindDirections(startLatitude, startLongitude, bestSpace);
};

export default function Map() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);
  const latitude = queryParams.get("latitude");
  const longitude = queryParams.get("longitude");
  const floorId = queryParams.get("floorId");

  // console.log(latitude, longitude, floorId)
  // const [searchParams] = useSearchParams();
  // const [latitude, setLatitude] = useState(searchParams.get("latitude"));
  // const [longitude, setLongitude] = useState(searchParams.get("longitude"));
  // const [floorId, setFloorId] = useState(searchParams.get("floorId"));

  // console.log(latitude, longitude, floorId);

  const { isLoading, error, mapData } = useMapData({
    key: "mik_Qar1NBX1qFjtljLDI52a60753",
    secret: "mis_CXFS9WnkQkzQmy9GCt4ucn2D68zNRgVa2aiJj5hEIFM8aa40fee",
    mapId: "66ce20fdf42a3e000b1b0545",
  });

  const view = (x) => {
    console.log(x);
    return x;
  };

  return (
    <>
      <Navbar />

      <section id="map">

        {mapData && latitude != null && longitude != null && floorId != null? (
          <MapView mapData={mapData} style={{width: '100%'}} options={{initialFloor: floorId}}>
            <FindWashroom startLatitude = {latitude} startLongitude = {-1*longitude} style={{width: '100%'}}/>
            {/* <CameraEvents/> */}
            <DrawPath/>
            {/* <DrawNavigation/> */}
            {/* <FloorSelector/> */}
            <Labels/>
            {/* <Markers/> */}
            {/* <Models/> */}
          </MapView>
        ) : null}
      </section>
    </>
  );
}

