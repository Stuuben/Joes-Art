import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ImageView.scss";
import { Form } from "./Form";
import { IGetImages } from "../models/IGetImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const ImageView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image: IGetImages = location.state?.image;

  const goBackToGallery = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="view-wrapper">
      <div className="return-icon-wrapper">
        <FontAwesomeIcon
          className="return-icon"
          icon={faArrowLeft}
          onClick={goBackToGallery}
        />
      </div>
      <h2>{image.fields.name}</h2>
      <img
        className="img-view"
        src={image.fields.image.fields.file.url}
        alt={image.fields.name}
      ></img>
      <div className="box-divider">
        <span className="type-names">Beskrivning: </span>
        <span>{image.fields.description}</span>
      </div>
      <div className="box-divider">
        <span className="type-names">Pris: </span>
        <span> {image.fields.price} kr</span>
      </div>
      <div className="box-divider">
        <span className="type-names">Storlek:</span>
        {image.fields.size && <span>{image.fields.size} cm</span>}
      </div>

      <div className="box-divider">
        <span className="type-names">Typ: </span>
        <span> {image.fields.category}</span>
      </div>

      <div className="box-divider" style={{ paddingTop: "8px" }}>
        {image.fields.isSold && <div className="sold-sticker">SÅLD</div>}
      </div>

      <div className="contact-me">
        <p>Är du intresserad av att köpa?</p>
        <p>
          Kotakta mig, se under <Link to={"/contact"}>Kontakt</Link> eller fyll
          i formuläret nedan.
        </p>
      </div>
      <Form subject={image.fields.name}></Form>
      <div className="spacing"></div>
    </div>
  );
};
