import { Box, Rating } from "@mui/material";
import React from "react";

export default function Experiences() {
  const review = [
    {
      img: "",
      name: "Adebayo O.",
      when: "2 weeks ago",
      rate_value: 5,
      review:
        '"The texture is incredible. You can really feel the weight of the quality. Olu’s Gems was so helpful during the negotiation, we reached a fair price quickly!"',
    },

    {
      img: "",
      name: "Chidi E.",
      when: "1 months ago",
      rate_value: 4,
      review:
        '"Authentic Aso Oke at its best. The pattern alignment is perfect. Shipping to Jos was faster than expected."',
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 px-5">
      <h2 className="m-0 text-[18px] text-black4 font-family2 font-semibold">
        Customer Experiences
      </h2>

      {/*written review */}
      <div className="flex flex-col gap-y-7">
        {review.map((data, index) => (
          <div
            className="border-[0.5px] border-orange rounded-3xl bg-white p-6 flex flex-col gap-y-4"
            key={index}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <img
                  className="rounded-full w-12 h-12"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />

                <div className="flex flex-col">
                  <h4 className="m-0 text-base font-semibold font-family2 text-black4">
                    {data.name}
                  </h4>
                  <span className="text-xs font-normal font-family text-black5">
                    {data.when}
                  </span>
                </div>
              </div>
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating name="read-only" value={data.rate_value} readOnly />
              </Box>
            </div>

            <span className="text-sm font-family font-normal text-[#A4A4A4]">
              {data.review}
            </span>
          </div>
        ))}
      </div>

      {/*Leave a review */}

      <textarea
        name=""
        className="w-full bg-[#F7F7F7] border border-[#E7E7E7] rounded-full resize-none px-4 py-1 outline-none text-sm text-black font-family2 font-medium h-fit justify-center placeholder:italic flex flex-col items-center"
        id=""
        placeholder="leave a review"
      ></textarea>
    </div>
  );
}
