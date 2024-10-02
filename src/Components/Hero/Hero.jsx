import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Hero.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Hero() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const getBars = async () => {
      try {
        const response = await axios.get("http://localhost:8080/bars/");
        setBars(response.data);
      } catch (error) {
        console.log("Error receiving bars:", error);
      }
    };

    getBars();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (bars.length === 0) {
    return null;
  }

  return (
    <div className="hero">
      <h1 className="hero__title">Welcome to BarGain!</h1>
      <h2 className="hero__description">Draw Inspiration Below</h2>
      <Carousel
      responsive={responsive}
      infinite={true}
      showDots={true}
      className="hero__carousel"
      itemClass="carousel-item-padding-180-px"
      centerMode={false}
      partialVisible={false} 
      keyBoardControl={true}
      containerClass="carousel-container"
      >
        {bars.map((bar) => (
          <Link
            to={`/bars/${bar.id}`}
            key={bar.id}
            style={{
              textDecoration: "none",
              color: "inherit",
              outline: "none",
            }}
          >
            <div>
              <img src={bar.image_url} alt={bar.name} />
              <p className="legend">
                NAME: {bar.name}
                <br />
                LOCATION: {bar.address}
              </p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
