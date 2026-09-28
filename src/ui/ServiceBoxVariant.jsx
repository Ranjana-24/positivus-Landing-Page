const variants = {
  white: "bg-[#F3F3F3] text-[#191A23]",
  black: "bg-[#191A23] text-[#191A23]",
  green: "bg-[#B9FF66] text-[#191A23]",
};

export default function ServiceBoxVariant({
  children,
  className = "",
  variant = "white",
}) {
  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}