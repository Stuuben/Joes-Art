/* import { IGetImages } from "../pages/Gallery"; */

import { IGetImages } from "../models/IGetImages";

interface IShowImagesProps {
  images: IGetImages[];
  category: string;
}

export const ShowImages: React.FC<IShowImagesProps> = ({
  category,
  images,
}) => {
  const filteredImages = images.filter(
    (image) => image.fields.category === category
  );

  return (
    <div key={category}>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div className="image-wrapper" key={image.sys.id}>
            <img
              className="image-box"
              src={image.fields.image.fields.file.url}
              alt={image.fields.title}
            />
            <h5 className="title">{image.fields.name}</h5>
            <p className="size">{image.fields.size}</p>
            <p className="price">{image.fields.price}:-</p>
            <button>Mer information</button>
          </div>
        ))}
      </div>
    </div>
  );
};
