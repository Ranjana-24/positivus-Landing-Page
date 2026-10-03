// const carouselSettings = {
//      className: "center",
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   arrows: true,
//   autoplay: false,
//   centerMode: true,
//   centerPadding: "40px",

//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: "0px",
//       },
//     },

//     {
//       breakpoint: 640,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: "0px",
//       },
//     },
//   ],
// };

// export default carouselSettings;

//2
const carouselSettings = {
  className: "center",
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,

  // Desktop
  centerMode: true,
  centerPadding: "320px",

  responsive: [
    {
      // Large desktop
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "200px",
      },
    },

    {
      // Tablet / smaller laptop
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },

    {
      // Mobile
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
        arrows: true,
      },
    },
  ],
};

export default carouselSettings;
