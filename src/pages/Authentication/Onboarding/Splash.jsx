/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/splash.svg";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding1");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <img
        src={img}
        alt='splash screen'
        className='w-full max-w-225 h-full animate-pulse'
      />
    </div>
  );
}
