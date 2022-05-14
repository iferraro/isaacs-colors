import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Color from "../interfaces/interfaces";
import CopyButton from "./CopyButton";

interface ColorBoxProps {
  colorInfo: Color;
}

const ColorBox = ({ colorInfo }: ColorBoxProps) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed((revealed) => !revealed);
  };

  return (
    <div className="relative grid grid-rows-5 grid-cols-6 my-4 font-theme text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6 5"
        fill={colorInfo.hex}
        className="row-span-5 col-span-6"
        onClick={handleClick}
      >
        <path d="M 0,0 v 5 h 6 v -5 z" />
      </svg>
      <Transition
        as="div"
        show={revealed}
        unmount={false}
        enter="transition-opacity duration-150 in-expo"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150 out-expo"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-0 left-0 w-full h-full p-4 text-right bg-black opacity-60" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2 2"
          fill={colorInfo.hex}
          className="absolute top-4 right-4 bottom-4 left-4 row-start-1 row-span-3 col-start-1 col-span-3"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        <button
          type="button"
          className="absolute top-0 right-0 w-12 h-12 text-3xl font-bold opacity-60 transition in-expo duration-150 hover:scale-125 hover:opacity-100"
          onClick={handleClick}
        >
          &times;
        </button>
        <div className="absolute bottom-4 right-4">
          <h1 className="text-right text-3xl opacity-60">{colorInfo.name}</h1>
          <div className="flex flex-col my-2 text-right text-xl">
            <div>
              <span className="opacity-60">{colorInfo.hex}</span>
              <CopyButton colorValue={colorInfo.hex} />
            </div>
            <div>
              <span className="opacity-60">{colorInfo.rgb}</span>
              <CopyButton colorValue={colorInfo.rgb} />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ColorBox;
