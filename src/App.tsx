import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {About} from "./Components/Routes/About/About";

export const App = () => {

    return (
        <div>
            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="container">
                <Navbar/>
                <Profile/>
                <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="*" element={<About/>}/>
                </Routes>
            </div>
        </div>

    )

}
