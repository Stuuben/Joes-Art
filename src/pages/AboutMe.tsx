import { VideoPlayer } from "../components/VideoPlayer";
import "./AboutMe.scss";

export const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="about-main">
        <h2>Om mig</h2>
        <div className="about-inner">
          <h3>Josefin Stuborn</h3>
          <img src="/assets/josefin.png" alt="josefin" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            quas, ipsum voluptate nam molestias modi! Similique quisquam
            architecto, obcaecati doloribus mollitia aperiam atque nesciunt?
            Veniam reiciendis alias numquam excepturi?
          </p>

          <p>
            Utbildning: Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Tempora fugit, placeat et nihil repellendus sit obcaecati,
          </p>
        </div>
        <div className="video-player">
          <h4>Skapandet av en av mina verk</h4>
          <VideoPlayer></VideoPlayer>
        </div>
      </div>
    </div>
  );
};
