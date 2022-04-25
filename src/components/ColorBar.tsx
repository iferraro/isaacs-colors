import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Color from "../interfaces/interfaces";

interface ColorBarProps {
  colorInfo: Color;
}

const ColorBar = ({ colorInfo }: ColorBarProps) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex my-2 mx-auto" onClick={handleClick}>
      <svg
        viewBox="0 0 7 1"
        fill={colorInfo.hex}
        className="w-[840px] h-[120px] transition in-expo duration-150 hover:opacity-75"
      >
        <path d="M 0,0 v 1 h 7 v -1 z" />
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
        className="flex justify-center items-center"
      >
        <p className="ml-4 font-theme text-white text-2xl">
          {colorInfo.name}
          <br />
          {colorInfo.hex}
          <br />
          {colorInfo.rgb}
        </p>
      </Transition>
    </div>
  );
};

export default ColorBar;
