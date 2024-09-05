import React from 'react';
import Sphere from "./Sphere";
import "../css/about.css";

function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-data">
                <p className="about-heading">EMPOWERING SPACE MISSIONS WITH UNMATCHED INNOVATION</p>
                <p>Nirvana is a cutting-edge space agency dedicated to pioneering space research and missions. We focus on advancing space exploration technologies, conducting groundbreaking studies, and executing innovative missions to expand humanity's understanding of the universe. Our expertise drives the future of space science and exploration.</p>
            </div>
            <div className="sphere-section">
                <Sphere />
            </div>
        </div>
    );
}

export default About;