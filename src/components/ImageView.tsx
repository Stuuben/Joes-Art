import { Link, useLocation } from "react-router-dom";
import { IGetImages } from "../pages/Gallery";
import "./ImageView.scss";

export const ImageView: React.FC = () => {
  const location = useLocation();
  const image: IGetImages = location.state?.image;

  // Now you have access to the image object in the state
  console.log("image in ImageView", image);

  return (
    <div className="view-wrapper">
      <h2>{image.fields.name}</h2>
      <img
        className="img-view"
        src={image.fields.image.fields.file.url}
        alt={image.fields.name}
      ></img>
      <div className="box-divider">
        <span className="type-names">Storlek:</span>
        <span> {image.fields.size} cm</span>
      </div>
      <div className="box-divider">
        <span className="type-names">Pris: </span>
        <span> {image.fields.price} kr</span>
      </div>
      <div className="box-divider">
        <span className="type-names">Typ: </span>
        <span> {image.fields.category}</span>
      </div>

      <div className="box-divider">
        <span className="type-names">Beskrivning: </span>
        <span>
          {image.fields.description} Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Est provident et earum, autem aut in corporis
          itaque, sint ut iure nihil facilis quos labore suscipit officiis ex
          neque quae sed!
        </span>
      </div>
      <div className="contact-me">
        <p>Är du intresserad av att köpa?</p>
        <p>
          Kotakta mig, se under <Link to={"/contact"}>Kontakt</Link>
        </p>
      </div>
    </div>
  );
};
