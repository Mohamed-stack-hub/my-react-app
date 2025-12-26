import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
        <div className="container">
          <Link to="" className="navbar-brand fw-bold">
            START FRAMEWORK
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end m-2"
            id="mainNavbar"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/Port">
                  Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
