import "./Home.scss";

import { NewsSlider } from "../components/NewsSlider";
import { Events } from "../components/Events";

export const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <h3 className="title">Josefin Stuborn</h3>
        <p className="image-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          sint ipsam, exercitationem voluptates, nihil laborum magnam non
          corrupti tenetur id, ab inventore hic? Non quod iure, dolorum facere
          minima in.
        </p>
        <NewsSlider></NewsSlider>
        <Events></Events>
        <div></div>
      </div>
    </div>
  );
};
