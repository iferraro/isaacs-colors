import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BarContainer from "./components/BarContainer";

const blobURI =
  "https://isaacscolorsstorage.blob.core.windows.net/primary/isaacs-custom-colors.json";

interface Color {
  name: string;
  hex: string;
}

const App = () => {
  const [allColors, setAllColors] = useState<Array<Color>>([]);
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

  return (
    <div className="flex flex-col text-center p-2 bg-black">
      <Header />
      <BarContainer allColors={...allColors} />
      <Footer />
    </div>
  );
};

export default App;
