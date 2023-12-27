import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allImages } from "./images";

export const TestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="all-news">
      <Slider {...settings}>
        {allImages.map((image, index) => (
          <div key={index}>
            <div className="news-wrapper">
              <img
                className="news-image"
                src={image.url}
                alt={image.description}
              />
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
