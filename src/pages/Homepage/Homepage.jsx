/** @format */

import { useState } from "react";
// import BottomNav from "../../components/BottomNav";
import FlashSales from "./FlashSales";
import JoinCommunity from "./JoinCommunity";
import Recommended from "./Recommended";
import SearchFIlter from "./SearchFIlter";
import VerifiedStalls from "./VerifiedStalls";

export default function Homepage() {
  const [isActive, setIsActive] = useState("home");

  return (
    <>
      <div className="flex flex-col gap-y-8 px-5 py-5 pt-13 overflow-scroll relative bottom-10">
        <SearchFIlter />
        <FlashSales />
        <VerifiedStalls />
        <Recommended />
        <JoinCommunity />
      </div>
    </>
  );
}
