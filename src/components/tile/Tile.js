import React from "react";

export const Tile = ({ element }) => {
  const values = Object.values(element);

  return (
    <div className="tile-container">
      { values.map((value, index) => {
        if (index == 0) {
          return <p className="tile-title">{value}</p>
        } else {
          return <p className="tile" >{value}</p>
        }
      })}
    </div>
  );
};
