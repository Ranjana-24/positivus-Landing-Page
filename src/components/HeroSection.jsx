import Button from "../ui/Button";
import illustration from "../assets/Illustration.jpg";
export default function HeroSection() {
  return (
    <>
      <section className="mt-5 md:mt-10 mb-8 w-full mx-auto w-[1440px] h-129 flex flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="font['Space_Grotesk'] mt-1 md:mt-8 font-medium max-w-[531px] 
            h-40 md:h-50 text-[38px] leading-[50px] md:text-[60px] md:leading-[60px]">
              Navigating the digital landscape for success
            </h1>
            <p className="max-w-132 h-15 md:h-28 font-['Space_Grotesk'] 
            font-normal text-[20px] leading-7">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button variant="filled" className=" mt-30 md:mt-5">
              Book a consualtion
            </Button>
          </div>
          <figure>
            <img
              src={illustration}
              alt="illustration"
              className=" w-90  mt-8 h-80 md:w-150 md:h-129 "
            />
          </figure>
        </div>
      </section>
    </>
  );
}
