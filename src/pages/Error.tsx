import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h2>Sidan finns inte</h2>
      <Link to="/">Gå till startsidan</Link>
    </>
  );
};
