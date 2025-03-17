const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:shadow-2xl transition-all ease-in-out duration-300">
      <div className="bg-coral-red h-11 w-11 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
