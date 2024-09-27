import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Hero.scss';

function Hero() {
    const [bars, setBars] = useState([]);

    useEffect(() => {
        const fetchBars = async () => {
            try {
                const response = await fetch('http://localhost:8080/bars/');
                const data = await response.json();
                setBars(data);
            } catch (error) {
                console.error('Error fetching bars:', error);
            }
        };

        fetchBars();
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

    console.log(bars); // For debugging

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
                {bars.map(bar => (
                    <div key={bar.name}>
                        <img src={bar.image_url} alt={bar.name} />
                        <p className="legend">
                            NAME: {bar.name}
                            <br />
                            <br />
                            LOCATION: {bar.address}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;
