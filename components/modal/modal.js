import { useEffect, useRef } from "react";

export const ModalShell = ({ children, open, refs }) => {
  return (
    <>
      <div
        className={
          open ? "hidden" : "bg-black opacity-70 w-full h-full absolute inset-0"
        }
        ref={refs}
      ></div>
      <div
        className={
          open
            ? "hidden"
            : "absolute flex items-center inset-0 justify-center p-4 w-full"
        }
      >
        {children}
      </div>
    </>
  );
};
