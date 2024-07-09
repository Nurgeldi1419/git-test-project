import React from "react";
import price from "../assets/Price.png";

function Pricing() {
  return (
    <section className="py-80 flex flex-col justify-center bg-cover bg-[url('/Rectangle.png')]">
      <div className="flex mx-auto justify-center flex-col w-1/3">
        <h1 className="text-4xl text-sky-950 text-wrap mb-7 font-semibold text-center">
          A price to suit everyone
        </h1>
        <p className="text-[#6F7CB2] text-pretty text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
      </div>
      {/* <h1 className="text-6xl text-sky-950 text-wrap pt-10 pb-2 font-semibold text-center block">
        $40
      </h1> */}

      {/* <div className="justify-items-center"></div> */}
      <img
        src={price}
        alt=""
        className="object-scale-down justify-items-center h-20"
      />
      <h6 className="text-base text-center pb-10 text-[#37447E]">
        UI Design Kit
      </h6>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm pb-2 text-[#5D6970]">See, One price. Simple</p>
        <div>
          <button className="flex items-center justify-center border-solid rounded text-white bg-sky-950 py-1 px-3 w-48 h-8">
            Purchase Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
