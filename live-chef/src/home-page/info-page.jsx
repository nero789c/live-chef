import React from "react";
import {useLocation} from "react-router-dom";
import "./style.css";

const googleFontLink = document.createElement("link");
googleFontLink.rel = "stylesheet";
googleFontLink.href = "https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";
document.head.appendChild(googleFontLink);

function InfoPage() {

    const location = useLocation();
    const {image} = location.state || {}; // Destructure passed data or default to {}

    if (!image) {
        return <p>No image data available</p>; // Handle cases where no data is passed
    }

    return (
        <div className={"info-container"}>
            <div className={"info-image-container"}>
                <img className={"info-image"} src={image.imageURL} alt={image.ownerName}/>
            </div>

            <div className={"info-image-details"}>
                <h1 className={"dish-name"}> {image.dishName} </h1>

                <div className={"dish-details"}>
                    <h1>
                        Chef: <p>{image.ownerName}</p>
                    </h1>
                    <br/>
                    <h1>Description: <p>{image.description}</p></h1>
                    <br/>
                    <h1>Ingredients:</h1>

                    <div>
                        {Array.isArray(image.ingredients) && image.ingredients.length > 0 ? (
                            <table>
                                <thead>
                                <tr>
                                    <th>Ingredient Name</th>
                                    <th>Amount</th>
                                    <th>Unit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {image.ingredients.map((ing, idx) => {
                                    console.log("Rendering ingredient:", ing.ingredient); // Debug log
                                    return (
                                        <tr key={idx}>
                                            <td>{ing.ingredient}</td>
                                            <td>{ing.amount}</td>
                                            <td>{ing.unit}</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        ) : (
                            <p>No ingredients available</p> // Fallback message if no data
                        )}
                    </div>

                </div>

            </div>


        </div>
    );
}

export default InfoPage;
