import "./Home.scss";

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
        <h3>Kommande Events</h3>
        <div className="hero-image-wrapper">
          <div className="hero-image"></div>
        </div>
        <div>
          <img src="/public/assets/JOES.svg" alt="joes" />
        </div>
      </div>
    </div>
  );
};
