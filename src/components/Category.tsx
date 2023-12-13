import { useEffect, useState } from "react";
import { IGetImages } from "../pages/Gallery";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

interface IShowImagesProps {
  /* images: IGetImages[]; */
  category: string;
}

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master",
  accessToken: ACCESS_KEY,
});

export const Category: React.FC<IShowImagesProps> = ({ category }) => {
  const [categoryImage, setCategoryImage] = useState<IGetImages[]>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "art",
        "fields.category": category,
      })
      .then((response) => {
        const transformedImages: IGetImages[] = response.items.map((item) => {
          return {
            sys: item.sys,
            fields: item.fields as IGetImages["fields"],
          };
        });

        setCategoryImage(transformedImages);

        console.log("transformedImages", transformedImages);
      });
  }, [category]);

  return (
    <div>
      <div className="image-grid">
        {categoryImage.map((image) => (
          <div className="image-wrapper" key={image.sys.id}>
            <Link to={`/gallery/${image.sys.id}`} state={{ image }}>
              <div>
                {image.fields.isSold && (
                  <div className="sold-sticker">SÅLD</div>
                )}
                <img
                  className="image-box"
                  src={image.fields.image.fields.file.url}
                  alt={image.fields.title}
                />
              </div>
              <h5 className="title">{image.fields.name}</h5>
              <p className="size">{image.fields.size}</p>
              <p className="price">{image.fields.price}:-</p>

              <button onClick={() => {}}>Mer information</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
