import { Link } from "react-router-dom";
import "./Thanks.scss";

export const Thanks = () => {
  return (
    <div className="thanks">
      <div className="thanks-content">
        <h3>Tack för ditt mail!</h3>
        <Link to="/">
          <button>Tillbaka till hem</button>
        </Link>
      </div>
    </div>
  );
};
