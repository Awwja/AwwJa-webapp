/** @format */

export default function JoinCommunity() {
  return (
    <div className="p-5 bg-green rounded-[20px] flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2 items-center ">
        <h3 className="uppercase text-[18px] font-semibold font-family2 text-white">
          {" "}
          join the awwja community
        </h3>
        <span className="text-sm font-family text-white text-center w-60">
          Get early access to stall launches and exclusive drops.
        </span>
      </div>

      <div className="flex flex-col gap-y-4">
        <input
          type="email"
          className="p-4 bg-white outline-none rounded-[10px] w-full font-family2 text-sm"
          name=""
          placeholder="Enter your email address here"
          id=""
        />
        <button
          type="button"
          className="w-full bg-orange p-2 rounded-[10px] font-family2 font-semibold text-base cursor-pointer text-white hover:opacity-50"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
