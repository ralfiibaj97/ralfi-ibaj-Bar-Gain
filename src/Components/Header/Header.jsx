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
        <button>Add Special</button>
      </div>
      <div>
        <button>Discover Deals</button>
      </div>
      <div>
        <button>ABOUT</button>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Enter Zip code and discover deals!" />
        <img
          src="src/assets/icons/search.svg"
          alt="Search Icon"
          className="header__search-icon"
        />
      </div>
      <div className="header__buttons">
      <div>
        <button className="header__login">LOG IN</button>
      </div>
      <div>
        <button className="header__signup">SIGN UP</button>
      </div>
      </div>

    </header>
  );
}

export default Header;
