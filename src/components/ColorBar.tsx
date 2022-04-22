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
    <div className="flex m-2">
      <div onClick={handleClick}>
        <svg
          viewBox="0 0 3 1"
          fill={colorInfo.hex}
          className="w-[360px] h-[120px] hover:opacity-75"
        >
          <path d="M 0,0 v 1 h 7 v -1 z" />
        </svg>
      </div>
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
        <p className="ml-4 text-left text-white font-bold">
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
