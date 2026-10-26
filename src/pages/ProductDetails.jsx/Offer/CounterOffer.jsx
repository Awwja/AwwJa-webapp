import { useState } from "react";
import AcceptOffer from "./AcceptOffer";
import { Box, CircularProgress } from "@mui/material";
import DealClosed from "./DealClosed";
import SwipeDown from "../../../components/Framer";

export default function CounterOffer({
  img,
  product_name,
  price,
  price_one,
  price_two,
  price_three,
  brand_name,
  onDismiss,
  setLoadingApp,
}) {
  const [priceActive, setPriceActive] = useState(null);
  const [makeOffer, setMakeOffer] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  function handlePhoneChange(e) {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  }

  const offer_submit = number.trim() !== "" || priceActive !== null;

  function MakeAnOffer() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMakeOffer(true);
    }, 3000);
  }

  function Accept() {
    setLoading(true);
    setTimeout(() => {
      setAcceptOffer(true);
      setLoading(false);
    }, 3500);
  }
  return (
    <SwipeDown
      onDismiss={onDismiss}
      className="fixed flex flex-col gap-6 animate-fade-up z-10 h-full max-h-100 w-full p-4 bottom-0 overflow-scroll bg-white rounded-tr-[40px] rounded-tl-[40px] border border-[#D2D2D2] pb-20"
      handle={
        <div className="flex justify-center">
          <hr className="w-13.25 border-2 border-[#525252] rounded-full" />
        </div>
      }
    >
      {acceptOffer && (
        <DealClosed
          number={number}
          price={price}
          onClose={() => setMakeOffer(false)}
          setLoadingApp={setLoadingApp}
        />
      )}
      {!acceptOffer && makeOffer && (
        <AcceptOffer
          brand_name={brand_name}
          number={number}
          onClose={() => setMakeOffer(false)}
          loading={loading}
          Accept={Accept}
        />
      )}

      {!acceptOffer && !makeOffer && (
        <>
          {/*img, product name and price */}
          <div className="flex mt-5 items-center justify-center gap-3">
            <img
              src={img}
              className="w-full max-w-21.25 h-full max-h-18.25 rounded-[20px]"
              alt="product image"
            />
            <div className="flex flex-col gap-1">
              <h3 className="m-0 text-wrap font-semibold font-family2 text-[#474747] capitalize">
                {product_name}
              </h3>
              <span className="text-sm font-medium font-family text-green">
                Listed {price} NGN
              </span>
            </div>
          </div>

          {/*preferred price */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="uppercase text-sm font-medium text-[#474747] font-family2">
                how much do you want to pay?
              </h4>
              <input
                type="text"
                className="border border-[#6B2E06] w-full p-4 rounded-lg outline-none text-black font-medium shadow-xl font-family2 placeholder:text-[#A4A4A4]"
                name=""
                id=""
                onChange={handlePhoneChange}
                value={number}
                placeholder="Enter your preferred price"
              />
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F3F3F3]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25 10.75H8.41667V7.25H7.25V10.75V10.75M7.83333 6.08333C7.99861 6.08333 8.13715 6.02743 8.24896 5.91563C8.36076 5.80382 8.41667 5.66528 8.41667 5.5C8.41667 5.33472 8.36076 5.19618 8.24896 5.08437C8.13715 4.97257 7.99861 4.91667 7.83333 4.91667C7.66806 4.91667 7.52951 4.97257 7.41771 5.08437C7.3059 5.19618 7.25 5.33472 7.25 5.5C7.25 5.66528 7.3059 5.80382 7.41771 5.91563C7.52951 6.02743 7.66806 6.08333 7.83333 6.08333V6.08333M7.83333 13.6667C7.02639 13.6667 6.26806 13.5135 5.55833 13.2073C4.84861 12.901 4.23125 12.4854 3.70625 11.9604C3.18125 11.4354 2.76562 10.8181 2.45937 10.1083C2.15312 9.39861 2 8.64028 2 7.83333C2 7.02639 2.15312 6.26806 2.45937 5.55833C2.76562 4.84861 3.18125 4.23125 3.70625 3.70625C4.23125 3.18125 4.84861 2.76562 5.55833 2.45937C6.26806 2.15312 7.02639 2 7.83333 2C8.64028 2 9.39861 2.15312 10.1083 2.45937C10.8181 2.76562 11.4354 3.18125 11.9604 3.70625C12.4854 4.23125 12.901 4.84861 13.2073 5.55833C13.5135 6.26806 13.6667 7.02639 13.6667 7.83333C13.6667 8.64028 13.5135 9.39861 13.2073 10.1083C12.901 10.8181 12.4854 11.4354 11.9604 11.9604C11.4354 12.4854 10.8181 12.901 10.1083 13.2073C9.39861 13.5135 8.64028 13.6667 7.83333 13.6667V13.6667M7.83333 12.5C9.13611 12.5 10.2396 12.0479 11.1438 11.1438C12.0479 10.2396 12.5 9.13611 12.5 7.83333C12.5 6.53056 12.0479 5.42708 11.1438 4.52292C10.2396 3.61875 9.13611 3.16667 7.83333 3.16667C6.53056 3.16667 5.42708 3.61875 4.52292 4.52292C3.61875 5.42708 3.16667 6.53056 3.16667 7.83333C3.16667 9.13611 3.61875 10.2396 4.52292 11.1438C5.42708 12.0479 6.53056 12.5 7.83333 12.5V12.5M7.83333 7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333"
                  fill="#3F4014"
                />
              </svg>

              <span className="text-black font-normal text-xs font-family2">
                Seller may accept, counter or reject offer
              </span>
            </div>
          </div>

          {/*standard selection */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#474747] text-sm font-medium font-family2 uppercase">
              quick offer
            </h3>

            {/*offer prices */}
            <div className="flex items-center w-fit gap-3">
              {[price_one, price_two, price_three].map((prices, index) => (
                <span
                  key={index}
                  className={`py-2 px-6 text-sm font-bold font-family  rounded-[10px] ${priceActive === index ? "text-white bg-green border-none" : "text-[#1A1C1C] shadow-xs border border-black3"}`}
                  onClick={() => {
                    setPriceActive(index);
                    setNumber(prices.replace(/\D/g, ""));
                  }}
                >
                  {prices}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-center w-full justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25 10.75H8.41667V7.25H7.25V10.75V10.75M7.83333 6.08333C7.99861 6.08333 8.13715 6.02743 8.24896 5.91563C8.36076 5.80382 8.41667 5.66528 8.41667 5.5C8.41667 5.33472 8.36076 5.19618 8.24896 5.08437C8.13715 4.97257 7.99861 4.91667 7.83333 4.91667C7.66806 4.91667 7.52951 4.97257 7.41771 5.08437C7.3059 5.19618 7.25 5.33472 7.25 5.5C7.25 5.66528 7.3059 5.80382 7.41771 5.91563C7.52951 6.02743 7.66806 6.08333 7.83333 6.08333V6.08333M7.83333 13.6667C7.02639 13.6667 6.26806 13.5135 5.55833 13.2073C4.84861 12.901 4.23125 12.4854 3.70625 11.9604C3.18125 11.4354 2.76562 10.8181 2.45937 10.1083C2.15312 9.39861 2 8.64028 2 7.83333C2 7.02639 2.15312 6.26806 2.45937 5.55833C2.76562 4.84861 3.18125 4.23125 3.70625 3.70625C4.23125 3.18125 4.84861 2.76562 5.55833 2.45937C6.26806 2.15312 7.02639 2 7.83333 2C8.64028 2 9.39861 2.15312 10.1083 2.45937C10.8181 2.76562 11.4354 3.18125 11.9604 3.70625C12.4854 4.23125 12.901 4.84861 13.2073 5.55833C13.5135 6.26806 13.6667 7.02639 13.6667 7.83333C13.6667 8.64028 13.5135 9.39861 13.2073 10.1083C12.901 10.8181 12.4854 11.4354 11.9604 11.9604C11.4354 12.4854 10.8181 12.901 10.1083 13.2073C9.39861 13.5135 8.64028 13.6667 7.83333 13.6667V13.6667M7.83333 12.5C9.13611 12.5 10.2396 12.0479 11.1438 11.1438C12.0479 10.2396 12.5 9.13611 12.5 7.83333C12.5 6.53056 12.0479 5.42708 11.1438 4.52292C10.2396 3.61875 9.13611 3.16667 7.83333 3.16667C6.53056 3.16667 5.42708 3.61875 4.52292 4.52292C3.61875 5.42708 3.16667 6.53056 3.16667 7.83333C3.16667 9.13611 3.61875 10.2396 4.52292 11.1438C5.42708 12.0479 6.53056 12.5 7.83333 12.5V12.5M7.83333 7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333V7.83333"
                  fill="#3F4014"
                />
              </svg>

              <span className="uppercase text-[10px] font-medium font-family text-[#A4A4A4]">
                most buyers offer between 18-22,000 ngn
              </span>
            </div>
          </div>

          {/*button to make an offer */}
          <div>
            <button
              type="button"
              className="uppercase bg-green text-white w-full p-4 rounded-[10px] hover:opacity-50 disabled:bg-black2 disabled:cursor-not-allowed disabled:text-black"
              disabled={!offer_submit}
              onClick={MakeAnOffer}
            >
              {loading ? (
                <Box>
                  <CircularProgress size={24} sx={{ color: "white" }} />
                </Box>
              ) : (
                "make an offer"
              )}
            </button>
          </div>
        </>
      )}
    </SwipeDown>
  );
}
