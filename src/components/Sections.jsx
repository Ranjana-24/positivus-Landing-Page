import SectionsData from "../data/ServicesData";
export default function Sections({ index }) {
  return (
    <>
      <section className="w-[1440px] height-[51px] gap-5 md:gap-10 mt-38 md:mt-18 flex  flex-col md:flex-row">
        <div>
          <h2 className="w-44 h-11 font-['Space_Grotesk'] font-medium text-[40px] leading-[100%] bg-[#B9FF66] text-center rounded">
            {SectionsData[index].title}
          </h2>
        </div>
        <div>
          <p className="w-145 h-[46px]">{SectionsData[index].description}</p>
        </div>
      </section>
    </>
  );
}
