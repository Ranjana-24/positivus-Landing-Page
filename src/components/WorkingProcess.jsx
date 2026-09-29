import WorkingProcessData from "../data/WorkingData";
import plusIcon from "../assets/plusIcon.png";

export default function WorkingProcess() {
  return (
    <section className="w-full mt-10 h-auto">
      {WorkingProcessData.map((process) => (
        <div
          key={process.head}
          className="w-full h-40 rounded-[45px] border border-b-4 mb-5 flex items-center 
          justify-between px-10 bg-[#F3F3F3]"
        >
          <div className="w-full flex items-center justify-between">
            {/* title */}
            <div className="flex items-center gap-6">
              <p className="hidden md:block font-[Space_Grotesk] font-medium text-3xl md:text-6xl leading-none">
                {process.head}
              </p>

              <p className="font-[Space_Grotesk] w-auto font-medium text-2xl md:text-3xl 
              leading-none ">
                {process.title}
              </p>
            </div>

            {/* Plus Icon */}
            <figure>
              <img src={plusIcon} alt="plus" className=" w-[58px] h-[58px]" />
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
}
