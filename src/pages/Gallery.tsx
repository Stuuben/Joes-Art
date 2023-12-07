import { allImages } from "../components/images";
import "./Gallery.scss";

export const Gallery = () => {
  const showImages = allImages.map((image) => (
    <div className="image-wrapper" key={image.id}>
      <img className="image-box" src={image.url} alt={image.titel}></img>
      <h5 className="titel">{image.titel}</h5>
      <p className="price">{image.price}:-</p>
      <button>Mer infromation</button>
    </div>
  ));

  return (
    <div className="gallery-wrapper">
      <h3>Galleri</h3>

      <h4 className="categories-name">Akvarell</h4>
      <div className="image-grid">{showImages}</div>
      <h4 className="categories-name">Akryl</h4>
      <div className="image-grid">{showImages}</div>
      <h4 className="categories-name">Skulpturer</h4>
    </div>
  );
};
