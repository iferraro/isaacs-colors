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
    <div className="relative grid grid-rows-5 grid-cols-5 my-4 font-theme text-white">
      <svg
        viewBox="0 0 1 1"
        fill={colorInfo.hex}
        className="row-span-5 col-span-5"
        onClick={handleClick}
      >
        <path d="M 0,0 v 1 h 1 v -1 z" />
      </svg>
      <svg
        viewBox="0 0 2 2"
        fill={colorInfo.hex}
        className="absolute top-4 left-4 row-start-1 row-span-2 col-start-1 col-span-2 z-20"
      >
        <circle cx={1} cy={1} r={1} />
      </svg>
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
        <div className="absolute top-0 right-0 flex items-center col-start-1 col-span-5 row-start-1 row-span-5 p-4 w-full h-full text-right bg-black opacity-60 z-0">
          <button
            type="button"
            className="absolute top-0 right-0 p-2 w-12 h-12 text-3xl font-bold transition in-expo duration-150 z-10 hover:scale-125"
            onClick={handleClick}
          >
            &times;
          </button>
          <div className="absolute bottom-1/4 right-4 w-full">
            <div className="text-right text-3xl">{colorInfo.name}</div>
            <div className="flex flex-col my-2 text-right text-xl">
              <span>
                {colorInfo.hex}
                <CopyButton colorValue={colorInfo.hex} />
              </span>
              <span>
                {colorInfo.rgb}
                <CopyButton colorValue={colorInfo.rgb} />
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ColorBar;
