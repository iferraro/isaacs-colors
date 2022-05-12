import React from "react";
import Color from "../interfaces/interfaces";
import ColorSquare from "./ColorSquare";

interface SquaresContainerProps {
  allColors: Color[];
}

const SquaresContainer = ({ allColors }: SquaresContainerProps) => {
  const colorSquares = allColors.map((color: Color) => {
    return (
      // keys are hex values without the hashtag
      <ColorSquare key={color.hex.substring(1)} colorInfo={color} />
    );
  });

  return (
    <>
      <p className="mt-8 font-theme text-center text-xl text-white">
        Click on a square to see its name, HEX, and RGB values
      </p>
      <div className="mx-auto mt-4 w-full max-w-2xl">{colorSquares}</div>;
    </>
  );
};

export default SquaresContainer;
