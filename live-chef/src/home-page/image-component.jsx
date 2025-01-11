import "./style.css"
import {Link} from "react-router-dom";

function ImageComponent({imgUrl, ownerName,description}){
    return(
        <div className="image-card">
            <Link to={"#"}>
                <div className="image-container">
                    <img src={imgUrl} alt={ownerName} className="card-image" />
                    <div className="overlay">
                        <div className="overlay-content">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>    )

}
export default ImageComponent
