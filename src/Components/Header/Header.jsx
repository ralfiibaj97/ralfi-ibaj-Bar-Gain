import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.scss';

function Header() {
  const navigate = useNavigate();
  const [zipcode, setZipcode] = useState('');

  const handleSearch = () => {
    if (zipcode) navigate(`/search/${zipcode}`);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src="src/assets/logo/BarGain.png" alt="BarGain Logo" />
        </Link>
      </div>
      <div className="header__search">
        <input
          type="text"
          placeholder="Enter Zip code and discover deals!"
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <img
          src="src/assets/icons/search.svg"
          alt="Search Icon"
          className="header__search-icon"
          onClick={handleSearch}
        />
      </div>
      <div>
      <button className="header__button" onClick={() => navigate('/add-bar')}>
        + ADD NEW BAR
      </button>
      </div>
    </header>
  );
}

export default Header;
