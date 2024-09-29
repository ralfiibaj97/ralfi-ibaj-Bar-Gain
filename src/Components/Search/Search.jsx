import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Search.scss";

function SearchResults() {
  const { zipcode } = useParams();
  const [bars, setBars] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const getBars = async () => {
      setBars([]);
      setNoResults(false);

      try {
        const response = await axios.get(
          `http://localhost:8080/bars/zipcode/${zipcode}`
        );
        if (response.data.length === 0) {
          setNoResults(true);
        } else {
          setBars(response.data);
        }
      } catch (error) {
        console.error("Error receiving bars:", error);
        setNoResults(true);
      }
    };

    getBars();
  }, [zipcode]);

  useEffect(() => {
    if (noResults) {
      alert("No bars found in this zip code. Please try another zip code.");
    }
  }, [noResults]);

  if (bars.length === 0 && !noResults) {
    return null;
  }
  return (
    <div className="search-results">
      <h1 className="search-results__header">Bars in Zip Code: {zipcode}</h1>

      <div className="search-results__list">
        {bars.map((bar) => (
          <Link
            to={`/bars/${bar.id}`}
            key={bar.id}
            className="search-results__card-link"
          >
            <div className="search-results__card">
              <div className="search-results__image-container">
                <img
                  src={bar.image_url}
                  alt={bar.name}
                  className="search-results__image"
                />
              </div>
              <div className="search-results__info">
                <h2 className="search-results__name">{bar.name}</h2>
                <p className="search-results__address">{bar.address}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
