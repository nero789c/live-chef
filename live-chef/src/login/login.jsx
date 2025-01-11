import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./style.css"
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();



    function handelChange(event, changedValue) {
        if (changedValue === "email") {
            setEmail(event.target.value);
        } else {
            setPassword(event.target.value);
        }

    }

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email, password,
            });
            console.log('User loaded successfully:', response.data);
            //setUserId(u => response.data._id);
            localStorage.setItem('authToken', response.data._id); // Store token
            navigate("/homePage");
        } catch (error) {
            console.error('Error logging in  user:', error.response?.data || error.message);
            alert('Failed to log in user. Please try again.');
        }
    }

    // Handle login
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password
            });
            console.log("data r here: " + response.data.email);
            localStorage.setItem('authToken', response.data.email); // Store token
            navigate("/homePage");
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };


    return (
        <>
            <div className={"banner_signup"}>
                <div className={"welcoming-msg"}>
                    <h2> Welcome Back</h2>
                    <p>You have been missed. Log in to see the newest Dishes from around the world.</p>
                </div>
                <form className={"form-container login-form-container"} onSubmit={handleLogin}>
                    <div className={"signup-title"}>
                        <h1>Log In</h1>
                    </div>
                    <div className={"flex-divider"}>
                        <div className={"form-container-group login-form"}>
                            <div className={"form-group login-form-input"}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder={"Email"}
                                    onChange={(e) => handelChange(e, "email")}
                                    required
                                />
                            </div>
                            <div className={"form-group"}>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder={"Password"}
                                    onChange={(e) => handelChange(e, "password")}
                                    required
                                />
                            </div>
                        </div>

                        <div className={"form-container-btn"}>
                            <button id={"btn_1"} className={"form-btn"} type={"submit"}>Log in</button>
                            <br/>
                            <p> You dont have an Account? <Link to="/signup">Sign up</Link></p>
                            <br/>
                            <p>OR</p>
                            <button className={"form-btn"} type={"submit"}>Log In With Google</button>
                        </div>
                    </div>


                </form>


            </div>

        </>
    )

}

export default Login
