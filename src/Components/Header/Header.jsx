import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <img className="header__logo" src="src/assets/logo/BarGain.png" alt="BarGain Logo" />
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
      <button className="header__button" onClick={() => navigate('/add-bar')}>
        + ADD NEW BAR
      </button>
    </header>
  );
}

export default Header;
