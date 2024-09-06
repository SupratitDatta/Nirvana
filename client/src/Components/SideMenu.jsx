import { useState } from "react";
import '../css/sideMenu.css';

function SideMenu() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="sidemenu-container">
            <div className={`shadow ${isActive ? "active" : ""}`}></div>
            <button className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`mobile-nav ${isActive ? "active" : ""}`}>
                <a href="#">Chandrayaan-4</a>
                <a href="#">Gaganyaan</a>
                <a href="#">Mangalyaan-2</a>
                <a href="#">Activities</a>
                <a href="#">Services</a>
                <a href="#">Programmes</a>
                <a href="#">Resources</a>
                <a href="#">Shop</a>
            </nav>
        </div>
    );
};

export default SideMenu;