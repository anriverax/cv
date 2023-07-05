"use client";

import { useEffect, useState } from "react";
import cx from "classnames";

const Btn = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const handleClick = () => {
    if (scroll) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleMoveScroll = () => {
      if (window.scrollY > 195 && !scroll) setScroll(true);
      if (window.scrollY < 70 && scroll) setScroll(false);
    };
    window.addEventListener("scroll", handleMoveScroll, false);

    return () => window.removeEventListener("scroll", handleMoveScroll);
  }, [scroll]);
  return (
    <p
      className={cx(
        "fixed cursor-pointer w-9 h-9 rounded-[50%] right-10 bottom-20 z-[999] border-none shadow-[0_0_9px_4px_rgba(0_0_0_0.05)] transition-all duration-500 ease-in-out",
        {
          "hidden pointer-events-none": !scroll,
          "block bg-[#20396f] pointer-events-auto": scroll
        }
      )}
      title="Back to top"
      onClick={handleClick}
    >
      <span className="flex justify-center items-center w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          id="arrow-up"
          className="w-14 h-14"
        >
          <path
            fill="#ffffff"
            d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
          ></path>
        </svg>
      </span>
    </p>
  );
};

export default Btn;
