import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import "../css/home.css";

function Home() {
    return (
        <div className="home-container">
            <Hero />
            <About />
        </div>
    );
}

export default Home;