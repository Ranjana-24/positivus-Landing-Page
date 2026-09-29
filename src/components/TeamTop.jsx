import SectionsData from "../data/TopBar";
export default function TeamTop() {
  return (
    <>
      <section
        className="w-full height-[51px] gap-5 md:gap-10 mt-55 md:mt-10 flex
      flex-wrap flex-col md:flex-row"
      >
        <div>
          <h2
            className="w-29 h-11 font-['Space_Grotesk'] font-medium text-[40px] 
          leading-[100%] bg-[#B9FF66]  text-center  rounded-[7px]"
          >
            {SectionsData[3].title}
          </h2>
        </div>
        <div>
          <p
            className="w-full max-w-118 md:h-12 font-['Space_Grotesk'] font-normal 
          size-5 leading-[100%] flex-wrap"
          >
            {SectionsData[3].description}
          </p>
        </div>
      </section>
    </>
  );
}
