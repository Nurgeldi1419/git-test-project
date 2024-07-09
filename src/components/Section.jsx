import React from "react";
import mobileLogin from "../assets/undraw_mobile_login.png";

const Section = () => {
  return (
    <section className="w-[90rem] mx-auto my-40 flex justify-around">
      <div className="grid grid-col-2 basis-1/2 gap-x-10 w-2/3">
        <div className="mb-20 col-span-2">
          <h1 className="text-4xl text-sky-950 text-wrap mb-7 font-semibold">
            Light Fast & Powerful
          </h1>
          <p className="mb-2 text-pretty text-[#6F7CB2] text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-pretty text-[#6F7CB2] text-base">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
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
          <p className="text-pretty text-xs text-[#5D6970]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
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
          <p className="text-pretty text-xs text-[#5D6970]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
      </div>
      <div className="w-1/3">
        <img src={mobileLogin} alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default Section;
