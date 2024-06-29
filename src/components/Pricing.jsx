import React from "react";

function Pricing() {
  return (
    <section className="mx-auto px-auto mb-20 flex flex-col justify-center">
      <div className="flex mx-auto justify-center flex-col w-1/2">
        <h1 className="text-5xl text-sky-950 text-wrap mb-7 font-semibold text-center">
          A price to suit everyone
        </h1>
        <p className="text-indigo-800 text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quis, quibusdam optio suscipit odio illum. Dolorum, nemo perspiciatis!
          A nisi debitis nesciunt est maxime harum ex minus iure sint fugiat?
        </p>
      </div>
      <h1 className="text-5xl text-sky-950 text-wrap mb-7 font-semibold text-center block">
        40$
      </h1>
      <h2 className="text-2xl text-center">UI Design Kit</h2>
      <div className="flex flex-col items-center justify-center">
        <p>See. One price. Simple</p>
        <div>
          <button className="flex inline-flex items-center justify-center border-solid rounded text-white bg-sky-950  py-0.5 px-3 mt-4 md:mt-0 w-32">
            Purchase Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
