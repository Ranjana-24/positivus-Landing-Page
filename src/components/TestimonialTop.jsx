import SectionsData from "../data/TopBar";

export default function TestimonialTop() {
  return (
    <>
      <section
        className="w-full height-[51px] gap-5 md:gap-10 mt-55 md:mt-18 flex
      flex-wrap flex-col md:flex-row"
      >
        <div>
          <h2
            className="w-66 h-13 font-['Space_Grotesk'] font-medium text-[40px] 
          leading-[100%] bg-[#B9FF66]  text-center  rounded"
          >
            {SectionsData[4].title}
          </h2>
        </div>
        <div>
          <p
            className="w-full max-w-145 md:h-13 font-[Space_Grotesk] font-normal 
          size-5 leading-[100%] flex-wrap"
          >
            {SectionsData[4].description}
          </p>
        </div>
      </section>
    </>
  );
}
