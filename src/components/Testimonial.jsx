import Slick from "react-slick";
import carouselSettings from "./Carousel";
import TestimonialData from "../data/TestimonialData";

const Slider = Slick.default || Slick;

export default function Testimonial() {
  return (
    <section className="w-full bg-[#191A23] text-white h-120 md:h-156 rounded-[45px] mt-10">

      <Slider {...carouselSettings}>

        {TestimonialData.map((testimonial, index) => (
          <div key={index} className="px-2 sm:px-3">

            {/* Complete testimonial */}
            <div className="w-full max-w-151 mx-auto ">

              {/* Testimonial Box */}
              <div
                className="
                  w-full md:w-125 h-60
                  border border-[#B9FF66]
                  rounded-[45px]
                  px-6 sm:px-8 md:px-13 
                  py-8 md:py-12
                  font-[Space-Grotesk]
                  md:mt-25
                  mt-15
                "
              >
                <p className="text-[18px] font-normal leading-[100%] h-full fit-content">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="ml-8 sm:ml-12 md:ml-20 mt-10 font-[Space-Grotesk]">
                <h4 className="text-[#B9FF66] text-[18px]">
                  John Smith
                </h4>

                <p className="text-[18px]">
                  Marketing Director at XYZ Corp
                </p>
              </div>

            </div>

          </div>
        ))}

      </Slider>

    </section>
  );
}