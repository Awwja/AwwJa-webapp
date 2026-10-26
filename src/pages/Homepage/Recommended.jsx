/** @format */
import { useNavigate } from "react-router-dom";
import recommendedProducts from "../../data/recommendedProducts";

export default function Recommended() {
  const navigate = useNavigate();

  function clickProduct(product) {
    navigate(`/product-details?product=${product.id}`);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="uppercase text-[18px] font-family2 font-semibold">
        Recommended for you
      </h1>

      {recommendedProducts.map((list) => (
        <div
          className="pt-4 rounded-xl border border-black3 relative"
          key={list.id}
          onClick={() => clickProduct(list)}
        >
          <img src={list.img} className="m-auto h-fit" alt="" />

          <div className="bg-black3 rounded-xl px-4 py-2 flex flex-col gap-y-2">
            {list.negotiate === true && (
              <span className="absolute top-2.5 uppercase bg-orange px-3 py-1.5 text-xs font-family2 font-medium rounded-full w-fit text-white">
                negotiable
              </span>
            )}
            <div className="flex items-center gap-y-2 justify-between">
              <label
                htmlFor=""
                className="capitalize font-medium font-family2 text-black"
              >
                {list.product_name}
              </label>
              <span className="text-green font-bold uppercase font-family2">
                {list.price} ngn
              </span>
            </div>
            <div className="flex items-center gap-y-2 justify-between">
              <span className="font-family text-xs text-[#000000] flex items-center">
                Stall: <p className="uppercase">{list.brand_name}</p>
              </span>

              <span className="text-xs font-family2 text-black flex items-center gap-x-1.5">
                {/*rating svg */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99963 2L9.5663 5.84L13.7063 6.14667L10.533 8.82667L11.5263 12.8533L7.99963 10.6667L4.47297 12.8533L5.4663 8.82667L2.29297 6.14667L6.43297 5.84L7.99963 2Z"
                    fill="#FFDB43"
                  />
                  <path
                    d="M7.99963 2L6.43297 5.84L2.29297 6.14667L5.4663 8.82667L4.47297 12.8533L7.99963 10.6667M7.99963 2L9.5663 5.84L13.7063 6.14667L10.533 8.82667L11.5263 12.8533L7.99963 10.6667"
                    stroke="#FFDB43"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                ({list.rating})
              </span>
            </div>
          </div>
        </div>
      ))}
      {/* <div></div> */}
    </div>
  );
}
