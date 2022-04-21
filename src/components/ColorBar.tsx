import React, { useState } from "react";
import Color from "../interfaces/interfaces";

interface ColorBarProps {
  colorInfo: Color;
}

const ColorBar = ({ colorInfo }: ColorBarProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex m-2">
      <div onClick={handleClick}>
        <svg
          width={open ? 360 : 840}
          height={open ? 360 : 120}
          viewBox={open ? "0 0 1 1" : "0 0 7 1"}
          fill={colorInfo.hex}
        >
          <path d="M 0,0 v 1 h 7 v -1 z" />
        </svg>
      </div>
      {open && (
        <p className="ml-4 text-white font-bold">
          {colorInfo.name}
          <br />
          {colorInfo.hex}
          <br />
          {colorInfo.rgb}
        </p>
      )}
    </div>
  );
};

export default ColorBar;
