import React, { Suspense } from "react";
import Navigation from "../Navigation";
const SetImg = React.lazy(() => import("./HeaderImg"));

function Header({ handleToEvents }) {
  return (
    <div>
      <div className="relative">
        <Suspense
          fallback={<div className="w-full h-screen z-0 bg-black"></div>}
        >
          <SetImg />
        </Suspense>
        <div className="absolute top-2 right-0 text-white">
          <Navigation />
        </div>
      </div>
      <div className="absolute top-[30%] w-full lg:space-x-32 px-12 flex items-center justify-between text-white ">
        <div className="text-7xl uppercase font-semibold font-awesome tracking-wider">
          Splendid Events
        </div>
        <div className=" font-awesome">
          <h3 className="text-3xl">Your one-stop site for exclusive events</h3>{" "}
          <p className="w-3/4 p-2">
            Look no further! With an all new look and feel designed to give you
            the best user experience while at the same time meeting and going
            beyond your expectations.
          </p>
          <div className="flex space-x-4">
            <button
              type="button"
              className="ml-4 rounded-full py-2 px-4 bg-[#F5167E] hover:bg-[#d4156e] transition duration-[2.75s] ease-in-out"
              onClick={() => handleToEvents()}
            >
              View Events
            </button>
            <button
              type="button"
              className="ml-4 border rounded-full py-2 px-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
