import React from "react";
import img from "../image/undraw_mention.png";

const Section2 = () => {
  return (
    <section className="mx-auto flex justify-around mb-40">
      <img src={img} alt="" />
      <div className="items-center w-1/4">
        <h1 className="text-5xl text-sky-950 text-wrap mb-7 font-semibold">
          {" "}
          Light Fast and Powerful
        </h1>
        <p className="text-indigo-800	mb-2 text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          quaerat earum dolor unde nihil ratione commodi rerum neque, delectus
          similique blanditiis nisi facere qui deserunt illum doloremque beatae
          aspernatur? Error tempore iure libero consequatur esse?
        </p>
        <p className="text-indigo-800 text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          libero odio porro, reprehenderit voluptates enim.{" "}
        </p>
      </div>
    </section>
  );
};

export default Section2;
