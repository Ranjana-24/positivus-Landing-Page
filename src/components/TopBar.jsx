import SectionsData from "../data/TopBar";
export default function TopBar() {
  return (
    <>
      <section
        className="w-full gap-6 items-start md:gap-10  mt-15 md:mt-20 flex
      flex-wrap flex-col md:flex-row "
      >
        <div>
          <h2
            className="w-full  font-space font-medium text-[28px] md:text-[40px] 
          leading-[100%] bg-[#B9FF66]  text-center  rounded-[7px] px-1"
          >
            {SectionsData[0].title}
          </h2>
        </div>
        <div>
          <p
            className="w-full h-auto max-w-145  font-space font-normal 
          size-5 leading-[100%] flex-wrap"
          >
            {SectionsData[0].description}
          </p>
        </div>
      </section>
    </>
  );
}
