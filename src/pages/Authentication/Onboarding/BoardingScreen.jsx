/** @format */

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const screens = [
  "/onboarding1",
  "/onboarding2",
  "/onboarding3",
  "/enter-the-market",
];

export default function BoardingScreen({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    const currentIndex = screens.indexOf(location.pathname);

    // Swipe LEFT → next screen
    if (distance > 50 && currentIndex < screens.length - 1) {
      navigate(screens[currentIndex + 1]);
    }

    // Swipe RIGHT → previous screen
    if (distance < -50 && currentIndex > 0) {
      navigate(screens[currentIndex - 1]);
    }

    setTouchStart(null);
  };

  return (
    <div
      className='h-screen w-full touch-pan-y'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}
