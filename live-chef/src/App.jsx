import Nav_bar from "./nav/nav_bar.jsx";
import BodyContainer from "./body/body.jsx";
import Signup from "./signup-page/signup.jsx";
import Login from "./login/login.jsx";
import ProtectedRoute from './ProtectedRoute';

import Home from "./home-page/home.jsx";

import {Route, Routes} from "react-router-dom";

import './App.css'
import InfoPage from "./home-page/info-page.jsx";

function App() {

    return (
        <>
            <div className={"container"}>
                <Nav_bar/>
                <Routes>
                    <Route path="/" element={<BodyContainer/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/homePage" element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
                    <Route path="/infoPage" element={<InfoPage/>}/>


                </Routes>
            </div>


        </>
    )
}

export default App
