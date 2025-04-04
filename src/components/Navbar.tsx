import React from 'react';
import searchIcon from '../assets/search.svg';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setCategory, setSearchQuery, setLocation }) => {
  const routerLocation = useLocation();

  const isWeatherPage = routerLocation.pathname === '/weather';
  const isNewsPage = routerLocation.pathname === '/news';

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark fs-4">InfoHub</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/news">News</a>
            </li>
            {isNewsPage && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" onClick={() => setCategory("science")}>Science</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("technology")}>Technology</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("health")}>Health</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("business")}>Business</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("sports")}>Sports</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("entertainment")}>Entertainment</div></li>
                </ul>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/weather">Weather</a>
            </li>
            {isWeatherPage && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" onClick={() => setLocation("Astana")}>Astana</div></li>
                  <li><div className="dropdown-item" onClick={() => setLocation("Almaty")}>Almaty</div></li>
                  <li><div className="dropdown-item" onClick={() => setLocation("Shymkent")}>Shymkent</div></li>
                  <li><div className="dropdown-item" onClick={() => setLocation("Aqtobe")}>Aqtobe</div></li>
                  <li><div className="dropdown-item" onClick={() => setLocation("Khromtau")}>Khromtau</div></li>
                </ul>
              </li>
            )}
          </ul>
          {isNewsPage && (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search articles..."
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <img src={searchIcon} alt="Search Icon" />
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
