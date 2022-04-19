import React from "react";
import ColorBar from "./ColorBar";

interface ColorProps {
    allColors: Array<Color>
}

const BarContainer = ({ allColors }) => {
  const colorBars = allColors.map((color: Color) => {
    return (
      // keys are hex values without the hashtag
      <ColorBar
        key={color.hex.substring(1)}
        name={color.name}
        hex={color.hex}
        rgb={hexToRGB(color.hex)}
      />
    );
  });

  return <div className="flex flex-col justify-center">{colorBars}</div>;
};

const valueChart: Map<string, number> = new Map([
  ["0", 0],
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["A", 10],
  ["B", 11],
  ["C", 12],
  ["D", 13],
  ["E", 14],
  ["F", 15],
]);

const hexToRGB = (hexValue: string) => {
  const hexUp = hexValue.toUpperCase();
  return `rgb(${sum(hexUp[1], hexUp[2])},
    ${sum(hexUp[3], hexUp[4])},
    ${sum(hexUp[5], hexUp[6])})`;
};

const sum = (charOne: string, charTwo: string) => {
  return 16 * valueChart.get(charOne)! + valueChart.get(charTwo)!;
};

export default BarContainer;
