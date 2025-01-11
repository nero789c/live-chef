import "./signStyle.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handelChange(event, changedValue) {
        if (changedValue === "username") {
            setUsername(event.target.value);

        } else if (changedValue === "email") {
            setEmail(event.target.value);
        } else if (changedValue === "password") {
            setPassword(event.target.value);
        } else {
            setConfirmPassword(event.target.value);

        }
    }

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:3000/signup', {
                username, email, password,
            });
            console.log('User created successfully:', response.data);
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error creating user:', error.response?.data || error.message);
            alert('Failed to register user. Please try again.');
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                username,
                email,
                password
            });
            alert("user Created Successfully");
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <>
            <div className={"banner_signup"}>
                <div className={"welcoming-msg"}>
                    <h2> First time using Chef Factory? </h2>
                    <p>then Sign-up now and discover new Dishes from around the world.</p>
                </div>
                <form className={"form-container"} onSubmit={handleRegister}>
                    <div className={"signup-title"}>
                        <h1>Sign Up</h1>
                    </div>
                    <div className={"flex-divider"}>
                        <div className={"form-container-group"}>
                            <div className={"form-group"}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={username}
                                    placeholder={"Username"}
                                    onChange={(e) => handelChange(e, "username")}
                                    required
                                />
                            </div>
                            <div className={"form-group"}>
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

                            <div className={"form-group"}>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    value={confirmPassword}
                                    placeholder={"confirm-password"}
                                    onChange={(e) => handelChange(e, "setConfirmPassword")}
                                    required
                                />
                            </div>
                        </div>

                        <div className={"form-container-btn"}>
                            <button id={"btn_1"} className={"form-btn"} type={"submit"}>Sign Up</button>
                            <br/>
                            <p> Already have an Account? <Link to="/login">Log in</Link></p>
                            <br/>
                            <p>OR</p>
                            <button className={"form-btn"} type={"submit"}>Sign Up With Google</button>
                        </div>
                    </div>


                </form>


            </div>

        </>

    )
}

export default Signup
