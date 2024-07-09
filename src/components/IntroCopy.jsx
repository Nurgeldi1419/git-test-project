import React from "react";
import img from "../assets/undraw_social_influencer_sgsv.png";

function IntroCopy() {
  return (
    <section className="w-[90rem] my-40 mx-auto flex justify-around">
      <div className="w-2/5">
        <img src={img} alt="" />
      </div>
      <div className="w-2/5">
        <h1 className="text-4xl text-sky-950 text-wrap mb-7 font-semibold	">
          Light Fast & Powerful
        </h1>
        <p className="text-[#6F7CB2]	mb-2 text-pretty text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <p className="text-[#6F7CB2]	mb-2 text-pretty text-base">
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim
        </p>
      </div>
    </section>
  );
}

export default IntroCopy;
