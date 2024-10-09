import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HighlightSlide: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide Destaque 1</h3>
      </div>
      <div>
        <h3>Slide Destaque 2</h3>
      </div>
      <div>
        <h3>Slide Destaque 3</h3>
      </div>
    </Slider>
  );
};

export default HighlightSlide;
