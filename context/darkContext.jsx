"use client";

import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <AppContext.Provider value={{ mode, toggleMode }}>
      <section className={` theme ${mode} max-w-[1366px] px-10 mx-auto`}>
        {children}
      </section>
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
