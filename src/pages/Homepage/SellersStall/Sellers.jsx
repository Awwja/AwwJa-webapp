import { Link } from "react-router-dom";

import fabric from "../../../assets/homepage/fabric.svg";

export default function Sellers() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-5 items-center">
        {/*product image */}
        <div className="flex flex-col items-center justify-center relative  w-full">
          <img src={fabric} className="w-full" alt="product Image" />

          {/*Stall */}
          <div className="absolute -bottom-5 w-10 h-10 rounded-full bg-orange flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16699 20.8333H40.8337V36.6667H9.16699V20.8333Z"
                fill="#CFD8DC"
              />
              <path
                d="M9.16699 36.6667H40.8337V40H9.16699V36.6667Z"
                fill="#B0BEC5"
              />
              <path d="M27.5 25H37.5V40H27.5V25Z" fill="#455A64" />
              <path d="M12.5 25H24.1667V34.1667H12.5V25Z" fill="#E3F2FD" />
              <path
                d="M13.333 25.8333H23.333V33.3333H13.333V25.8333Z"
                fill="#1E88E5"
              />
              <path
                d="M35.4167 32.9167C35.1667 32.9167 35 33.0833 35 33.3333V35C35 35.25 35.1667 35.4167 35.4167 35.4167C35.6667 35.4167 35.8333 35.25 35.8333 35V33.3333C35.8333 33.0833 35.6667 32.9167 35.4167 32.9167Z"
                fill="#90A4AE"
              />
              <path
                d="M25 23.3333C26.3807 23.3333 27.5 22.2141 27.5 20.8333C27.5 19.4526 26.3807 18.3333 25 18.3333C23.6193 18.3333 22.5 19.4526 22.5 20.8333C22.5 22.2141 23.6193 23.3333 25 23.3333Z"
                fill="#A2A533"
              />
              <path
                d="M35 23.3333C36.3807 23.3333 37.5 22.2141 37.5 20.8333C37.5 19.4526 36.3807 18.3333 35 18.3333C33.6193 18.3333 32.5 19.4526 32.5 20.8333C32.5 22.2141 33.6193 23.3333 35 23.3333Z"
                fill="#A2A533"
              />
              <path
                d="M15 23.3333C16.3807 23.3333 17.5 22.2141 17.5 20.8333C17.5 19.4526 16.3807 18.3333 15 18.3333C13.6193 18.3333 12.5 19.4526 12.5 20.8333C12.5 22.2141 13.6193 23.3333 15 23.3333Z"
                fill="#A2A533"
              />
              <path
                d="M38.3333 10H11.6667C10.75 10 10 10.75 10 11.6667V14.1667H40V11.6667C40 10.75 39.25 10 38.3333 10ZM22.5 14.1667H27.5V20.8333H22.5V14.1667ZM35.8333 14.1667H31.6667L32.5 20.8333H37.5L35.8333 14.1667ZM14.1667 14.1667H18.3333L17.5 20.8333H12.5L14.1667 14.1667Z"
                fill="#A2A533"
              />
              <path
                d="M30 23.3333C31.3807 23.3333 32.5 22.2141 32.5 20.8333C32.5 19.4526 31.3807 18.3333 30 18.3333C28.6193 18.3333 27.5 19.4526 27.5 20.8333C27.5 22.2141 28.6193 23.3333 30 23.3333Z"
                fill="#FFA000"
              />
              <path
                d="M42.5 20.8333C42.5 22.25 41.4167 23.3333 40 23.3333C38.5833 23.3333 37.5 22.25 37.5 20.8333C37.5 19.4167 38.5833 18.3333 40 18.3333L42.5 20.8333Z"
                fill="#FFA000"
              />
              <path
                d="M20 23.3333C21.3807 23.3333 22.5 22.2141 22.5 20.8333C22.5 19.4526 21.3807 18.3333 20 18.3333C18.6193 18.3333 17.5 19.4526 17.5 20.8333C17.5 22.2141 18.6193 23.3333 20 23.3333Z"
                fill="#FFA000"
              />
              <path
                d="M7.5 20.8333C7.5 22.25 8.58333 23.3333 10 23.3333C11.4167 23.3333 12.5 22.25 12.5 20.8333C12.5 19.4167 11.4167 18.3333 10 18.3333L7.5 20.8333Z"
                fill="#FFA000"
              />
              <path
                d="M31.6667 14.1667H27.5V20.8333H32.5L31.6667 14.1667ZM40 14.1667H35.8333L37.5 20.8333H42.5L40 14.1667ZM18.3333 14.1667H22.5V20.8333H17.5L18.3333 14.1667ZM10 14.1667H14.1667L12.5 20.8333H7.5L10 14.1667Z"
                fill="#FFC107"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mt-3 w-full items-center">
          <h1 className="uppercase font-semibold font-family2 text-[26px]">
            olu's gems
          </h1>
          <div className="w-full flex items-center gap-x-2.5 justify-center">
            <span className="px-3 py-1.5 bg-[#F7F7F7] uppercase text-xs font-family text-black rounded-full">
              handcrafted
            </span>
            <span className="px-3 py-1.5 bg-[#F7F7F7] uppercase text-xs font-family text-black rounded-full">
              sustainable
            </span>
            <span className="px-3 py-1.5 bg-[#F7F7F7] uppercase text-xs font-family text-black rounded-full">
              lagos,ng
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-2 text-xs font-family text-[#474747] uppercase">
              {" "}
              {/*star icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99963 2L9.5663 5.84L13.7063 6.14667L10.533 8.82667L11.5263 12.8533L7.99963 10.6667L4.47297 12.8533L5.4663 8.82667L2.29297 6.14667L6.43297 5.84L7.99963 2Z"
                  fill="#FFDB43"
                />
                <path
                  d="M7.99963 2L6.43297 5.84L2.29297 6.14667L5.4663 8.82667L4.47297 12.8533L7.99963 10.6667M7.99963 2L9.5663 5.84L13.7063 6.14667L10.533 8.82667L11.5263 12.8533L7.99963 10.6667"
                  stroke="#FFDB43"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              4.9 rating
            </span>
            <span className="text-xs font-family text-[#474747] uppercase">
              1.2k followers
            </span>
          </div>
          <div className="flex items-center gap-x-2.5">
            {/*follow button */}
            <button className="uppercase text-white bg-green px-4 py-3 border border-green2 font-sm font-medium font-family2 rounded-[10px] hover:opacity-70">
              follow
            </button>

            {/*share button */}
            <button className="bg-[#F7F7F7] rounded-lg p-4 hover:bg-black3">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
