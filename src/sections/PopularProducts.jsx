import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container mx-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-montserrat font-bold ">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 mt-16 sm:gap-16 gap-4">
        {products.map((product, index) => (
          <PopularProductsCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
