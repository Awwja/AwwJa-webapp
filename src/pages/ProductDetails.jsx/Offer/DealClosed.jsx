import { useNavigate } from "react-router-dom";

export default function DealClosed({ number, price, onClose, setLoadingApp }) {
  const saved = Number(price.replace(/,/g, "")) - Number(number);

  const navigate = useNavigate();

  function Secure() {
    setLoadingApp(true);
    setTimeout(() => {
      setLoadingApp(false);
      navigate("/add-to-cart");
    }, 3000);
  }

  return (
    <div className="flex flex-col gap-4">
      {/*deal closed */}
      <div className="flex flex-col gap-1 w-full items-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="50" height="50" fill="url(#pattern0_3062_7768)" />
          <defs>
            <pattern
              id="pattern0_3062_7768"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_3062_7768"
                transform="scale(0.0104167)"
              />
            </pattern>
            <image
              id="image0_3062_7768"
              width="96"
              height="96"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <h3 className="m-0 text-[26px] text-black font-medium font-family2">
          Deal closed, nice one!
        </h3>
        <span className="text-base text-black2 font-medium font-family">
          This deal is only for you
        </span>
      </div>

      {/*agreed price */}
      <div className="flex flex-col gap-2 items-center bg-orange border border-[#000000] rounded-3xl px-6 py-3 w-full max-w-200">
        <span className="text-sm text-white font-semibold font-family2">
          Agreed Price
        </span>
        <h2 className="m-0 text-[30px] font-bold font-family2 text-white">
          ₦{Number(number).toLocaleString()}
        </h2>
        <div className="px-5 py-3 bg-black3 border border-orange rounded-[10px] flex items-center gap-2 text-green text-sm font-medium font-family2">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1667 10.2083L10.2083 16.1667C10.0417 16.3333 9.85417 16.4583 9.64583 16.5417C9.4375 16.625 9.22917 16.6667 9.02083 16.6667C8.8125 16.6667 8.60417 16.625 8.39583 16.5417C8.1875 16.4583 8 16.3333 7.83333 16.1667L0.479167 8.8125C0.326389 8.65972 0.208333 8.48264 0.125 8.28125C0.0416667 8.07986 0 7.86806 0 7.64583V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H7.64583C7.86806 0 8.08333 0.0451389 8.29167 0.135417C8.5 0.225694 8.68056 0.347222 8.83333 0.5L16.1667 7.85417C16.3333 8.02083 16.4549 8.20833 16.5312 8.41667C16.6076 8.625 16.6458 8.83333 16.6458 9.04167C16.6458 9.25 16.6076 9.45486 16.5312 9.65625C16.4549 9.85764 16.3333 10.0417 16.1667 10.2083V10.2083M9.02083 15L14.9792 9.04167V9.04167V9.04167L7.625 1.66667H1.66667V1.66667V1.66667V7.625V7.625V7.625L9.02083 15V15V15V15M3.75 5C4.09722 5 4.39236 4.87847 4.63542 4.63542C4.87847 4.39236 5 4.09722 5 3.75C5 3.40278 4.87847 3.10764 4.63542 2.86458C4.39236 2.62153 4.09722 2.5 3.75 2.5C3.40278 2.5 3.10764 2.62153 2.86458 2.86458C2.62153 3.10764 2.5 3.40278 2.5 3.75C2.5 4.09722 2.62153 4.39236 2.86458 4.63542C3.10764 4.87847 3.40278 5 3.75 5V5M8.33333 8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333"
              fill="#6B6D22"
            />
          </svg>

          <span>You saved ₦{Number(saved).toLocaleString()}</span>
        </div>
      </div>
      {/*Buttons */}
      <div className=" flex flex-col mt-5 gap-2 justify-center">
        {/*secure this deal button */}
        <button
          type="button"
          className="uppercase border-none bg-green shadow-xs px-5 py-3 rounded-[10px] font-family2 text-sm font-medium text-white hover:opacity-50"
          onClick={Secure}
        >
          secure this deal
        </button>
        {/*continue shopping */}
        <button
          type="button"
          className="uppercase border border-green shadow-xs px-5 py-3 rounded-[10px] font-family2 text-sm font-medium text-green hover:bg-green hover:text-white"
          onClick={onClose}
        >
          continue shopping
        </button>

        <div className="flex items-center w-full justify-center gap-2">
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

          <span className="text-xs font-family text-[#A4A4A4]">
            Offers are valid for 24 hours
          </span>
        </div>
      </div>
    </div>
  );
}
