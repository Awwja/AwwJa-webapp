/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter basename='/AwwJa-webapp'>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route
          path='/onboarding1'
          element={
            <BoardingScreen>
              <Screen1 />
            </BoardingScreen>
          }
        />
        <Route
          path='/onboarding2'
          element={
            <BoardingScreen>
              <Screen2 />
            </BoardingScreen>
          }
        />
        <Route
          path='/onboarding3'
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
          path='/login'
          element={
            <BoardingScreen>
              <Login setLoading={setLoading} />
            </BoardingScreen>
          }
        />
        <Route path='homepage' element={<Homepage />} />
        {/* <Route path='enter-the-market' element={<LastOnboardingScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
