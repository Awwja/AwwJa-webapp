/** @format */
import { useState } from "react";
import forward from "../../../assets/forward.svg";
import { useNavigate } from "react-router-dom";

// import { formatNumber } from "../../../utils/formatNumber";
export default function Login({ setLoading }) {
  const [number, setNumber] = useState("");
  const enter = number.length === 11;
  const navigate = useNavigate();
  function handlePhoneChange(e) {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setNumber(value);
  }

  function Enter() {
    setLoading(true);

    setTimeout(() => {
      navigate("/homepage");
      setLoading(false);
    }, 3500);
  }
  return (
    <div className='overflow-hidden'>
      <img
        src='https://res.cloudinary.com/dgwp5nnxb/image/upload/v1788101197/login_image_c25nhj.svg'
        className='w-full relative'
        alt=''
        fetchPriority='high'
        decoding='async'
      />
      <div className='absolute w-full top-92.5 flex flex-col gap-y-4 justify-center px-6'>
        {/*Header section */}
        <div className='flex flex-col gap-y-1 text-center '>
          <h3 className='text-white text-3xl font-semibold font-family2'>
            Welcome
          </h3>
          <span className='text-white font-family font-semibold'>
            Your market is one tap away
          </span>
        </div>
        {/*input number & enter the market button */}
        <div className='flex flex-col gap-y-4 mt-4 relative before:content-["phone number"]'>
          <span className='absolute -top-2 left-5 text-[10px] uppercase bg-[#D2D2D2] font-bold px-2 py-0.5 text-orange'>
            Phone number
          </span>
          <div className='bg-[#E8E8E8] rounded-xl p-4 flex items-center'>
            <span className='text-black text-[18px] font-medium font-family'>
              234
            </span>
            <hr className='w-6.25 h-0.5 transform-[rotate(90deg)]  border-[#A4A4A4] ' />
            <input
              className='outline-none w-full font-semibold font-family'
              placeholder='809 123 7070'
              type='number'
              name=''
              value={number}
              onChange={handlePhoneChange}
              id=''
            />
          </div>

          <button
            type='button'
            className='w-full py-2 bg-[#6B6D22] rounded-[10px] border border-[#DADC8F] text-white flex items-center justify-center cursor-pointer gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={Enter}
            disabled={!enter}
          >
            Enter the Market
            <img src={forward} alt='' />
          </button>
        </div>

        {/*OR */}
        <div className='flex items-center mt-2 justify-center gap-x-2 text-[#D2D2D2] font-family text-xs font-light'>
          <hr className='w-full border-[#A4A4A4]' />
          <span>or</span>
          <hr className='w-full border-[#A4A4A4]' />
        </div>

        {/*Login with email */}
        <div className='bg-white p-4 w-full rounded-[10px] text-[#6B6D22] text-sm font-medium font-family2 shadow-2xl flex items-center cursor-pointer gap-x-2 justify-center'>
          <svg
            width='16'
            height='14'
            viewBox='0 0 16 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.6 14C1.16 14 0.783333 13.8286 0.47 13.4859C0.156667 13.1432 0 12.7312 0 12.25V1.75C0 1.26875 0.156667 0.856771 0.47 0.514063C0.783333 0.171354 1.16 0 1.6 0H14.4C14.84 0 15.2167 0.171354 15.53 0.514063C15.8433 0.856771 16 1.26875 16 1.75V12.25C16 12.7312 15.8433 13.1432 15.53 13.4859C15.2167 13.8286 14.84 14 14.4 14H1.6ZM8 7.875L1.6 3.5V12.25H14.4V3.5L8 7.875ZM8 6.125L14.4 1.75H1.6L8 6.125Z'
              fill='#6B6D22'
            />
          </svg>

          <span>Login with email</span>
        </div>

        {/*Login with google or apple */}
        <div className='flex items-center justify-center mt-4 gap-x-7'>
          <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer'>
            <img
              src='https://res.cloudinary.com/dgwp5nnxb/image/upload/v1788099827/google_hzgtrd.svg'
              alt='Google Icon'
            />
          </div>
          <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer'>
            <img
              src='https://res.cloudinary.com/dgwp5nnxb/image/upload/v1788099801/apple_th4grd.svg'
              alt='Apple Icon'
            />
          </div>
        </div>

        {/*Join Awwja */}
        <div className='flex mt-10 flex-col items-center gap-y-2'>
          {/* <img className='w-fit' src={join} alt='' /> */}
          <span className='text-white font-family2 text-xs'>
            New here? Join thousands on Awwja{" "}
            <span className='underline font-semibold'>Create account</span>
          </span>
        </div>
      </div>
    </div>
  );
}
