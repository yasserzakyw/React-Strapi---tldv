import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = matchMedia("(max-width: 768px)").matches;
  const menuItems = [{ name: "Home" }];

  const handleMenuButonClick = () => {
    document.body.classList.toggle("--menu-open");
  };

  const menuItemClick = () => {
    document.body.classList.remove("--menu-open");
  };

  const renderMenuItem = (item, index) => {
    const name = item.name.toLocaleLowerCase();

    return (
      <div className="header-navigation-bar-items flex justify--center align-center">
        <Link
          to="/"
          key={index}
          href={`#${name}`}
          className={`header-navigation-bar-item ${name}`}
        >
          {item.name}
        </Link>
      </div>
    );
  };

  return (
    <header className="header-wrapper flex justify--flex-start align-center">
      {!isMobile && (
        <nav className="header-navigation-bar-wrapper flex justify--space-between align-center">
          <a href="https://tldv.io/" target="_blank" rel="noreferrer">
            <span className="header-img">
              <span className="header-img-logo logo"></span>
            </span>
          </a>

          <div className="header-navigation-bar-items-wrapper flex justify--space-between align-center">
            {menuItems.map((menuItem, index) => {
              return (
                <React.Fragment key={index}>
                  {renderMenuItem(menuItem, index)}
                </React.Fragment>
              );
            })}
          </div>
        </nav>
      )}

      {isMobile && (
        <div className="flex justify--space-between align-center full-width">
          <span className="header-img">
            <span className="header-img-logo logo"></span>
          </span>

          <div className="header-right" onClick={handleMenuButonClick}>
            <i className="material-icons menu-botton" icon="menu_open"></i>
          </div>

          {/* // Menu  */}
          <nav className=" header-navigation-bar-wrapper menu flex direction--column justify--center align-center">
            <div className="menu-overlay"></div>
            {menuItems.map((menuItem, index) => {
              const name = menuItem.name.toLocaleLowerCase();

              return (
                <Link
                  to="/"
                  key={index}
                  href={`#${name}`}
                  onClick={menuItemClick}
                  className={`header-navigation-bar-item ${name}`}
                >
                  {menuItem.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
