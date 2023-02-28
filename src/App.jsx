import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Components/Card";
import "./Styles/card.css";

function App() {
    const [photos, setPhotos] = useState(null);

    async function fetchData() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
            );
            setPhotos(response.data);
        } catch (error) {
            console.error(`the error is ${error}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!photos) {
        return <h1>Cargando las fotos...</h1>;
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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

    return (
        <Carousel responsive={responsive} containerClass="carousel-container">
            <Card img={photos[0].url} />
            <Card img={photos[1].url} />
            <Card img={photos[2].url} />
            <Card img={photos[3].url} />
            <Card img={photos[4].url} />
            <Card img={photos[5].url} />
        </Carousel>
    );
}

export default App;
