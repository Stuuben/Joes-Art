import React from "react";
import { Link } from "react-router-dom";
import { IGetImages } from "../models/IGetImages";

interface GalleryImageProps {
  image: IGetImages;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ image }) => (
  <div className="image-wrapper" key={image.sys.id}>
    <Link to={`/gallery/${image.fields.name}`} state={{ image }}>
      <div className="boxbox">
        <div className="image-inner">
          {image.fields.isSold && <div className="sold-sticker">SÅLD</div>}
          <img
            className="image-box"
            src={image.fields.image.fields.file.url}
            alt={image.fields.title}
          />
        </div>
        <div className="image-desc">
          <h5 className="title">{image.fields.name}</h5>
          <p className="size">{image.fields.size}</p>
          <p className="price">{image.fields.price}:-</p>
          <button onClick={() => {}}>Mer information</button>
        </div>
      </div>
    </Link>
  </div>
);
