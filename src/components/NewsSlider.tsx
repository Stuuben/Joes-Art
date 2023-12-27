import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { IGetNews } from "../models/IGetNews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_KEY,
});

export const NewsSlider = () => {
  const [news, setNews] = useState<IGetNews[]>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "news",
        order: ["-sys.createdAt"],
      })
      .then((response) => {
        const transformedNews = response.items.map((item) => {
          return {
            fields: item.fields as IGetNews["fields"],
          };
        });

        setNews(transformedNews);
        console.log("transfomedNeeeeews", transformedNews);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    fade: true,
  };

  return (
    <div className="all-news">
      <h3 className="news-h3">Nyheter</h3>
      <Slider {...settings}>
        {news.map((n, index) => (
          <div key={index} className="slide-wrapper">
            <div className="news-wrapper">
              <h4>{n.fields.title}</h4>
              <img
                className="news-image"
                src={n.fields.image.fields.file.url}
                alt={n.fields.title}
              />
              <p>{n.fields.description.content[0].content[0].value}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
