import Button from "../ui/Button";
import illustration from "../assets/Illustration.jpg";
export default function HeroSection() {
  return (
    <>
      <section className="mt-5 md:mt-10 mb-8 w-full h-auto flex flex-wrap">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
          <div>
            <h1
              className="font['Space_Grotesk'] mt-1 md:mt-8 font-medium max-w-[531px] 
             text-[38px] leading-[50px] md:text-[60px] md:leading-[60px] mb-2 md:mb-3"
            >
              Navigating the digital landscape for success
            </h1>
            <p
              className="max-w-132  md:h-28 font-['Space_Grotesk'] 
            font-normal text-[20px] leading-7"
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button variant="filled" className="mt-6 md:mt-5">
              Book a consualtion
            </Button>
          </div>
          <figure>
            <img
              src={illustration}
              alt="illustration"
              className="w-full max-w-[600px] h-auto mt-8"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
