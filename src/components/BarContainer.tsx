import React from "react";
import Color from "../interfaces/interfaces";
import ColorBar from "./ColorBar";

interface ContainerProps {
  allColors: Color[];
}

const BarContainer = (props: ContainerProps) => {
  const colorBars = props.allColors.map((color: Color) => {
    return (
      // keys are hex values without the hashtag
      <ColorBar
        key={color.hex.substring(1)}
        name={color.name}
        hex={color.hex}
        rgb={color.rgb}
      />
    );
  });

  return <div className="flex flex-col justify-center">{colorBars}</div>;
};

export default BarContainer;
