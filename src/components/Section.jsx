import React from "react";
import img from "../image/undraw_mobile_login.png";

const Section = () => {
  return (
    <section className="flex mx-40 mb-20 justif-around">
      <div className="grid grid-col-2">
        <div className="mb-20 col-span-2">
          <h1 className="text-5xl text-sky-950 text-wrap mb-7 font-semibold">
            Light Fast and Powerful
          </h1>
          <p className="text-indigo-800	mb-2 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            quaerat earum dolor unde nihil ratione commodi rerum neque, delectus
            similique blanditiis nisi facere qui deserunt illum doloremque
            beatae aspernatur? Error tempore iure libero consequatur esse?
          </p>
          <p className="text-indigo-800 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            libero odio porro, reprehenderit voluptates enim.{" "}
          </p>
        </div>
        <div>
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
          <h1 className="text-2xl text-sky-950 mb-2 font-semibold	">
            Title Goes Here
          </h1>
          <p className="text-gray-700 text-pretty text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            sapiente ad enim similique, modi nobis a, vel ipsam dolorem esse
            obcaecati quis! Consequatur, perferendis culpa.
          </p>
        </div>
        <div>
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
          <h1 className="text-2xl text-sky-950 mb-2 font-semibold	">
            Title Goes Here
          </h1>
          <p className="text-gray-700 text-pretty text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            sapiente ad enim similique, modi nobis a, vel ipsam dolorem esse
            obcaecati quis! Consequatur, perferendis culpa.
          </p>
        </div>
      </div>
      <img src={img} alt="" />
    </section>
  );
};

export default Section;
