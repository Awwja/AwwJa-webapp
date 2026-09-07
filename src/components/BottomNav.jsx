/** @format */
import { NavLink } from "react-router-dom";
import marketplace from "../assets/homepage/marketplace.svg";
export default function BottomNav() {
  return (
    <div className="fixed z-1000 bottom-0 flex items-center justify-between w-full px-7 bg-white">
      {/*Home */}
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `group relative cursor-pointer flex flex-col gap-y-1 items-center font-medium text-xs font-family ${
            isActive ? " text-orange" : "text-black2"
          }`
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0402 6.81994L14.2802 2.78994C12.7102 1.68994 10.3002 1.74994 8.79023 2.91994L3.78023 6.82994C2.78023 7.60994 1.99023 9.20994 1.99023 10.4699V17.3699C1.99023 19.9199 4.06023 21.9999 6.61023 21.9999H17.3902C19.9402 21.9999 22.0102 19.9299 22.0102 17.3799V10.5999C22.0102 9.24994 21.1402 7.58994 20.0402 6.81994ZM12.7502 17.9999C12.7502 18.4099 12.4102 18.7499 12.0002 18.7499C11.5902 18.7499 11.2502 18.4099 11.2502 17.9999V14.9999C11.2502 14.5899 11.5902 14.2499 12.0002 14.2499C12.4102 14.2499 12.7502 14.5899 12.7502 14.9999V17.9999Z"
            fill="currentColor"
          />
        </svg>
        <span>Home</span>
      </NavLink>

      {/**search */}
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `group relative cursor-pointer flex flex-col gap-y-1 items-center font-medium text-xs font-family ${
            isActive ? " text-orange" : "text-black2"
          }`
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Search</span>
      </NavLink>

      {/*marketplace */}
      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          `group relative cursor-pointer flex flex-col gap-y-1 items-center font-medium text-xs font-family ${
            isActive ? " text-orange" : "text-black2"
          }`
        }
      >
        <img
          src={marketplace}
          // onClick={() => setIsActive("market")}
          alt="marketplace logo"
        />
      </NavLink>

      {/*cart */}
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `group relative cursor-pointer flex flex-col gap-y-1 items-center font-medium text-xs font-family ${
            isActive ? " text-orange" : "text-black2"
          }`
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.81043 2L5.19043 5.63"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1904 2L18.8104 5.63"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M9.75977 14V17.55"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M14.3604 14V17.55"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <span>Cart</span>
      </NavLink>

      {/*profile */}
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `group relative cursor-pointer flex flex-col gap-y-1 items-center font-medium text-xs font-family ${
            isActive ? " text-orange" : "text-black2"
          }`
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Profile</span>
      </NavLink>
    </div>
  );
}
