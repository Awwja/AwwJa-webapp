import { Box, CircularProgress } from "@mui/material";

export default function AcceptOffer({
  number,
  brand_name,
  onClose,
  Accept,
  loading,
}) {
  return (
    <div className="flex flex-col gap-5 items-center mt-9">
      {/*Counter */}
      <div className="flex items-center gap-2 justify-center bg-white drop-shadow-xl py-4 px-20 rounded-3xl border border-black3">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect
            width="56"
            height="56"
            rx="16"
            fill="url(#pattern0_3062_8222)"
          />
          <rect x="39" y="40" width="20" height="19" rx="9.5" fill="#BD520A" />
          <rect
            x="39"
            y="40"
            width="20"
            height="19"
            rx="9.5"
            stroke="#E8E8E8"
            stroke-width="2"
          />
          <path
            d="M49.05 54C48.9083 54 48.7896 53.9521 48.6937 53.8562C48.5979 53.7604 48.55 53.6417 48.55 53.5C48.55 53.4417 48.5625 53.3813 48.5875 53.3188C48.6125 53.2563 48.65 53.2 48.7 53.15L51.0125 50.8375L50.65 50.475L48.35 52.7875C48.3 52.8375 48.2458 52.875 48.1875 52.9C48.1292 52.925 48.0667 52.9375 48 52.9375C47.8583 52.9375 47.7396 52.8896 47.6437 52.7937C47.5479 52.6979 47.5 52.5792 47.5 52.4375C47.5 52.3542 47.5125 52.2854 47.5375 52.2312C47.5625 52.1771 47.5958 52.1292 47.6375 52.0875L49.95 49.775L49.6 49.425L47.2875 51.725C47.2375 51.775 47.1833 51.8125 47.125 51.8375C47.0667 51.8625 47 51.875 46.925 51.875C46.7917 51.875 46.675 51.825 46.575 51.725C46.475 51.625 46.425 51.5083 46.425 51.375C46.425 51.3083 46.4375 51.2458 46.4625 51.1875C46.4875 51.1292 46.525 51.075 46.575 51.025L48.8875 48.7125L48.525 48.3625L46.225 50.675C46.1833 50.7167 46.1333 50.75 46.075 50.775C46.0167 50.8 45.9458 50.8125 45.8625 50.8125C45.7208 50.8125 45.6021 50.7646 45.5063 50.6687C45.4104 50.5729 45.3625 50.4542 45.3625 50.3125C45.3625 50.2458 45.375 50.1833 45.4 50.125C45.425 50.0667 45.4625 50.0125 45.5125 49.9625L48.3 47.175L50.175 49.0625C50.2667 49.1542 50.375 49.2271 50.5 49.2812C50.625 49.3354 50.75 49.3625 50.875 49.3625C51.1417 49.3625 51.375 49.2688 51.575 49.0813C51.775 48.8938 51.875 48.6542 51.875 48.3625C51.875 48.2458 51.8542 48.125 51.8125 48C51.7708 47.875 51.6958 47.7583 51.5875 47.65L49.35 45.4125V45.4125C49.4917 45.2792 49.65 45.1771 49.825 45.1063C50 45.0354 50.175 45 50.35 45C50.5667 45 50.7667 45.0354 50.95 45.1063C51.1333 45.1771 51.3 45.2875 51.45 45.4375L53.5625 47.5625C53.7125 47.7125 53.8229 47.8792 53.8938 48.0625C53.9646 48.2458 54 48.4583 54 48.7C54 48.8667 53.9625 49.0354 53.8875 49.2063C53.8125 49.3771 53.7042 49.5333 53.5625 49.675L49.4 53.85C49.3333 53.9167 49.275 53.9583 49.225 53.975C49.175 53.9917 49.1167 54 49.05 54V54M44.7625 50L44.4375 49.675C44.2958 49.5417 44.1875 49.3833 44.1125 49.2C44.0375 49.0167 44 48.825 44 48.625C44 48.4083 44.0417 48.2083 44.125 48.025C44.2083 47.8417 44.3125 47.6875 44.4375 47.5625L46.55 45.4375C46.6833 45.3042 46.8417 45.1979 47.025 45.1187C47.2083 45.0396 47.3875 45 47.5625 45C47.7875 45 47.9875 45.0312 48.1625 45.0938C48.3375 45.1562 48.5083 45.2708 48.675 45.4375L51.2375 48C51.2875 48.05 51.325 48.1042 51.35 48.1625C51.375 48.2208 51.3875 48.2833 51.3875 48.35C51.3875 48.4833 51.3375 48.6 51.2375 48.7C51.1375 48.8 51.0208 48.85 50.8875 48.85C50.8125 48.85 50.75 48.8396 50.7 48.8187C50.65 48.7979 50.5958 48.7583 50.5375 48.7L48.2875 46.475L44.7625 50V50"
            fill="white"
          />
          <defs>
            <pattern
              id="pattern0_3062_8222"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_3062_8222"
                transform="scale(0.00892857)"
              />
            </pattern>
            <image
              id="image0_3062_8222"
              width="112"
              height="112"
              preserveAspectRatio="none"
              xlink:href="data:image/jpeg;base64,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"
            />
          </defs>
        </svg>

        <div>
          <label className="uppercase text-xs font-family2 font-medium">
            use counter offer
          </label>
          <h3 className="text-base font-extrabold font-family text-green m-0 capitalize">
            {brand_name}
          </h3>
        </div>
      </div>

      {/*price accepted */}
      <div className="flex flex-col w-full items-center gap-1">
        <h1 className="text-[36px] font-extrabold font-family2 text-green border-2 w-fit border-dashed border-green2 bg-[#9090A3]/10 px-7 py-4 rounded-[20px]">
          ₦{Number(number).toLocaleString()}
        </h1>

        <p className="text-xs text-black2 italic font-family2 font-medium">
          “That price is too small o. Add something.”
        </p>
      </div>

      {/*Buttons */}
      <div className=" flex flex-col mt-5 gap-2 justify-center">
        {/**accept offer button */}
        <button
          type="button"
          className="capitalize border-none bg-green shadow-xs px-5 py-3 rounded-[10px] font-family2 text-sm font-medium text-white "
          onClick={Accept}
        >
          {loading ? (
            <Box>
              <CircularProgress size={24} sx={{ color: "white" }} />
            </Box>
          ) : (
            " accept offer"
          )}
        </button>
        <div className="flex items-center mt-2 w-full gap-4 justify-center">
          <button
            type="button"
            className="capitalize drop-shadow-xs border-[0.3px] border-green px-5 py-3 rounded-[10px] font-family2 text-sm font-medium text-green hover:bg-black2 hover:text-white"
            onClick={onClose}
          >
            counter again
          </button>
          <button
            type="button"
            className="capitalize shadow-xs border-[0.3px] border-green px-5 py-3 rounded-[10px] font-family2 text-sm font-medium text-orange hover:bg-red-500 hover:text-white "
            onClick={onClose}
          >
            decline offer
          </button>
        </div>

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
