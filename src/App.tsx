import React, { useEffect, useState } from "react";
import axios from "axios";

const blobURI =
  "https://isaacscolorsstorage.blob.core.windows.net/primary/isaacs-custom-colors.json";

const App = () => {
  const [allColors, setAllColors] = useState([]);
  const getAllColors = async () => {
    try {
      const response = await axios.get(blobURI);
      setAllColors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllColors();
  }, []);

  const colorBars = allColors.map((color: Color) => {
    return (
      // keys are hex values without the hashtag
      <div
        key={color.hex.substring(1)}
        className="p-2 m-2 rounded-xl text-white bg-black"
      >
        {color.name}
        <br />
        {color.hex}
        <br />
        {hexToRGB(color.hex)}
      </div>
    );
  });

  return <div className="flex flex-col p-2">{colorBars}</div>;
};

interface Color {
  name: string;
  hex: string;
}

const valueChart = new Map<string, number>([
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

export default App;
