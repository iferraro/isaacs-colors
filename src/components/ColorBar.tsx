import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Color from "../interfaces/interfaces";
import CopyButton from "./CopyButton";

interface ColorBarProps {
  colorInfo: Color;
}

const ColorBar = ({ colorInfo }: ColorBarProps) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex items-center my-4 w-full">
      <svg
        viewBox={revealed ? "0 0 3 3" : "0 0 12 3"}
        fill={colorInfo.hex}
        className={
          revealed
            ? "w-1/4 h-full transition-[width] out-expo duration-150"
            : "w-full h-full transition-[width] in-expo duration-150"
        }
        onClick={handleClick}
      >
        <path d={revealed ? "M 0,0 v 3 h 3 v -3 z" : "M 0,0 v 3 h 12 v -3 z"} />
      </svg>
      <div
        className={
          revealed
            ? "w-full transition-[width] out-expo duration-150"
            : "transition-[width] in-expo duration-150"
        }
      >
        <Transition
          as="div"
          show={revealed}
          unmount={false}
          enter="transition-opacity duration-150 delay-150 in-expo"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 out-expo"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex flex-col text-center ml-4 p-4 font-theme text-left text-2xl text-white border-2 border-white border-dashed rounded-lg">
            <h2 className="text-3xl">{colorInfo.name}</h2>
            <hr className="my-2 text-white" />
            <span className="flex my-2 justify-center">
              <span id="hexval" className="flex mr-4">
                {colorInfo.hex}
                <CopyButton colorValue={colorInfo.hex}/>
              </span>
              <span id="rgbval" className="flex">
                {colorInfo.rgb}
                <CopyButton colorValue={colorInfo.rgb}/>
              </span>
            </span>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default ColorBar;
