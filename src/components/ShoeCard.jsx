const ShoeCard = ({ imgURL, bigShoeImage, changeBigShoeImage }) => {
  console.debug("bigShoeImage: ", bigShoeImage);
  console.debug("imgURL.bigShowImage: ", imgURL);
  let handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"
      }
      cursor-pointer max-sm:flex-1
      `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="big shoe image"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
