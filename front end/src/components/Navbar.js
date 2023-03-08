import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/add-product"}>Add Book</Link>
      </li>
    </div>
  );
}

export default Navbar;
