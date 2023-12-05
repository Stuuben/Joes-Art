import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="nav">
      <Link className="link" to="/">
        HOME
      </Link>
      <Link className="link" to="/gallery">
        GALLERY
      </Link>
      <Link className="link" to="/contact">
        CONTACT
      </Link>
    </div>
  );
};
