import React, { useState, useEffect } from "react";
import dropdown from "../assets/dropdown.svg";
import dropdown2 from "../assets/dropdown2.svg";

const Navbar = () => {
  const navbarButtons = ["Demos", "Post", "Features", "Categories", "Shop"];
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 200 && scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const dropdownContent = {
    0: [
      "Business Demo",
      "Portfolio Demo",
      "Blog Demo",
      "E-Commerce Demo",
      "Landing Page Demo",
    ],
    1: [
      "Post Header",
      "Post Layout",
      "Share Buttons",
      "Gallery Post",
      "Video Post",
    ],
    2: [
      "Responsive Design",
      "Customizable Options",
      "SEO Optimization",
      "Easy Integration",
      "Fast Performance",
    ],
    3: [
      "Technology",
      "Health & Wellness",
      "Business",
      "Lifestyle",
      "Education",
    ],
    4: [
      "Electronics",
      "Clothing",
      "Home & Kitchen",
      "Beauty & Personal Care",
      "Sports & Outdoors",
    ],
  };

  return (
    <nav className={`nav-bar ${hidden ? "hidden" : ""}`}>
      {navbarButtons.map((button, index) => (
        <div key={index} className="menu-item">
          <button>{button}</button>
          <img src={dropdown} alt="Dropdown" />
          {dropdownContent[index] && (
            <div className="dropdown-menu">
              <ul>
                {dropdownContent[index].map((item, idx) => (
                  <li key={idx}>
                    {item}{" "}
                    <img
                      src={dropdown2}
                      alt="Dropdown2"
                      className="dropdown-icon"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <button>Buy Now</button>
    </nav>
  );
};

export default Navbar;
