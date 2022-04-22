import React, { useState } from "react";
import Color from "../interfaces/interfaces";

interface ColorBarProps {
  colorInfo: Color;
}

const ColorBar = ({ colorInfo }: ColorBarProps) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex m-2">
      <div onClick={handleClick}>
        <svg
          viewBox={revealed ? "0 0 1 1" : "0 0 7 1"}
          fill={colorInfo.hex}
          className={revealed ? "w-[360px] h-[360px]" : "w-[840px] h-[120px]"}
        >
          <path d="M 0,0 v 1 h 7 v -1 z" />
        </svg>
      </div>
      {revealed && (
        <p className="ml-4 text-left text-white font-bold">
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
