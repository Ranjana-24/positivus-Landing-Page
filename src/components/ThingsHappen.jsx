import Frame from "../assets/Frame.png";
import Button from "../ui/Button";

export default function ThingsHappen() {
  return (
    <>
      <div
        className="w-full h-auto border rounded-[45px] 
        bg-[#F3F3F3] grid grid-cols-1 lg:grid-cols-2
        gap-8 lg:gap-69 px-6 py-8 lg:px-8 lg:py-0  mt-15 md:mt-20 "
      >
        <div className="flex h-auto items-center mx-4 md:mx-8">
          <div className="max-w-125 w-full">
            <h3
              className="font-space font-medium text-2xl md:text-[30px] pt-5
              leading-[100%]"
            >
              Let’s make things happen
            </h3>

            <p
              className="max-w-125 font-space font-normal leading-[100%] 
            pt-5 text-[16px] md:text-[18px]"
            >
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <Button
              variant="filled"
              className="w-auto  h-10 md:h-15 mt-5 md:mt-5 rounded-[14px] pt-4 "
            >
              Get your free proposal
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <img
            src={Frame}
            alt="frame"
            className="w-full max-w-124 h-auto md:h-99 object-contain"
          />
        </div>
      </div>
    </>
  );
}
