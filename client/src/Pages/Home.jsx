import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Contact from '../Components/Contact';
import "../css/home.css";

function Home() {
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Contact />
        </div>
    );
}

export default Home;