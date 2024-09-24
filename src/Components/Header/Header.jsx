import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          className="header__logo"
          src="src/assets/logo/BarGain.png"
          alt=""
        />
      </div>
      <div>
        <button className="header__button">Add Special</button>
      </div>
      <div>
        <button className="header__button">Discover Deals</button>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Enter Zip code and discover deals!" />
        <img
          src="src/assets/icons/search.svg"
          alt="Search Icon"
          className="header__search-icon"
        />
      </div>
      <div>
       <img className="header__user-img" src="src/assets/icons/user.svg" alt="" />
      </div>
      <div>
       <img className="header__hamburger-img" src="src/assets/icons/hamburger.svg" alt="" />
      </div>

    </header>
  );
}

export default Header;
