import "./style.css"
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const googleFontLink = document.createElement("link");
googleFontLink.rel = "stylesheet";
googleFontLink.href = "https://fonts.googleapis.com/css2?family=Meow+Script&display=swap";
document.head.appendChild(googleFontLink);

function BodyContainer (){
    const [users, setUsers] = useState([""]);

    useEffect(() => {
        axios.get("http://localhost:3000/")
            .then(users => setUsers(users.data))
            .catch(err => console.log(err));

    });

    const navigate = useNavigate();


    function handleClick() {
        navigate("/signup");
    }

    return(
        <>
            <div className={"banner"}>
                <div className={"content"}>
                    <div className={"title"}>
                        <h1>Chef Factory</h1>
                        <p id={"cute-font"}>Discover new Dishes like never Before</p>
                        <button id={"signup-btn-body"} className={"form-btn"} onClick={handleClick}> Join us Now</button>
                    </div>
                </div>
            </div>

        </>

    )

}
export default BodyContainer
