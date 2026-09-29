import SectionsData from "../data/TopBar";
export default function TopBar() {
  return (
    <>
      <section
        className="w-full gap-6 items-center md:gap-10 mt-10 md:mt-18 flex
      flex-wrap flex-col md:flex-row"
      >
        <div>
          <h2
            className="font-['Space_Grotesk'] font-medium text-[28px] md:text-[40px] 
          leading-[100%] bg-[#B9FF66] text-center  rounded-[7px] md:items-center"
          >
            {SectionsData[2].title}
          </h2>
        </div>
        <div>
          <p
            className="w-full max-w-145  font-['Space_Grotesk'] font-normal 
          size-5 leading-[100%] "
          >
            {SectionsData[2].description}
          </p>
        </div>
      </section>
    </>
  );
}
