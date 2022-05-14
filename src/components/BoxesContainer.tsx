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
      <p className="mt-8 font-theme text-center text-xl text-white">
        Click on a square
      </p>
      <div className="mx-auto mt-4 w-full max-w-2xl">{colorBoxes}</div>;
    </>
  );
};

export default SquaresContainer;
