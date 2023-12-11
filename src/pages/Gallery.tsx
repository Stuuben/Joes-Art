/* import { createClient } from "contentful"; */
import "./Gallery.scss";
/* import { useEffect, useState } from "react";
import { ShowImages } from "../components/ShowImages";
import { Akvarell } from "../components/Akvarell"; */
import { Category } from "../components/Category";

/* const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_KEY,
}); */

export interface IGetImages {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    name: string;
    price: number;
    size: string;
    category: string;
    image: {
      fields: {
        description: string;
        file: {
          url: string;
          title: string;
        };
      };
    };
  };
}

export const Gallery = () => {
  /*   const [images, setImages] = useState<IGetImages[]>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "art",
             "fields.price[gt]": 600,
        "fields.category": "Akvarell",
      })
      .then((response) => {
        const transformedImages: IGetImages[] = response.items.map((item) => {
          return {
            sys: item.sys,
            fields: item.fields as IGetImages["fields"],
          };
        });

        setImages(transformedImages);

        console.log("transformedImages", transformedImages);
      });
  }, []); */

  /*   const showImages = images.map((image) => (
    <div className="image-wrapper" key={image.sys.id}>
      <img
        className="image-box"
        src={image.fields.image.fields.file.url}
        alt={image.fields.title}
      ></img>
      <h5 className="titel">{image.fields.name}</h5>
      <p className="size">{image.fields.size}</p>
      <p className="price">{image.fields.price}:-</p>
      <button>Mer infromation</button>
    </div>
  )); */

  return (
    <div className="gallery-wrapper">
      <h3>Galleri</h3>

      <h4 className="categories-name">Akvarell</h4>
      <Category category="Akvarell"></Category>
      <h4 className="categories-name">Akryl</h4>
      <Category category="Akryl"></Category>
      <h4 className="categories-name">Skulpturer</h4>
      <Category category="Skulptur"></Category>
    </div>
  );
};
