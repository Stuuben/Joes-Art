import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        <img
          src="/assets/JOESwhite.svg"
          alt="joes"
          width={"35px"}
          height={"35px"}
        />
      </div>

      <div className="footer-links">
        <Link to={"/"}>HEM</Link>
        <Link to={"/gallery"}>GALLERI</Link>
        <Link to={"/about"}>OM MIG</Link>
        <Link to={"/contact"}>KONTAKT</Link>
      </div>
    </div>
  );
};
