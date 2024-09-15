import { Path, useMap } from "@mappedin/react-sdk";
import React from "react"

export default function DrawPath() {
  const { mapData, mapView } = useMap();

  const space1 = mapData
    .getByType("space")
    .find((space) => space.name.includes("Focus"));
  const space2 = mapData
    .getByType("space")
    .find((space) => space.name.includes("Elm"));

  if (space1 == null || space2 == null) {
    return null;
  }

  const directions = mapView.getDirections(space1, space2);

  return directions ? (
    <Path
      coordinate={directions.coordinates}
      options={{ color: "goldenrod" }}
    />
  ) : null;
}
