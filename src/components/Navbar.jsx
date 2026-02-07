import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2>Garage360</h2>
      </div>

      <ul className="nav-center">
        <li>Features</li>
        <li>Shop Types</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>

      <div className="nav-right">
        <button className="login">Sign In</button>
        <button className="demo">Request Demo</button>
        <button className="whatch">whatch Demo vedio</button>
      </div>
    </nav>
  );
}

export default Navbar;
