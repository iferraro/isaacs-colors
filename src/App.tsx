import React, { useEffect, useState } from "react";
import axios from "axios";
import Color from "./interfaces/interfaces";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoxesContainer from "./components/BoxesContainer";

const App = () => {
  const [allColors, setAllColors] = useState<Array<Color>>([]);
  
  const getAllColors = async () => {
    try {
      const response = await axios.get("isaacs-custom-colors.json");
      const newColors = response.data.map((c: Color) => {
        return { ...c, rgb: hexToRGB(c.hex) };
      });
      setAllColors(newColors);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllColors();
  }, []);

  return (
    <div className="flex flex-col p-4 bg-black">
      <Header />
      <BoxesContainer allColors={allColors} />
      <Footer />
    </div>
  );
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

export default App;
