import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav>
        <Link className="link" to="/">
          HEM
        </Link>
        <Link className="link" to="/gallery">
          GALLERI
        </Link>
        <Link className="link" to="/about">
          OM MIG
        </Link>
        <Link className="link" to="/contact">
          KONTAKT
        </Link>
      </nav>
    </div>
  );
};
