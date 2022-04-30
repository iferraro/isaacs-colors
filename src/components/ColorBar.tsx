import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Color from "../interfaces/interfaces";

interface ColorBarProps {
  colorInfo: Color;
}

type ColorBarState = "long" | "short" | "square";

const ColorBar = ({ colorInfo }: ColorBarProps) => {
  const [currentBarState, setCurrentBarState] = useState<ColorBarState>("long");

  const handleClick = () => {
    if (currentBarState === "long") {
      // turn long bar into short bar after n milliseconds
      // turn short bar into square after n millis
      // mount info?
      setTimeout(() => {
        setCurrentBarState("short");
      }, 150);
      setTimeout(() => {
        setCurrentBarState("square");
      }, 300);
    }
    if (currentBarState === "square") {
      // unmount info?
      // turn square into short bar after n milliseconds
      // turn short bar into square after n milliseconds
      setTimeout(() => {
        setCurrentBarState("short");
      }, 150);
      setTimeout(() => {
        setCurrentBarState("long");
      }, 300);
    }
    return;
  };

  const getViewBox = () => {
    if (currentBarState === "long") {
      return "0 0 7 1";
    }
    if (currentBarState === "short") {
      return "0 0 3 1";
    }
    return "0 0 1 1";
  };

  const getClassName = () => {
    if (currentBarState === "long") {
      return "w-[840px] h-[120px] transition-[width, height] in-expo duration-150";
    }
    if (currentBarState === "short") {
      return "w-[360px] h-[120px] transition-[width, height] in-expo duration-150";
    }
    return "w-[360px] h-[360px] transition-[width, height] in-expo duration-150";
  };

  const getPathD = () => {
    if (currentBarState === "long") {
      return "M 0,0 v 1 h 7 v -1 z";
    }
    if (currentBarState === "short") {
      return "M 0,0 v 1 h 3 v -1 z";
    }
    return "M 0,0 v 1 h 1 v -1 z";
  };

  return (
    <div className="flex my-4">
      <svg
        viewBox={getViewBox()}
        fill={colorInfo.hex}
        className={getClassName()}
        onClick={handleClick}
      >
        <path d={getPathD()} />
      </svg>
      <div className="flex justify-center items-center">
        <Transition
          as="div"
          show={currentBarState === "square"}
          unmount={false}
          enter="transition-opacity duration-150 delay-150 in-expo"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 out-expo"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="ml-4 font-theme text-2xl text-white">
            {colorInfo.name}
            <br />
            {colorInfo.hex}
            <br />
            {colorInfo.rgb}
          </p>
        </Transition>
      </div>
    </div>
  );
};

export default ColorBar;
