import React from "react";

interface BarInfo {
  name: string;
  hex: string;
  rgb: string;
}

const ColorBar = (props: BarInfo) => {
  return (
    <div className="flex m-2">
      <svg width="300" height="100" viewBox="0 0 3 1" fill={props.hex}>
        <path d="M 0,0 v 1 h 3 v -1 z" />
      </svg>
      <p className="ml-4 text-white font-bold">
        {props.name}
        <br />
        {props.hex}
        <br />
        {props.rgb}
      </p>
    </div>
  );
};

export default ColorBar;
