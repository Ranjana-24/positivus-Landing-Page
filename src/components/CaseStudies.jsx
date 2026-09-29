import CaseStudiesData from "../data/CaseStudiesData";
import arrow from "../assets/arrow.png";
export default function CaseStudies() {
  return (
    <>
      <section>
        <div className="w-full mt-10  h-auto rounded-[45px] bg-[#191A23] ">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {CaseStudiesData.map((study) => (
              <div
              key={study.content}
                className=" w-full md:w-71 h-auto  justify-between flex 
                    flex-col p-8 md:p-12 relative"
              >
                <p className="text-white font-normal font-[Space_Grotesk]">
                  {study.content}
                </p>
                <p className="text-[#B9FF66] font-normal font-[Space_Grotesk] 
                flex mt-3 gap-2">
                  Learn more
                  <img src={arrow} alt="arrow" className="w-3 h-3 mt-2" />
                </p>
                <div
                  className="absolute mt-15 right-0 top-0 border-b-2 h-40 
                        w-px bg-white md:block "
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
