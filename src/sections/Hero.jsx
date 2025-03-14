import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section className="flex w-full flex-col xl:flex-row min-h-screen max-container justify-center gap-10">
      <div className="relative xl:w-2/5 flex justify-center items-start flex-col w-full max-lg:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] mx-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen mx-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe_collection"
          width={610}
          height={500}
          className="object-contain relative z-5"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] mx-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe.bigShoe}
                bigShoeImage={bigShoeImage}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
