import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Hero.scss';

function Hero() {
    const [happyHours, setHappyHours] = useState([]);

    useEffect(() => {
        // Fetch happy hour data from the backend
        fetch('http://localhost:8080/happyhours/')
            .then(response => response.json())
            .then(data => setHappyHours(data))
            .catch(error => console.error('Error fetching happy hours:', error));
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="hero">
            <h1 className="hero__title">Welcome to BarGain</h1>
            <h2 className="hero__description">Draw Inspiration Below!</h2>
            <Carousel 
                responsive={responsive} 
                infinite={true} 
                showDots={true} 
                className="hero__carousel"
                itemClass="carousel-item-padding-180-px"
            >
                {happyHours.map(happyHour => (
                    <div key={happyHour.id}>
                        <img src={happyHour.image_url} alt={happyHour.bar_name} />
                        <p className="legend">
                            NAME: {happyHour.bar_name}
                            <br />
                            <br />
                            LOCATION: {happyHour.bar_address}
                            <br />
                            <br />
                            DESCRIPTION: {happyHour.description}
                            <br />
                            <br />
                            START TIME: {happyHour.start_time}
                            <br />
                            <br />
                            END TIME: {happyHour.end_time}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;
