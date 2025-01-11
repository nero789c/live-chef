import "./style.css";
import {Link, useLocation} from "react-router-dom";
import React from "react";

function Nav_bar() {
    const location = useLocation(); // Access the current route location

    function logout() {
        localStorage.removeItem('authToken');
    }

    // Show the "Logout" link only when the current path is NOT "/login"
    const isHomePage = location.pathname === "/homePage";
    const isInfoPage = location.pathname === "/infoPage" ;


    return (
        <nav className= {!isHomePage ? " navbar" : "homepage-nav"}>
            <div className= {!isHomePage ? " navbar-container" : "homepage-nav"} >
                <div className="flex-container nav-content" >
                    <div>
                        <a id="logo-tag" href="#">Logo</a>
                    </div>
                    <div className="home-tag">
                        {(isHomePage || isInfoPage) && (
                            <Link to="/homePage">Home</Link>
                        )}

                        {!(isHomePage || isInfoPage) && (
                            <Link to="/">Home</Link>

                        )}

                        <Link to="#">About</Link>
                        {!(isHomePage || isInfoPage) && (
                            <Link to="/signup">Sign up</Link>

                        )}

                        {!(isHomePage || isInfoPage) && (
                            <Link id="logIn" to="/login">Log in</Link>

                        )}

                        {(isHomePage || isInfoPage) && (
                            <Link id="logout" onClick={logout} to="/">
                                Log out
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav_bar;
