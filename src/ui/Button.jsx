const variants = {
  blank: "bg-white text-[#191A23] hover:bg-[#191A23] hover:text-white",
  filled: "bg-[#191A23] text-white hover:bg-white hover:text-[#191A23]",
  green:"bg-[#B9FF66] text-black"
};

export default function Button({
  children,
  className = "",
  variant = "filled",
}) {
  return (
    <button
      className={`w-57 h-17 rounded-[14px] border pt-5 pr-9 pb-5 pl-9 leading-[100%] text-center 
        font-['Space_Grotesk'] cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
