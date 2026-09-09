/** @format */
import image from "../../assets/homepage/promo.svg";
import forward from "../../assets/forward.svg";
import flash from "../../assets/homepage/flash.svg";
import fash from "../../assets/homepage/fashion.svg";
import beauty from "../../assets/homepage/beauty.svg";
import gadget from "../../assets/homepage/gadget.svg";
import games from "../../assets/homepage/games.svg";
import sport from "../../assets/homepage/sport.svg";
import { useState } from "react";

export default function FlashSales() {
  const [active, setActive] = useState("fashion");
  return (
    <div className="flex flex-col gap-y-7">
      {/*Flash sales */}
      <div className="flex items-center flex-col gap-y-2.5 bg-linear-to-r from-[#FF7A2E]/40 to-[#FF7A2E]/20 p-4 rounded-[20px]">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex flex-col gap-y-2">
            <span className="text-white bg-orange px-3 py-1 uppercase text-[8px] font-bold font-family2 w-fit rounded-xs">
              weekend deals
            </span>
            <h2 className="font-extrabold uppercase leading-6 text-[25px] font-family3 text-orange">
              Flash <br /> Sale
            </h2>
            <p className="text-xs font-family text-black">up to 40% off</p>

            <div className="bg-green border px-3 py-2 cursor-pointer rounded-lg border-green2 text-sm font-semibold font-family2 text-white flex items-center gap-x-2.5 w-max hover:opacity-50">
              <button type="button">Shop Now</button>
              <img src={forward} alt="forward icon" />
            </div>
          </div>
          <img src={image} alt="promo icon" />
        </div>
        <span className="flex items-center gap-x-0.5 text-[10px] font-family font-medium text-black2">
          {/*flash icon */}
          <img src={flash} alt="" />
          47 people shopping now
        </span>
      </div>

      {/*category button */}
      <div className="flex items-center gap-x-2.5 justify-between">
        <div
          className={`w-full max-w-17 h-full max-h-15 flex flex-col gap-y-1.5 items-center p-2 rounded-[10px] text-white text-xs font-medium font-family cursor-pointer bg-linear-to-r ${active === "fashion" ? "from-black to-[#222222]" : "from-[#6B6D22] to-[#A2A533]"}`}
          onClick={() => setActive("fashion")}
        >
          <img src={fash} alt="" />
          <span>Fashion</span>
        </div>
        <div
          className={`w-full max-w-17 h-full max-h-15 bg-linear-to-r  flex flex-col gap-y-1.5 items-center p-2 rounded-[10px] text-white text-xs font-medium font-family ${active === "beauty" ? "from-black to-[#222222]" : "from-[#6B6D22] to-[#A2A533]"}`}
          onClick={() => setActive("beauty")}
        >
          <img src={beauty} alt="" />
          <span>Beauty</span>
        </div>
        <div
          className={`w-full max-w-17 h-full max-h-15 bg-linear-to-r  flex flex-col gap-y-1.5 items-center p-2 rounded-[10px] text-white text-xs font-medium font-family ${active === "gadget" ? "from-black to-[#222222]" : "from-[#6B6D22] to-[#A2A533]"}`}
          onClick={() => setActive("gadget")}
        >
          <img src={gadget} alt="" />
          <span>Gadget</span>
        </div>{" "}
        <div
          className={`w-full max-w-17 h-full max-h-15 bg-linear-to-r  flex flex-col gap-y-1.5 items-center p-2 rounded-[10px] text-white text-xs font-medium font-family ${active === "games" ? "from-black to-[#222222]" : "from-[#6B6D22] to-[#A2A533]"}`}
          onClick={() => setActive("games")}
        >
          <img src={games} alt="" />
          <span>Games</span>
        </div>
        <div
          className={`w-full max-w-17 h-full max-h-15 bg-linear-to-r  flex flex-col gap-y-1.5 items-center p-2 rounded-[10px] text-white text-xs font-medium font-family ${active === "sport" ? "from-black to-[#222222]" : "from-[#6B6D22] to-[#A2A533]"}`}
          onClick={() => setActive("sport")}
        >
          <img src={sport} alt="" />
          <span>Sport</span>
        </div>{" "}
      </div>
    </div>
  );
}
