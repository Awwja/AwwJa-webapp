import React from "react";

export default function Images({ img }) {
  return (
    <img
      className="w-full flex px-5 items-center"
      src={img}
      alt="product-name"
    />
  );
}
