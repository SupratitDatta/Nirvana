import React from "react";
import { Link } from "react-router-dom";
import ShootingStars from "./ShootingStars";
import "../css/landing.css";
import StarAnimation from "./StarAnimation";

function Landing() {
    return (
        <div className="landing-container">
            <StarAnimation />
            <div className="text">
                <p className="subtitle data1">Nirvana is here</p>
                <h1 className="title">
                    <div className="data2 big">
                        <div>
                            <span className="hover-letter">T</span>
                            <span className="hover-letter">r</span>
                            <span className="hover-letter">a</span>
                            <span className="hover-letter">n</span>
                            <span className="hover-letter">s</span>
                            <span className="hover-letter">f</span>
                            <span className="hover-letter">o</span>
                            <span className="hover-letter">r</span>
                            <span className="hover-letter">m</span>
                            <span className="hover-letter">i</span>
                            <span className="hover-letter">n</span>
                            <span className="hover-letter">g</span>
                            <span>&nbsp;</span>
                            <span className="hover-letter">s</span>
                            <span className="hover-letter">h</span>
                            <span className="hover-letter">a</span>
                            <span className="hover-letter">d</span>
                            <span className="hover-letter">o</span>
                            <span className="hover-letter">w</span>
                            <span className="hover-letter">s</span>,
                        </div>
                        <div>
                            <span className="hover-letter">i</span>
                            <span className="hover-letter">n</span>
                            <span className="hover-letter">t</span>
                            <span className="hover-letter">o</span>
                            <span>&nbsp;</span>
                            <span className="hover-letter">c</span>
                            <span className="hover-letter">l</span>
                            <span className="hover-letter">a</span>
                            <span className="hover-letter">r</span>
                            <span className="hover-letter">i</span>
                            <span className="hover-letter">t</span>
                            <span className="hover-letter">y</span>
                        </div>
                    </div>
                    <div className="data2 small">
                        <div>Transcending Horizons,</div>
                        <div>Unlocking the Future of Space</div>
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