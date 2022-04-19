import React, { useState } from "react";

interface BarProps {
  name: string;
  hex: string;
  rgb: string;
}

const ColorBar = ({ name, hex, rgb }: BarProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex m-2" onClick={handleClick}>
      <svg
        width={open ? 360 : 840}
        height={open ? 360 : 120}
        viewBox={open ? "0 0 1 1" : "0 0 7 1"}
        fill={hex}
      >
        <path d="M 0,0 v 1 h 7 v -1 z" />
      </svg>
      {open && (
        <p className="ml-4 text-white font-bold">
          {name}
          <br />
          {hex}
          <br />
          {rgb}
        </p>
      )}
    </div>
  );
};

export default ColorBar;
