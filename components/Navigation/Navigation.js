import navStyle from "../Navigation/Navigation.module.scss";
import logo from "../icons/images/instagram logo.png";
import searchIcon from "../icons/images/searchIcon.png";
import Menu from "../Menu/Menu.js";

const Navigation = () => {
  return (
    <div className={navStyle.navigation}>
      <div className={navStyle.container}>
        <a href="/">
          <img className={navStyle.logo} src={logo.src} alt="instagram logo" />
        </a>

        <div className={navStyle.search}>
          <img
            className={navStyle.searchIcon}
            src={searchIcon.src}
            alt="search icon"
          />
          <input
            type="text"
            className={navStyle.searchInput}
            placeholder="Search"
          ></input>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navigation;
