const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`group flex justify-center items-center gap-2 border font-montserrat px-7 py-4 text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red  text-white"
      } rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          className="group-hover:scale-110 transition-all duration-300 rounded-full ml-2 w-5 h-5"
          src={iconURL}
          alt="arrow_right_button"
        />
      )}
    </button>
  );
};

export default Button;
