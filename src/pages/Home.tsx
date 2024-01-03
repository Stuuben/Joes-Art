import "./Home.scss";

import { NewsSlider } from "../components/NewsSlider";
import { Events } from "../components/Events";
import { VideoPlayer } from "../components/VideoPlayer";

export const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <h2 className="title">Josefin Stuborn</h2>

        <VideoPlayer></VideoPlayer>
        <NewsSlider></NewsSlider>
        <Events></Events>
      </div>
    </div>
  );
};
