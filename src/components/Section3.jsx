import React from "react";
import img from "../image/undraw_mobile_login.png";

function Section3() {
  return (
    <section className="flex justify-around mb-40">
      <img src={img} alt="" />
      <div className="w-1/4">
        <h1 className="text-5xl text-sky-950 text-wrap mb-7 font-semibold	">
          Light Fast and Powerful
        </h1>
        <p className="text-indigo-800	mb-2 text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          quaerat earum dolor unde nihil ratione commodi rerum neque, delectus
          similique blanditiis nisi facere qui deserunt illum doloremque beatae
          aspernatur? Error tempore iure libero consequatur esse?
        </p>
      </div>
    </section>
  );
}

export default Section3;
