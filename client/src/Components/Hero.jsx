import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import backVideo from "../Assets/Videos/Spaceship.mp4";
import SideMenu from "./SideMenu";
import "../css/hero.css";

function Hero() {
    return (
        <section>
            <div className="hero-container" id="hero">
                <SideMenu />
                <Navbar />
                <video autoPlay muted loop className="background-video">
                    <source src={backVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-data">
                    <h3>Upcoming Project</h3>
                    <h1>Mission Uranus</h1>
                    <Link to="/Launches">
                        <button class="custom-btn btn-14">Launch</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;