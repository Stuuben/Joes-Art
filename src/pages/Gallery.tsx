import "./Gallery.scss";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IGetImages } from "../models/IGetImages";
/* import Slider from "rc-slider"; */
import "rc-slider/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_KEY,
});

export const Gallery = () => {
  const [images, setImages] = useState<IGetImages[]>([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  /*  const [amountRange, setAmountRange] = useState([0, 3000]); */
  const [size, setSize] = useState("");
  const [sold, setSold] = useState<boolean | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [totalFilterdImages, setTotalFilterdImages] = useState<
    number | undefined
  >(undefined);
  const [amountOnPage, setAmountOnPage] = useState<number | undefined>(
    undefined
  );
  const [totalImages, setTotalImages] = useState<number | undefined>(undefined);

  useEffect(() => {
    client
      .getEntries({
        content_type: "art",
      })
      .then((response) => {
        const totalAmountOfImages = response.total;
        setTotalImages(totalAmountOfImages);
        console.log(response.total);
      });
  }, []);

  useEffect(() => {
    client
      .getEntries({
        content_type: "art",
        "fields.category": `${filter}`,
        "fields.size": `${size}`,
      })
      .then((response) => {
        console.log("amountOfIamgs", response.total);
        const totalAmountOfFilteredImages = response.total;
        setTotalFilterdImages(totalAmountOfFilteredImages);
      });
  }, [filter, size]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "art",
        "fields.category": `${filter}`,
        "fields.size": `${size}`,
        "fields.isSold": sold,
        order: [`${sortOrder === "desc" ? "-" : ""}sys.createdAt`],
        limit: 6,
        skip: (page - 1) * 6,
      })
      .then((response) => {
        console.log(response);

        const transformedImages: IGetImages[] = response.items.map((item) => {
          return {
            sys: item.sys,
            fields: item.fields as IGetImages["fields"],
          };
        });

        setImages(transformedImages);

        setHasMore(transformedImages.length === 6);

        const amountOnCurrentPage = transformedImages.length;
        setAmountOnPage(amountOnCurrentPage);

        console.log("transformedImages", transformedImages);
        console.log("hasMore", hasMore);
        console.log("page", page);
      });
  }, [filter, page, size, hasMore, sold, sortOrder]);

  const handleChange = (category: string) => {
    setFilter(category);
    setPage(1);
  };
  const handleSize = (chosenSize: string) => {
    setSize(chosenSize);
  };
  const handleSold = (sold: string | undefined) => {
    setSold(sold === "true" ? true : sold === "false" ? false : undefined);
  };
  const handleSortOrder = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  const handlePrevPage = () => {
    console.log("clicked prevPage");
    setPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    console.log("clicked nextPage");
    if (hasMore && (amountOnPage ?? 0) < (totalFilterdImages ?? 0)) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleButton = () => {
    setShowFilterOptions((prevShowFilterOptions) => !prevShowFilterOptions);
  };

  const handleResetButton = () => {
    setFilter("");
    setSize("");
    setSold(undefined);
    setSortOrder("desc");

    const categoryDropdown = document.getElementById(
      "category"
    ) as HTMLSelectElement;
    categoryDropdown.value = "";

    const sizeDropdown = document.getElementById("size") as HTMLSelectElement;
    sizeDropdown.value = "";

    const soldDropdown = document.getElementById("sold") as HTMLSelectElement;
    soldDropdown.value = "";

    const sortOrderDropdown = document.getElementById(
      "sortOrder"
    ) as HTMLSelectElement;
    sortOrderDropdown.value = "desc";
  };

  /*   const handlePriceChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setAmountRange(newRange);
    } else {
      setAmountRange([newRange, amountRange[1]]);
    }
  }; */

  /*     setFilter((prevFilter) => {
      const categories = prevFilter.split(",");
      console.log("categories", categories);

      if (categories.includes(category)) {
        const updatedFilter = categories
          .filter((c) => c !== category)
          .join(",");

        return updatedFilter;
      } else {
        return [...categories, category].join(",");
      }
    });
  }; */

  const allImages = images.map((image) => (
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
  ));

  return (
    <div className="gallery-wrapper">
      <h2>Galleri</h2>
      <div className="filters">
        <div onClick={handleButton}>
          <div className="filters-button">
            <FontAwesomeIcon className="slider-icon" icon={faSliders} />
            <span className="filter-span">Filter</span>
          </div>
        </div>
      </div>

      <div className={`filter-wrapper ${showFilterOptions ? "open" : ""}`}>
        <div className="category-divider">
          <div className="category-wrapper">
            <label htmlFor="category">Välj kategori:</label>
            <select
              id="category"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="">Alla kategorier</option>
              <option value="Akvarell">Akvarell</option>
              <option value="Akryl">Akryl</option>
              <option value="Skulptur">Skulpturer</option>
            </select>
          </div>

          <div className="category-wrapper">
            <label htmlFor="size">Välj storlek:</label>
            <select id="size" onChange={(e) => handleSize(e.target.value)}>
              <option value="">Alla storlekar</option>
              <option value="24x13">24x13 cm</option>
              <option value="90x90">90x90 cm</option>
              <option value="21x29,7">21x29,7 cm</option>
            </select>
          </div>
        </div>

        <div className="category-divider">
          <div className="category-wrapper">
            <label htmlFor="sold">Välj såld:</label>
            <select id="sold" onChange={(e) => handleSold(e.target.value)}>
              <option value="">Alla</option>
              <option value="true">Såld</option>
              <option value="false">Ej såld</option>
            </select>
          </div>

          <div className="category-wrapper">
            <label htmlFor="sortOrder">Välj sortering:</label>
            <select
              id="sortOrder"
              onChange={(e) =>
                handleSortOrder(e.target.value as "asc" | "desc")
              }
            >
              <option value="desc">Nyast först</option>
              <option value="asc">Äldst först</option>
            </select>
          </div>
        </div>

        {/*   <div className="price-slider">
          <label htmlFor="price-range">Prisintervall:</label>
          <Slider
            range
            min={0}
            max={3000}
            step={100}
            value={amountRange}
            onChangeComplete={handlePriceChange}
          />
          <span>
            {amountRange[0]} SEK - {amountRange[1]} SEK
          </span>
        </div> */}
      </div>
      <div className={`filter-wrapper ${showFilterOptions ? "open" : ""}`}>
        <button className="reset-button" onClick={handleResetButton}>
          Rensa filter
        </button>
      </div>

      <div className="total-images">Totalt {totalImages} bilder</div>

      <div className="image-grid">{allImages}</div>
      <div className="pagination-buttons">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Föregående sida
        </button>
        <div>
          <span>
            {/* visas {amountOnPage} av {totalImages} */}
            visas{" "}
            {Math.min(
              (amountOnPage ?? 0) + (page - 1) * 6,
              totalFilterdImages ?? 0
            )}{" "}
            av {totalFilterdImages}
          </span>
        </div>
        <button
          onClick={handleNextPage}
          disabled={
            !hasMore || (amountOnPage ?? 0) >= (totalFilterdImages ?? 0)
          }
        >
          Nästa sida
        </button>
      </div>
    </div>
  );
};

/*   return (
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
 */
