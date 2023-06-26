import React from "react";
import Img from "../../../../Assests/image.webp";
function Main() {
  return (
    // <div className="bg-black">
    <div className=" p-20 bg-gradient-to-t from-blue-400 via-blue-400 to-white flex-auto w-full h-max-xl border-re-900">
      <div className="max-w-lg text-2xl font-semibold dark:text-white">
        <h1 className="leading-normal text-6xl animate-pulse">
          {" "}
          HR Requirements
        </h1>
        <p className="text-xl text-justify">
          Online recruitment also known as E-recruitment or internet recruiting
          allows businesses to use various internet-based solutions – for
          example, online advertising, job listings, social media and company
          websites to source and hire the best candidates.
        </p>
        <div className="mt-10">
          <a
            href="butt"
            className="bg-blue-800 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-blue-300 duration-300 hover:border animate-bounce "
          >
            {" "}
            Lets'Go
          </a>
          <a
            href="butt"
            className="bg-blue-800 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-blue-300 duration-300 hover:border animate-bounce "
          >
            {" "}
            Lets'Go
          </a>
        </div>
      </div>

      <img
        src={Img}
        alt="pic"
        className=" transition-shadow w-full xl:w-1/2 xl:absolute bottom-0 right-20 shadow-zinc-950"
      />
    </div>
    // </div>
  );
}

export default Main;
