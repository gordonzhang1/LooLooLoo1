import "./Map.css";
import Navbar from "../components/Navbar";
import "@mappedin/react-sdk/lib/esm/index.css";
import Mappedin, { MapView, useMapData, useMap, Navigation } from "@mappedin/react-sdk";
import {
  show3dMap, getMapData
} from "@mappedin/mappedin-js";

import {useState, useEffect} from "react";

import Labels from "../components/Labels";
import Markers from "../components/Markers";
import DrawPath from "../components/DrawPath";
import DrawNavigation from "../components/DrawNavigation";
import CameraEvents from "../components/CameraEvents";
import FloorSelector from "../components/FloorSelector";
import { useSearchParams } from 'react-router-dom';
import { Coordinate } from "@mappedin/mappedin-js";
import Direction from "../components/Direction";


const FindDirections = (startLatitude, startLongitude, endSpace) => {
  const { mapData, mapView } = useMap();


  const start = mapView.createCoordinate(startLatitude, startLongitude);

  const directions = mapView.getDirections(start, endSpace);
  
  return (
    <>
      {directions.instructions.map(element => {
        var ret = element.action.type;
        if (element.action.bearing != null){
          ret += " " + element.action.bearing;
        }
        ret += " in " + Math.ceil(element.distance) + " metre(s)";
        return <Direction text={ret}/>
      })}
      {directions ? <Navigation directions={directions} /> : null}
    </>
  );
}

const FindWashroom = ({startLatitude, startLongitude}) => {
  const { mapData, mapView } = useMap();

  const washroomsList = mapData
    .getByType("space")
    .filter((space) => space.name.includes("Washroom"));
  
  // // console.log(washroomsList)
  const startCoordinate = mapView.createCoordinate(startLatitude, startLongitude);

  var shortestDistance = mapView.getDirections(startCoordinate, washroomsList[0]).distance;
  // console.log(shortestDistance);
  var bestSpace = washroomsList[0];

  washroomsList.forEach((washroom) => {
    let distance = mapView.getDirections(startCoordinate, washroom).distance;
    // console.log(washroom)
    if (distance < shortestDistance){
      bestSpace = washroom;
      distance = shortestDistance;
    }
  })

  return FindDirections(startLatitude, startLongitude, bestSpace);

}


function Map() {
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
  }

  return (
    <>
      <div className="homepage-container">
        <div className="navbar-app">
          <Navbar />
        </div>
      </div>

      <section id="map">
        {/* <iframe
          href="https://www.mappedin.com/"
          title="Mappedin Map"
          name="Mappedin Map"
          allow="clipboard-write; web-share"
          width="100%"
          height="650"
          frameBorder="0"
          // style="border:0"
          src="https://app.mappedin.com/map/66ce20fdf42a3e000b1b0545?embedded=true"
        ></iframe> */}

        {mapData ? (
          <MapView mapData={mapData} style={{width: '100%'}} options={{initialFloor: "m_a93a33b76d3261c5"}}>
            <FindWashroom startLatitude = {43.47322898671156} startLongitude = {-80.53978074181718} style={{width: '100%'}}/>
            {/* <CameraEvents/> */}
            <DrawPath/>
            {/* <DrawNavigation/> */}
            {/* <FloorSelector/> */}
            <Labels/>
            <Markers/>
            {/* <Models/> */}
          </MapView>
        ) : null}
          
      </section>

      
    </>
          );
}

export default Map;
