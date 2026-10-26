import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function Review() {
  const [value, setValue] = useState(2);

  const review = [
    {
      initials: "O",
      name: "Oyinlove  R.",
      review_detail: "Great quality! I’m excited ",
    },
    {
      initials: "T",
      name: "Temii G",
      review_detail: "Good seller, fair prices.",
    },
  ];
  return (
    <div className="mb-10 flex flex-col gap-y-4 px-5">
      {review.map((data, index) => (
        <div className="flex justify-between items-center bg-white shadow-xl border border-black3 py-3 px-2 rounded-lg">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-black3 flex items-center font-semibold justify-center text-green text-[26px] font-family2">
              {data.initials}
            </div>

            <div>
              <h3 className="text-sm font-semibold font-family text-black">
                {data.name}
              </h3>
              <span className="text-xs font-family text-[#A4A4A4]">
                {data.review_detail}
              </span>
            </div>
          </div>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            {/* <Typography component="legend">Read only</Typography> */}
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </div>
      ))}{" "}
    </div>
  );
}
