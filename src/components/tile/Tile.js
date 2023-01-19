import React from "react";

export const Tile = ({ element, index }) => {
  const values = Object.values(element);

  return (
    <div className="tile-container">
      <h3>{index+1}</h3>
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
