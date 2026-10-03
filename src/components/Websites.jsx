// import amazon from "../assets/websites/amazon.png";
// import dribble from "../assets/websites/dribble.png";
// import hubspot from "../assets/websites/hubspot.png";
// import notion from "../assets/websites/notion.png";
// import netflix from "../assets/websites/netflix.png";
// import zoom from "../assets/websites/zoom.png";
// export default function Websites() {
//   return (
//     <>
//       <div className="w-full">
//         <figure
//           className="flex  mt-10 md:mt-20 flex-wrap gap-5 md:gap-10 lg:gap-20
//       items-center  md:flex-row   "
//         >
//           <img
//             src={amazon}
//             className=" w-28 h-10 md:w-31 md:h-12 brightness-0"
//           ></img>
//           <img src={dribble} className="w-28 h-10 md:w-31 md:h-12"></img>
//           <img
//             src={hubspot}
//             className="w-28 h-10 md:w-31 md:h-12 brightness-0"
//           ></img>
//           <img src={notion} className="w-28 h-10 md:w-31 md:h-12"></img>
//           <img
//             src={netflix}
//             className="w-28 h-10 md:w-31 md:h-12 brightness-0"
//           ></img>
//           <img
//             src={zoom}
//             className="w-28 h-10 md:w-31 md:h-12 brightness-0"
//           ></img>
//         </figure>
//       </div>
//     </>
//   );
// }

// //2
// import amazon from "../assets/websites/amazon.png";
// import dribble from "../assets/websites/dribble.png";
// import hubspot from "../assets/websites/hubspot.png";
// import notion from "../assets/websites/notion.png";
// import netflix from "../assets/websites/netflix.png";
// import zoom from "../assets/websites/zoom.png";
// import Slick from "react-slick";

// const Slider = Slick.default || Slick;

// export default function Websites() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
//   return (
//     <section
//       className="
//         w-full rounded-[45px] mt-10 h-120 sm:h-125 md:h-130
//         lg:h-140 overflow-hidden slider-container
//       "
//     >
//       <Slider {...settings}>
//            <div className="w-full">
//          <figure
//            className="flex  mt-10 md:mt-20 flex-wrap gap-5 md:gap-10 lg:gap-20
//        items-center  md:flex-row   "
//          >
//            <img
//              src={amazon}
//              className=" w-28 h-10 md:w-31 md:h-12 brightness-0"
//            ></img>
//            <img src={dribble} className="w-28 h-10 md:w-31 md:h-12"></img>
//            <img
//              src={hubspot}
//              className="w-28 h-10 md:w-31 md:h-12 brightness-0"
//            ></img>
//            <img src={notion} className="w-28 h-10 md:w-31 md:h-12"></img>
//            <img
//              src={netflix}
//              className="w-28 h-10 md:w-31 md:h-12 brightness-0"
//            ></img>
//            <img
//              src={zoom}
//              className="w-28 h-10 md:w-31 md:h-12 brightness-0"
//            ></img>
//          </figure>
//        </div>
//       </Slider>
//       </section>
//   )}

//3
import amazon from "../assets/websites/amazon.png";
import dribble from "../assets/websites/dribble.png";
import hubspot from "../assets/websites/hubspot.png";
import notion from "../assets/websites/notion.png";
import netflix from "../assets/websites/netflix.png";
import zoom from "../assets/websites/zoom.png";
import Slick from "react-slick";

const Slider = Slick.default || Slick;

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={amazon}></img>
        </div>
        <div>
          <img src={dribble}></img>
        </div>
        <div>
          <img src={hubspot} className="brightness-0"></img>
        </div>
        <div>
          <img src={notion}></img>
        </div>
        <div>
          <img src={netflix} className="brightness-0"></img>
        </div>
        <div>
          <img src={zoom} className="brightness-0"></img>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
