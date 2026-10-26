import React, { useState } from "react";
import Sellers from "./Sellers";
import Listing from "./Listing";
import Review from "./Review";
import About from "./About";
import AvailableProduct from "./AvailableProduct";

export default function Stall() {
  const [active, setActive] = useState("listing");
  return (
    <div className="flex flex-col gap-y-8 pt-13 overflow-scroll relative px-5 bottom-10">
      <Sellers />

      <div className="flex items-center justify-center gap-x-15">
        <span
          className={`uppercase text-xs  text-center font-family text-black cursor-pointer pb-3 ${active === "listing" ? "border-b border-b-black" : "border-none p-0"}`}
          onClick={() => setActive("listing")}
        >
          Listings
        </span>
        <span
          className={`uppercase text-xs  text-center font-family text-black cursor-pointer pb-3 ${active === "review" ? "border-b border-b-black" : "border-none p-0"}`}
          onClick={() => setActive("review")}
        >
          Reviews
        </span>
        <span
          className={`uppercase text-xs  text-center font-family text-black cursor-pointer pb-3 ${active === "about" ? "border-b border-b-black" : "border-none p-0"}`}
          onClick={() => setActive("about")}
        >
          About
        </span>
      </div>
      {active === "listing" && (
        <div>
          {" "}
          <Listing />
        </div>
      )}
      {active === "review" && <Review />}
      {active === "about" && <About />}
      {active === "listing" && <AvailableProduct />}
    </div>
  );
}
