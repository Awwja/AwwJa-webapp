import { useSearchParams } from "react-router-dom";
import recommendedProducts from "../../data/recommendedProducts";
import Images from "./Images";
import Details from "./Details";
import TheStory from "./TheStory";
import Experiences from "./Experiences";
import AvailableProduct from "../Homepage/SellersStall/AvailableProduct";
import CounterOffer from "./Offer/CounterOffer";
import { useState } from "react";

export default function ProductDetails({ setLoadingApp }) {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const product = recommendedProducts.find((item) => item.id === productId);

  const [lastPrice, setLastPrice] = useState(false);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="bg-[#F9F9F9] pt-5 flex flex-col gap-y-6  pb-10 relative">
      <Images img={product.img} />
      <Details
        brand_name={product.brand_name}
        product_name={product.product_name}
        price={product.price}
        rating={product.rating}
        setLastPrice={setLastPrice}
        lastPrice={lastPrice}
        negotiate={product.negotiate}
      />
      <TheStory />
      <Experiences />
      <div className="px-5">
        {" "}
        <AvailableProduct />
      </div>

      {lastPrice && (
        <CounterOffer
          img={product.img}
          product_name={product.product_name}
          brand_name={product.brand_name}
          price={product.price}
          price_one={product.price_one}
          price_two={product.price_two}
          price_three={product.price_three}
          onDismiss={() => setLastPrice(false)}
          setLoadingApp={setLoadingApp}
        />
      )}
    </div>
  );
}
