import React from "react";
import { Link } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import image from "../../assets/homepage/bag.png";

export default function ProfilePage() {
  return (
    <div className="flex flex-col relative bg-[#F9F9F9] h-full">
      {/*profile text and back icon */}
      <div className="bg-green h-50 pt-5 pl-5 relative">
        <div className="flex items-center gap-x-3">
          <Link to={-1}>
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.9211 12.5L12.3601 17.939C12.4574 18.0363 12.5084 18.151 12.5131 18.283C12.5171 18.415 12.4638 18.536 12.3531 18.646C12.2438 18.7527 12.1261 18.807 12.0001 18.809C11.8748 18.8103 11.7568 18.756 11.6461 18.646L5.5661 12.566C5.47877 12.478 5.41743 12.3887 5.3821 12.298C5.34677 12.2073 5.3291 12.108 5.3291 12C5.3291 11.892 5.34677 11.7927 5.3821 11.702C5.41743 11.6113 5.47877 11.5223 5.5661 11.435L11.6461 5.354C11.7394 5.26067 11.8531 5.21067 11.9871 5.204C12.1218 5.19733 12.2441 5.24733 12.3541 5.354C12.4641 5.464 12.5191 5.58267 12.5191 5.71C12.5191 5.838 12.4641 5.957 12.3541 6.067L6.9201 11.5H18.5001C18.6428 11.5 18.7618 11.5477 18.8571 11.643C18.9524 11.7383 19.0001 11.8573 19.0001 12C19.0001 12.1427 18.9524 12.2617 18.8571 12.357C18.7618 12.4523 18.6428 12.5 18.5001 12.5H6.9211Z"
                fill="white"
              />
            </svg>
          </Link>
          <span className="uppercase text-sm font-semibold text-white font-family2">
            profile
          </span>
        </div>
      </div>

      {/*profile image */}
      <div className="-mt-20 z-10 w-full flex flex-col items-center">
        <div className="w-37.25 h-38.25 rounded-[92.5px] bg-green">
          <img
            src=""
            alt="profile picture"
            className="w-37.25 h-38.25 rounded-[92.5px]"
          />
        </div>
        <h2 className="text-[22px] font-bold font-family2 text-[#1A1C1C]">
          Your name
        </h2>
        <span className="text-[10px] font-medium text-[#1A1C1C] font-family">
          youremail@gmail.com
        </span>
      </div>

      {/*profile information */}
      <ProfileInfo />
    </div>
  );
}
