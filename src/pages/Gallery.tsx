import "./Gallery.scss";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { IGetImages } from "../models/IGetImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../components/Dropdown";
import { GalleryImage } from "../components/GalleryImage";

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master",
  accessToken: ACCESS_KEY,
});

export const Gallery = () => {
  const [images, setImages] = useState<IGetImages[]>([]);
  const [filter, setFilter] = useState("");

  const [hasMore, setHasMore] = useState(true);
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

  const [page, setPage] = useState(
    parseInt(localStorage.getItem("currentPage") || "1")
  );

  console.log("page", page);

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
        "fields.isSold": sold,
      })
      .then((response) => {
        console.log("amountOfIamgs", response.total);
        const totalAmountOfFilteredImages = response.total;
        setTotalFilterdImages(totalAmountOfFilteredImages);
      });
  }, [filter, size, sold]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "art",
        "fields.category": `${filter}`,
        "fields.size": `${size}`,
        "fields.isSold": sold,
        order: [`${sortOrder === "desc" ? "-" : ""}sys.createdAt`],
        limit: 9,
        skip: (page - 1) * 9,
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

        setHasMore(transformedImages.length === 9);

        const amountOnCurrentPage = transformedImages.length;
        setAmountOnPage(amountOnCurrentPage);

        console.log("transformedImages", transformedImages);

        localStorage.setItem("currentPage", page.toString());
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
    window.scrollTo(0, 0);
  };
  const handleNextPage = () => {
    console.log("clicked nextPage");
    if (hasMore && (amountOnPage ?? 0) < (totalFilterdImages ?? 0)) {
      setPage((prevPage) => prevPage + 1);
    }
    window.scrollTo(0, 0);
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
      "Välj Kategori"
    ) as HTMLSelectElement;
    categoryDropdown.value = "";

    const sizeDropdown = document.getElementById(
      "Välj Storlek"
    ) as HTMLSelectElement;
    sizeDropdown.value = "";

    const soldDropdown = document.getElementById(
      "Välj Såld"
    ) as HTMLSelectElement;
    soldDropdown.value = "";

    const sortOrderDropdown = document.getElementById(
      "Välj Sortering"
    ) as HTMLSelectElement;
    sortOrderDropdown.value = "desc";
  };

  const allImages = images.map((image) => (
    <GalleryImage key={image.sys.id} image={image} />
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
          <Dropdown
            label="Välj Kategori"
            options={[
              { label: "Alla kategorier", value: "" },
              { label: "Akvarell", value: "Akvarell" },
              { label: "Akryl", value: "Akryl" },
              { label: "Skulpturer", value: "Skulptur" },
            ]}
            onChange={(value) => handleChange(value)}
          />

          <Dropdown
            label="Välj Storlek"
            options={[
              { label: "Alla storlekar", value: "" },
              { label: "24x13 cm", value: "24x13" },
              { label: "90x90 cm", value: "90x90" },
              { label: "21x29,7 cm", value: "21x29,7" },
            ]}
            onChange={(value) => handleSize(value)}
          />
        </div>

        <div className="category-divider">
          <Dropdown
            label={"Välj Såld"}
            options={[
              { label: "Alla", value: "" },
              { label: "Såld", value: "true" },
              { label: "Ej såld", value: "false" },
            ]}
            onChange={(value) => handleSold(value)}
          ></Dropdown>

          <Dropdown
            label={"Välj Sortering"}
            options={[
              { label: "Nyast först", value: "desc" },
              { label: "Äldst först", value: "asc" },
            ]}
            onChange={(value: string) =>
              handleSortOrder(value as "desc" | "asc")
            }
          ></Dropdown>
        </div>
      </div>
      <div className={`filter-wrapper ${showFilterOptions ? "open" : ""}`}>
        <button className="reset-button" onClick={handleResetButton}>
          Rensa filter
        </button>
      </div>

      <div className="total-images">Totalt {totalImages} bilder</div>

      <div className="image-grid">{allImages}</div>

      <div className="pagination-buttons-wrapper">
        <button
          className="pagination-buttons"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Föregående sida
        </button>
        <div className="pagination-text">
          <span>
            visas{" "}
            {Math.min(
              (amountOnPage ?? 0) + (page - 1) * 9,
              totalFilterdImages ?? 0
            )}{" "}
            av {totalFilterdImages}
          </span>
        </div>
        <button
          className="pagination-buttons"
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
