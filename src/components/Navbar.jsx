import React from "react";
import img from "../image/Landie.png";

const Navbar = () => {
  return (
    <div className="mx-auto flex flex-col wrap p-5  md:flex-row items-center justify-between mb-10">
      <div className="flex flex-wrap items-center text-base justify-center">
        <a className="mr-5">Home</a>
        <a className="mr-5">About</a>
        <a className="mr-5">Contact</a>
      </div>
      <div className="Logo flex justify-start">
        <img src={img} alt="fff" />
      </div>
      <button className="flex inline-flex items-center justify-center border-solid rounded py-2 px-4 mt-4 text-white bg-sky-950  py-1 px-3 mt-4 md:mt-0 w-32">
        Click Me
      </button>
    </div>
  );
};

export default Navbar;
