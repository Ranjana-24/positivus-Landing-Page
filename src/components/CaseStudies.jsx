import CaseStudiesData from "../data/CaseStudiesData";
import arrow from "../assets/arrow.png";

export default function CaseStudies() {
  return (
    <section className="px-3 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full w-302 mt-10 h-auto rounded-[45px] bg-[#191A23]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {CaseStudiesData.map((study, index) => (
            <div
              key={study.content}
              className="w-full min-h-55 flex flex-col justify-between
                         p-6 sm:p-8 md:p-10 lg:p-12 relative"
            >
              <p
                className="text-white font-normal font-space
              w-full h-auto md:min-h-29 relative"
              >
                {study.content}
              </p>

              <p
                className="text-[#B9FF66] font-normal font-space
                 flex mt-6 gap-2 items-center "
              >
                Learn more
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 h-3 object-contain"
                />
              </p>
               
              <div className="hidden md:block absolute right-0 top-10 h-[60%] w-px bg-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}