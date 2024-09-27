import { useNavigate } from 'react-router-dom';
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  const handleAddNewBarClick = () => {
    navigate('/add-bar');
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          className="header__logo"
          src="src/assets/logo/BarGain.png"
          alt=""
        />
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
        <button className="header__button" onClick={handleAddNewBarClick}> 
          + ADD NEW BAR 
        </button>
      </div>
    </header>
  );
}

export default Header;
