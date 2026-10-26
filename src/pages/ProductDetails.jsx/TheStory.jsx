import React from "react";

export default function TheStory() {
  const list = ["Organic Cotton", "Eco-Dyed", "Customizable"];
  return (
    <div className="flex flex-col gap-y-3 px-5">
      <h2 className="m-0 text-[18px] font-family2 font-semibold text-black">
        The Story Behind the Weave
      </h2>
      <span className="text-sm font-family text-black2 font-normal">
        Hand-crafted in the heart of Iseyin, this Aso Oke piece represents three
        generations of weaving expertise. Olu’s Gems sources the finest organic
        cotton threads, dyed using traditional indigo techniques to ensure a
        vibrant, lasting color that tells a story of Nigerian heritage. Perfect
        for weddings, naming ceremonies, or as a statement wall hanging.
      </span>
      <div className="flex items-center gap-x-2">
        {list.map((data) => (
          <span className="bg-[#F4F4F4] p-2 rounded-full text-xs font-medium font-family2 text-[#000000]">
            {data}
          </span>
        ))}
      </div>
    </div>
  );
}
