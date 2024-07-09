import React from "react";
import img from "../assets/undraw_happy_news.png";
const Intro = () => {
  return (
    <section className="w-[90rem] mx-auto my-40 flex justify-around">
      <div className="w-2/5">
        <img src={img} alt="" className="" />
      </div>
      <div className="w-2/5">
        <h1 className="text-4xl text-sky-950 text-wrap mb-7 font-semibold	">
          Light Fast & Powerful
        </h1>
        <p className="mb-2 text-pretty text-base text-[#6F7CB2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          quaerat earum dolor unde nihil ratione commodi rerum neque, delectus
          similique blanditiis nisi facere qui deserunt illum doloremque beatae
          aspernatur? Error tempore iure libero consequatur esse?
        </p>
        <p className="text-[#6F7CB2] text-pretty text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          libero odio porro, reprehenderit voluptates enim.
        </p>
      </div>
    </section>
  );
};

export default Intro;
