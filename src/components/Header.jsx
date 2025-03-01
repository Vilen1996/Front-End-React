import { useState, useEffect, useRef } from "react";
import logo from "../assets/image.png";
import searchButton from "../assets/search-button.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import dropdown from "../assets/dropdown.svg";

const Header = ({ setSearchQuery }) => {
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarButtons = [
    "Demos",
    "Post",
    "Features",
    "Categories",
    "Shop",
    "Buy Now",
  ];

  const handleSearchClick = () => {
    setShowInput((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Search..."
          className={`search-input ${showInput ? "active" : ""}`}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={searchButton} alt="Search" onClick={handleSearchClick} />
      </div>

      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <div className="menu-header">
          <div className="header-logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <img src={closeIcon} alt="Close" onClick={closeMenu} />
        </div>
        <ul className="sidebar-buttons">
          {navbarButtons.map((button, index) => (
            <li key={index}>
              <button>{button}</button>
              <img src={dropdown} alt="Dropdown" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
