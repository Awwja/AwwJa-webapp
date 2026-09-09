/** @format */
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./styles.css";
import Splash from "./pages/Authentication/Onboarding/Splash";
import Screen1 from "./pages/Authentication/Onboarding/Screen1";
import Screen2 from "./pages/Authentication/Onboarding/Screen2";
import Screen3 from "./pages/Authentication/Onboarding/Screen3";
import BoardingScreen from "./pages/Authentication/Onboarding/BoardingScreen";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Login from "./pages/Authentication/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Search from "./pages/Search/Search";
import BottomNav from "./components/BottomNav";
export default function App() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const path =
    location.pathname === "/" ||
    location.pathname.includes("/onboarding") ||
    location.pathname.includes("/login");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route
          path="/onboarding1"
          element={
            <BoardingScreen>
              <Screen1 />
            </BoardingScreen>
          }
        />
        <Route
          path="/onboarding2"
          element={
            <BoardingScreen>
              <Screen2 />
            </BoardingScreen>
          }
        />
        <Route
          path="/onboarding3"
          element={
            <BoardingScreen>
              <Screen3 setLoading={setLoading} />
            </BoardingScreen>
          }
        />
        {/* <Route
          path='/enter-the-market'
          element={
            <BoardingScreen>
              <Screen4 setLoading={setLoading} />
            </BoardingScreen>
          }
        /> */}
        <Route
          path="/login"
          element={
            <BoardingScreen>
              <Login setLoading={setLoading} />
            </BoardingScreen>
          }
        />
        <Route path="/home" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path='enter-the-market' element={<LastOnboardingScreen />} /> */}
      </Routes>
      {!path && <BottomNav />}
      {/**bottom Nav */}
    </div>
  );
}
