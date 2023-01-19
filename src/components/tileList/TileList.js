import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => {
        return <Tile contact={contact} ></Tile>
      })}
    </div>
  );
};
