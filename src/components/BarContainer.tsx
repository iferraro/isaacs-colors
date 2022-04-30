import React from "react";
import Color from "../interfaces/interfaces";
import ColorBar from "./ColorBar";

interface BarContainerProps {
  allColors: Color[];
}

const BarContainer = ({ allColors }: BarContainerProps) => {
  const colorBars = allColors.map((color: Color) => {
    return (
      // keys are hex values without the hashtag
      <ColorBar
        key={color.hex.substring(1)}
        colorInfo={color}
      />
    );
  });
  
  return <div className="mx-auto mt-8">{colorBars}</div>;
};

export default BarContainer;
