import React from "react";
import { Link } from "react-router-dom";
import ShootingStars from "./ShootingStars";
import "../css/landing.css";

function Landing() {
    return (
        <div className="landing-container">
            <ShootingStars />
            <div className="text">
                <p className="subtitle data1">Nirvana is here</p>
                <h1 className="title">
                    <div className="data2">
                        <div>Transforming Shadows</div>
                        <div>into Clarity</div>
                    </div>
                </h1>
            </div>
            <Link to="/home">
                <div className="wlcm-btn">
                    <div>Welcome</div>
                </div>
            </Link>
            <div className="culture"></div>
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>
        </div>
    );
};

export default Landing;