import { Link } from "react-router-dom";
import "../CssPages/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ color: "#fff" }}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#fff" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "#fff" }}
            ></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
            style={{ color: "#fff" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  TRAVEL TOURS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Tours" className="nav-link">
                  Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Hike" className="nav-link">
                  Hike
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="input-group">
              <input className="search-form" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn-search-navbar" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
