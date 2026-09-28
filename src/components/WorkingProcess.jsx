import WorkingProcessData from "../data/WorkingData";
import plusIcon from "../assets/plusIcon.png";

export default function WorkingProcess() {
  return (
    <section className="max-w-358 mt-10 h-280">
      {WorkingProcessData.map((process) => (
        <div
          key={process.head}
          className="max-w-308 h-40 rounded-[45px] border mb-5 flex items-center 
          justify-between px-10 bg-[#F3F3F3]"
        >
          <div className="w-full flex items-center justify-between">
            
            {/* title */}
            <div className="flex items-center gap-6">
              <p className="font-[Space_Grotesk] font-medium text-6xl leading-none">
                {process.head}
              </p>

              <p className="font-[Space_Grotesk] font-medium text-3xl leading-none">
                {process.title}
              </p>
            </div>

            {/* Plus Icon */}
            <figure>
              <img
                src={plusIcon}
                alt="plus"
                className="w-[58px] h-[58px]"
              />
            </figure>

          </div>
        </div>
      ))}
    </section>
  );
}