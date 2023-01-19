import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {
  return (
    <div>
      {array.map((element) => {
        return <Tile element={element} ></Tile>
      })}
    </div>
  );
};
