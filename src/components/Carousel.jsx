const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  centerMode: true,
  centerPadding: "40px",

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },

    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

export default carouselSettings;
