import React from "react";
import img from "../assets/undraw_mention.png";

const Cta = () => {
  return (
    <section className="w-[90rem] mx-auto flex justify-around mt-40">
      <div className="w-2/5">
        <img src={img} alt="" />
      </div>
      <div className="items-center w-2/5">
        <div className="items-start mb-10">
          <h1 className="text-4xl text-sky-950 text-wrap mb-7 font-semibold">
            Light Fast & Powerful
          </h1>
          <p className="text-[#6F7CB2] mb-2 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            quaerat earum dolor unde nihil ratione commodi rerum neque, delectus
            similique blanditiis nisi facere qui deserunt illum doloremque
            beatae aspernatur? Error tempore iure libero consequatur esse?
          </p>
          <p className="text-[#6F7CB2] text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            libero odio porro, reprehenderit voluptates enim.
          </p>
        </div>

        <button className="flex items-center justify-center border-solid rounded text-white bg-sky-950  py-0.5 px-3 mt-4 w-36 h-8">
          Purchase now
        </button>
      </div>
    </section>
  );
};

export default Cta;
