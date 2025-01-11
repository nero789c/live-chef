import "./style.css";
import React, {useEffect, useState} from "react";
import ImageComponent from "./image-component.jsx";
import {useNavigate} from "react-router-dom";
import InfoPage from "./info-page.jsx";


function Home() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch("/assets/data.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data); // Log the actual data
                setImages(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    function clickedFunction(index) {
        console.log("Clicked image index:", index);
        navigate("/infoPage", {state: {image: images[index]}}); // Pass selected image data
    }

    return (
        <div className={"home-content"}>
            <div className={"list"}>
                {Array.isArray(images) && images.length > 0 ? (
                    images.map((image, index) => {
                        console.log("Rendering image:", image.description); // Debug log
                        return (
                            <div key={index} onClick={() => clickedFunction(index)}>
                                <ImageComponent
                                    imgUrl={image.imageURL}  // Ensure property name matches
                                    description={image.description}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>No images available</p> // Fallback message if no images
                )}
            </div>
        </div>
    );
}

export default Home;
