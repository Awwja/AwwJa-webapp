/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding1");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <img
        src='https://res.cloudinary.com/dgwp5nnxb/image/upload/v1788099809/splash_lakkyb.svg'
        alt='splash screen'
        className='w-full max-w-225 h-full animate-pulse'
      />
    </div>
  );
}
