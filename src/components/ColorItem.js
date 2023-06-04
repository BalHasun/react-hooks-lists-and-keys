import React from "react";

const ColorItem = ({ key, color }) => {
  return (
    <div key={color} style={{ color: color }}>
      {color}
    </div>
  );
};

export default ColorItem;
