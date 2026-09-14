import sneakers from "../../../assets/homepage/sneakers.png";
import bag from "../../../assets/homepage/bag.png";
import chair from "../../../assets/homepage/chair.png";
import bead from "../../../assets/homepage/bead.png";

export default function AvailableProduct() {
  const recommend = [
    {
      negotiate: false,
      img: sneakers,
      product_name: "sneakers",
      brand_name: "mama chidera",
      price: "₦15,500",
      rating: "12",
    },
    {
      negotiate: true,
      img: bag,
      product_name: "bag",
      brand_name: "dora",
      price: "₦10,000",
      rating: "45",
    },
    {
      negotiate: true,
      img: chair,
      product_name: "accent chair",
      brand_name: "judgt furnitures",
      price: "₦25,500",
      rating: "5",
    },
    {
      negotiate: false,
      img: bead,
      product_name: "beaded ",
      brand_name: "zuri's craft",
      price: "₦70,000",
      rating: "18",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-2.5 w-full px-5 mt-5 pb-10">
      <div className="flex justify-between w-full">
        <span className="text-[18px] font-semibold font-family2">
          Available Products
        </span>
        <button
          type="button"
          className="text-orange text-sm font-medium font-family cursor-pointer"
        >
          View all
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-6">
        {recommend.map((data, index) => (
          <div className="flex flex-col gap-y-2 bg-white shadow-2xl rounded-xl py-2 px-4">
            <div className="relative">
              {/*negotiate */}
              {data.negotiate === true && (
                <span className="absolute top-2.5 uppercase bg-orange px-3 py-1.5 text-xs font-family2 font-medium rounded-full w-fit text-white">
                  negotiable
                </span>
              )}
              <img className="w-36.5 h-44" src={data.img} alt="" />

              {/*love */}

              <div className="absolute right-0 w-8 h-8 bottom-2 rounded-xl flex items-center justify-center bg-black3 cursor-pointer">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33333 15.2917L7.125 14.2083C5.72222 12.9444 4.5625 11.8542 3.64583 10.9375C2.72917 10.0208 2 9.19792 1.45833 8.46875C0.916667 7.73958 0.538194 7.06944 0.322917 6.45833C0.107639 5.84722 0 5.22222 0 4.58333C0 3.27778 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.27778 0 4.58333 0C5.30556 0 5.99306 0.152778 6.64583 0.458333C7.29861 0.763889 7.86111 1.19444 8.33333 1.75C8.80556 1.19444 9.36806 0.763889 10.0208 0.458333C10.6736 0.152778 11.3611 0 12.0833 0C13.3889 0 14.4792 0.4375 15.3542 1.3125C16.2292 2.1875 16.6667 3.27778 16.6667 4.58333C16.6667 5.22222 16.559 5.84722 16.3438 6.45833C16.1285 7.06944 15.75 7.73958 15.2083 8.46875C14.6667 9.19792 13.9375 10.0208 13.0208 10.9375C12.1042 11.8542 10.9444 12.9444 9.54167 14.2083L8.33333 15.2917ZM8.33333 13.0417C9.66667 11.8472 10.7639 10.8229 11.625 9.96875C12.4861 9.11458 13.1667 8.37153 13.6667 7.73958C14.1667 7.10764 14.5139 6.54514 14.7083 6.05208C14.9028 5.55903 15 5.06944 15 4.58333C15 3.75 14.7222 3.05556 14.1667 2.5C13.6111 1.94444 12.9167 1.66667 12.0833 1.66667C11.4306 1.66667 10.8264 1.85069 10.2708 2.21875C9.71528 2.58681 9.33333 3.05556 9.125 3.625H7.54167C7.33333 3.05556 6.95139 2.58681 6.39583 2.21875C5.84028 1.85069 5.23611 1.66667 4.58333 1.66667C3.75 1.66667 3.05556 1.94444 2.5 2.5C1.94444 3.05556 1.66667 3.75 1.66667 4.58333C1.66667 5.06944 1.76389 5.55903 1.95833 6.05208C2.15278 6.54514 2.5 7.10764 3 7.73958C3.5 8.37153 4.18056 9.11458 5.04167 9.96875C5.90278 10.8229 7 11.8472 8.33333 13.0417Z"
                    fill="#316342"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <h3 className="text-sm font-semibold font-family2 capitalize">
                {data.product_name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold font-family text-green">
                  {data.price}
                </span>
                <span className="text-[10px] text-black2 font-family">
                  {data.rating}sold
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
