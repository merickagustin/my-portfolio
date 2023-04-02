import { Link } from "react-router-dom";

const navItems = [
  { navName: "Home", link: "/" },
  { navName: "Projects", link: "/projects" },
  { navName: "Contacts", link: "/" },
];

const renderNavItems = (navItems) => {
  return navItems.map((navItems) => (
    <li className="nav-item">
      <Link to={navItems.link} className="nav-link">
        {navItems.navName}
      </Link>
    </li>
  ));
};

function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-expand-lg fs-4">
      <div className="container-fluid fw-bold">
        <a className="navbar-brand" href="#">
          Merick Icy Agustin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleMenu"
          aria-controls="navbarToggleMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggleMenu"
        >
          <ul className="navbar-nav">{renderNavItems(navItems)}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
