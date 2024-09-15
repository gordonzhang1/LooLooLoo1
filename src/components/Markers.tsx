import { Marker, useMap } from "@mappedin/react-sdk";
import { useState } from "react";
import React from "react";

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const colorString = ("000000" + randomColor).slice(-6);
  return "#" + colorString;
}

function CustomMarker() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "10px",
        border: "1px solid black",
        userSelect: "none",
      }}
      onClick={() => {
        setColor(getRandomHexColor());
      }}
    >
      Hello, world!
    </div>
  );
}

export default function Labels() {
  const { mapData, mapView } = useMap();

  return (
    <>
      <Marker
        target={
          mapData
            .getByType("space")
            .filter((space) => space.floor.id === mapView.currentFloor.id)[15]
            .center
        }
        options={{ rank: "always-visible" }}
      >
        <CustomMarker />
      </Marker>
    </>
  );
}
