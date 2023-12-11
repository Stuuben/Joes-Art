/* import { useEffect, useState } from "react";
import { IGetImages } from "../pages/Gallery";
import { createClient } from "contentful";

interface IShowImagesProps {
  images: IGetImages[];
  category: string;
}

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_KEY,
});

export const Akvarell: React.FC<IShowImagesProps> = ({ category }) => {
  const [imgAkvarell, setImgAkvarell] = useState<IGetImages[]>([]);

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

        setImgAkvarell(transformedImages);

        console.log("transformedImages", transformedImages);
      });
  }, []);

  return (
    <div>
      <div className="image-grid">
        {imgAkvarell.map((image) => (
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
 */
