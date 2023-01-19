import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {
  return (
    <div>
      {array.map((element, index) => {
        return <Tile element={element} index={index} ></Tile>
      })}
    </div>
  );
};
