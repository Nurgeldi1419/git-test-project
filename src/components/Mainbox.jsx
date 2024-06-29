import React from "react";
import img from "../image/designer_1.png";

const Mainbox = () => {
  return (
    <section className="flex mt-20">
      <div className="content px-40">
        <div className="TextBlock mb-10">
          <h1 className="Title text-5xl font-semibold text-wrap mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="Body1 mb-2 text-indigo-800	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            pariatur facere voluptates perspiciatis commodi asperiores vero
            nihil architecto labore, aliquid excepturi necessitatibus! Libero
            amet nihil ea omnis provident id, odio veritatis eum?
          </p>
          <p className="Body text-indigo-800	">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            voluptatum ea adipisci eveniet recusandae dignissimos?
          </p>
        </div>

        <div className="flex justify-between">
          <button className="bg-sky-950	text-white border-solid rounded p-1 w-32">
            Purchase Ui Kit
          </button>
          <button className="border-solid border-2  rounded border-black p-1 w-32 ">
            Learn more
          </button>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="object-scale-down" />
      </div>
    </section>
  );
};

export default Mainbox;
