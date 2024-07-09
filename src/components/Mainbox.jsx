import React from "react";
import logo from "../assets/Landie.png";

const Mainbox = () => {
  return (
    <section className="flex flex-col h-[72.563rem] bg-no-repeat bg-contain bg-right bg-[url('/designer_1.png')]">
      <nav className="w-[90rem] mx-auto flex flex-col wrap p-5  md:flex-row items-center justify-between">
        <div className="flex flex-wrap items-center text-base justify-center">
          <a className="mr-10 text-sm">Home</a>
          <a className="mr-10 text-sm">About</a>
          <a className="mr-10 text-sm">Contact</a>
        </div>
        <div className="Logo flex justify-start">
          <img src={logo} alt="fff" />
        </div>
        <button className="flex items-center justify-center border-solid rounded text-white bg-sky-950 py-1 px-3 w-40 h-7 text-xs">
          Buy now
        </button>
      </nav>

      <div className="w-[90rem] mx-auto py-40">
        <div className="w-1/2">
          <div className="mb-10 ">
            <h1 className="text-5xl font-semibold text-wrap mb-7">
              Introduce Your Product Quickly & Effectively
            </h1>
            <p className="mb-2 text-[#505F98] text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p className="text-[#505F98]	text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              voluptatum ea adipisci eveniet recusandae dignissimos?
            </p>
          </div>

          <div className="flex justify-start">
            <button className="bg-sky-950	text-white border-solid rounded p-1 w-1/3 mr-8 ">
              Purchase Ui Kit
            </button>
            <button className="border-solid border-2  rounded border-black p-1 w-1/3">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainbox;
