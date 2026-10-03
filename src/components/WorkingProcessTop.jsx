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
          leading-[100%] bg-[#B9FF66] text-center  rounded-[7px] md:items-center px-1"
          >
            {SectionsData[2].title}
          </h2>
        </div>
        <div>
          <p
            className="w-full max-w-145 h-auto font-space font-normal 
          size-5 leading-[100%] md:p-2"
          >
            {SectionsData[2].description}
          </p>
        </div>
      </section>
    </>
  );
}
