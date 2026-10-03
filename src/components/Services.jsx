import ServiceData from "../data/ServiceData";
import ServiceBoxVariant from "../ui/ServiceBoxVariant";
import Icon from "../assets/Services/Icon.png";

export default function Services() {
  return (
    <div
      className="mx-auto mt-10 grid w-full grid-cols-1 md:grid-cols-2 
    gap-10 px-5"
    >
      {ServiceData.map((service) => (
        <ServiceBoxVariant
          key={service.name}
          variant={service.variant}
          className="grid h-77  w-full  grid-cols-1 md:grid-cols-2 rounded-[45px] border border-black
          border-b-4 px-6 py-6"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between py-1">
            {/* Service title */}
            <h2 className=" text-[18px] md:text-[24px] leading-[1.31] font-space ">
              <span
                className={`rounded-[7px] bg-[#B9FF66] px-1  
        ${
          service.variant === "green"
            ? "bg-white text-black"
            : "bg-[#B9FF66] text-black"
        }
         [box-decoration-break:clone] [-webkit-box-decoration-break:clone]`}
              >
                {service.name}
              </span>
            </h2>

            {/* Learn more */}
            <div
              className={`flex items-center gap-2 mt-2 cursor-pointer
              ${
                service.variant === "green" || service.variant === "white"
                  ? " text-black"
                  : " text-white"
              }`}
            >
              <img src={Icon} alt="learn more" className="h-7 w-7" />

              <p className="text-[12px] md:text-[16px] font-space ">
                Learn more
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">
            <img
              src={service.image}
              alt={service.name}
              className="h-[150px] md:h-[220px] w-full object-contain"
            />
          </div>
        </ServiceBoxVariant>
      ))}
    </div>
  );
}
