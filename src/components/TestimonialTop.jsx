import SectionsData from "../data/TopBar";
export default function TopBar() {
  return (
    <>
      <section
        className="w-full gap-6 items-start md:gap-10 mt-15 md:mt-20 flex
      flex-wrap flex-col md:flex-row"
      >
        <div>
          <h2
            className="font-space font-medium text-[28px] md:text-[40px] 
          leading-[100%] bg-[#B9FF66]  rounded-[7px] "
          >
            {SectionsData[4].title}
          </h2>
        </div>
        <div>
          <p
            className="w-full max-w-145  font-space font-normal 
          text-base sm:text-xlleading-[100%] "
          >
            {SectionsData[4].description}
          </p>
        </div>
      </section>
    </>
  );
}
