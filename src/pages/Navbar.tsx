import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="nav-wrapper">
      <nav>
        <Link className={`link ${path === "/" ? "active" : ""}`} to="/">
          HEM
        </Link>
        <Link
          className={`link ${path === "/gallery" ? "active" : ""}`}
          to="/gallery"
        >
          GALLERI
        </Link>
        <Link
          className={`link ${path === "/about" ? "active" : ""}`}
          to="/about"
        >
          OM MIG
        </Link>
        <Link
          className={`link ${path === "/contact" ? "active" : ""}`}
          to="/contact"
        >
          KONTAKT
        </Link>
      </nav>
    </div>
  );
};
