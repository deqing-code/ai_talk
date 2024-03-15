import { useEffect, useState, KeyboardEvent } from "react";
import clsx from "clsx";

export const Talk = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div
        className={clsx([
          "flex-col",
          "h-[calc(100vh-10rem)]",
          "w-full",
          "overflow-y-auto",
          "rounded-sm",
          "px-8",
        ])}
      ></div>
    </div>
  );
};
