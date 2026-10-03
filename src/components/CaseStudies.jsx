import CaseStudiesData from "../data/CaseStudiesData";
import arrow from "../assets/arrow.png";

export default function CaseStudies() {
  return (
    <section
      className="w-full h-auto border rounded-[45px] bg-[#191A23] text
      
         px-6 py-8 lg:px-8 lg:py-0  mt-15 md:mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {CaseStudiesData.map((study) => (
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
              className="text-[#B9FF66] text-normal font-space
                 flex mt-6 gap-2 items-center "
            >
              Learn more
              <img src={arrow} alt="arrow" className="w-3 h-3 object-contain" />
            </p>

            <div className="hidden md:block absolute right-0 top-10 h-[60%] w-px bg-white"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
