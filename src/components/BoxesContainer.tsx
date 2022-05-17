import React from "react";
import Color from "../interfaces/interfaces";
import ColorBox from "./ColorBox";

interface SquaresContainerProps {
  allColors: Color[];
}

const SquaresContainer = ({ allColors }: SquaresContainerProps) => {
  const colorBoxes = allColors.map((color: Color) => {
    return (
      // keys are hex values without the hashtag
      <ColorBox key={color.hex.substring(1)} colorInfo={color} />
    );
  });

  return (
    <>
      <p className="mb-8 font-theme text-center text-xl text-white">
        Click on a box
      </p>
      <div className="mx-auto mb-8 w-full max-w-2xl">{colorBoxes}</div>;
    </>
  );
};

export default SquaresContainer;
