import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          Garage<span>360</span>.
        </div>

        <ul className="nav-links">
          <li>Features</li>
          <li>Shop Types</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>

        <div className="nav-actions">
          <button className="sign-in">Sign In</button>
          <button className="demo-btn">Request Demo</button>
        </div>
      </div>
    </nav>
  );
}
