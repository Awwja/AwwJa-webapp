import React from "react";

import { Icon, InlineIcon } from "@iconify/react";
export default function ProfileInfo() {
  const list = [
    {
      h2: "Personal Information",
      span: "Manage your contact and delivery info",
    },
    {
      h2: "My Orders",
      span: "Track and manage your purchases",
    },
    {
      h2: "Payment Information",
      span: "Cards, bank accounts and wallet",
    },
    {
      h2: "Password & Security",
      span: "Password, verification and support",
    },
  ];
  return (
    <div className="mt-5 flex flex-col gap-y-4 px-5 h-full overflow-scroll pb-15 mb-10">
      {list.map((data, index) => (
        <div
          className="bg-white flex justify-between items-center rounded-xl py-4 px-3 border border-[#F4F4F4]"
          key={index}
        >
          <div className="flex flex-col">
            <h2 className="text-base font-medium font-family2 m-0 text-black">
              {data.h2}
            </h2>
            <span className="text-xs font-family text-black2">{data.span}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
