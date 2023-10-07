"use client";

import { AppContext } from "@/context/darkContext";
import React, { useContext } from "react";

const Darkmode = () => {
  const { toggleMode, mode } = useContext(AppContext);

  return (
    <div
      className="p-1 w-[62px] h-[24px] rounded-[30px] border-[1.5px] border-[#53c28b70]  flex justify-between items-center relative cursor-pointer"
      onClick={toggleMode}
    >
      <div>🌙</div>
      <div>🌞</div>
      <div
        className={`w-[20px] h-[20px] rounded-full bg-[#53c28b] absolute ${
          mode === "light" ? "right-1" : "left-1"
        }  `}
      />
    </div>
  );
};

export default Darkmode;
