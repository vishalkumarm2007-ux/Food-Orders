import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Food Orders</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>
        <Link to="/history">Order History</Link>
      </div>
    </nav>
  );
}

export default Navbar;