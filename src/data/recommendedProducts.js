import sneakers from "../assets/homepage/sneakers.png";
import bag from "../assets/homepage/bag.png";
import chair from "../assets/homepage/chair.png";
import bead from "../assets/homepage/bead.png";

const recommendedProducts = [
  {
    id: "sneakers",
    negotiate: true,
    img: sneakers,
    product_name: "sneakers",
    brand_name: "mama chidera",
    price: "35,000",
    rating: "4.7",
    price_one: "18,000",
    price_two: "20,000",
    price_three: "22,000",
  },
  {
    id: "bag",
    negotiate: false,
    img: bag,
    product_name: "bag",
    brand_name: "dora",
    price: "25,000",
    rating: "4.2",
  },
  {
    id: "accent-chair",
    negotiate: true,
    img: chair,
    product_name: "accent chair",
    brand_name: "judgt furnitures",
    price: "150,000",
    rating: "4.1",
    price_one: "120,000",
    price_two: "130,000",
    price_three: "145,000",
  },
  {
    id: "beaded-waistchain",
    negotiate: false,
    img: bead,
    product_name: "beaded waistchain",
    brand_name: "zuri's craft",
    price: "7,000",
    rating: "4.0",
  },
];

export default recommendedProducts;
