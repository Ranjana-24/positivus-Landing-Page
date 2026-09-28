import SectionsData from "../data/ServicesData";
export default function Sections({ index }) {
  return (
    <>
      <section className=" h-13 gap-10 pl-25 pr-25 relative">
        <div>
          <h2 className="w-45 h-13 absolute px-[100px]">
            {SectionsData[index].title}
          </h2>
        </div>
        <div>
          <p className="w-145 h-12 font-['Space_Grotesk'] font-normal text-black ">
            {SectionsData[index].description}
          </p>
        </div>
      </section>
    </>
  );
}
