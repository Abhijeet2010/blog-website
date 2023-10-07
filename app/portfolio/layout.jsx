import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mt-10 px-10 ">
      <h1 className=" tracking-[25px] text-center  text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 via-purple-500">
        OUR WORKS
      </h1>
      {children}
    </div>
  );
};

export default Layout;
