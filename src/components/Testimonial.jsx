// import Slick from "react-slick";
// import carouselSettings from "./Carousel";
// import TestimonialData from "../data/TestimonialData";

// const Slider = Slick.default || Slick;

// export default function Testimonial() {
//   return (
//     <section className="w-full bg-[#191A23] text-white h-120 md:h-156 rounded-[45px] mt-10
//     slider-container">

//       <Slider {...carouselSettings}>

//         {TestimonialData.map((testimonial, index) => (
//           <div key={index} className="px-2 sm:px-3">

//             {/* Complete testimonial */}
//             <div className="w-full max-w-151 mx-auto ">

//               {/* Testimonial Box */}
//               <div
//                 className="
//                   w-full md:w-125 h-60
//                   border border-[#B9FF66]
//                   rounded-[45px]
//                   px-6 sm:px-8 md:px-13
//                   py-8 md:py-12
//                   font-[Space-Grotesk]
//                   md:mt-25
//                   mt-15
//                 "
//               >
//                 <p className="text-[18px] font-normal leading-[100%] h-full fit-content">
//                   {testimonial.content}
//                 </p>
//               </div>

//               {/* Author */}
//               <div className="ml-8 sm:ml-12 md:ml-20 mt-10 font-[Space-Grotesk]">
//                 <h4 className="text-[#B9FF66] text-[18px]">
//                   John Smith
//                 </h4>

//                 <p className="text-[18px]">
//                   Marketing Director at XYZ Corp
//                 </p>
//               </div>

//             </div>

//           </div>
//         ))}

//       </Slider>

//     </section>
//   );
// }

// //2
// import React, { Component } from "react";
// import Slick from "react-slick";
// import testimonialData from "../data/TestimonialData";
// const Slider = Slick.default || Slick;

// function CenterMode() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className= "w-full bg-black">
//           {testimonialData.map((testimonial, index) => (
//             <div >
//                <div>
//                 <div>
//                   <div>
//                     <div>
//                       {testimonial.content}
//                       </div>
//                   </div>
//                 </div>
//                </div>
//             </div>
//           ))}
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default CenterMode;

//3
import Slick from "react-slick";
import carouselSettings from "./Carousel";
import TestimonialData from "../data/TestimonialData";

const Slider = Slick.default || Slick;

export default function Testimonial() {
  return (
    <section
      className="
        w-full bg-[#191A23] text-white rounded-[45px] mt-10 h-120 sm:h-125 md:h-130
        lg:h-140  slider-container
      "
    >
      <Slider {...carouselSettings}>
        {TestimonialData.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="flex flex-col items-center">
              {/* Testimonial Box */}
              <div
                className="
                  w-full max-w-[606px] min-h-[266px] border border-[#B9FF66] rounded-[45px] px-6
                  sm:px-8 md:px-10 lg:px-12 py-8
                  sm:py-10 font-space  mt-12 md:mt-16 lg:mt-20
                "
              >
                <p
                  className=" text-[14px] sm:text-[16px]
                    md:text-[17px] lg:text-[18px] leading-[1.4] font-space
                  "
                >
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div
                className="
                  w-full max-w-[606px] mt-5
                  px-6 sm:px-8 md:px-10 lg:px-12
                "
              >
                <h4 className="text-[#B9FF66] text-[16px] sm:text-[18px] font-space">
                  John Smith
                </h4>

                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-space">
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
