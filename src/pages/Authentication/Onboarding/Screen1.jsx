/** @format */
import img from "../../../assets/screen1.svg";
import { useNavigate } from "react-router-dom";
export default function Screen1() {
  const navigate = useNavigate();

  return (
    <div className='p-6 bg-linear-to-b from-[#BD5E1F] to-white'>
      <span
        className='w-full flex justify-end font-medium text-base text-black'
        onClick={() => navigate("/onboarding2")}
      >
        Skip
      </span>

      <div className='flex flex-col items-center justify-center gap-y-4 mt-10'>
        <img src={img} alt='' className='w-full mt-20' />
        <div className='mt-6'>
          <h2 className='font-family2 text-3xl text-black text-center font-semibold'>
            Your Market,
          </h2>
          <p className='text-orange text-3xl font-semibold font-family2 text-center'>
            Now In Your Pocket
          </p>
        </div>
        <div class='flex items-center gap-3 mt-10'>
          <button class='w-8 h-13.25 rounded-full bg-[#6B6D22]'></button>
          <button class='w-6 h-6 rounded-full bg-[#6B6D22] opacity-70'></button>

          <button class='w-6 h-6 rounded-full bg-[#6B6D22] opacity-30'></button>
        </div>{" "}
      </div>
    </div>
  );
}
