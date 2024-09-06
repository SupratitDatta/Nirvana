import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    // Function to create stars
    const createStars = () => {
        const stars = [];
        for (let i = 0; i < 100; i++) {
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
            };
            stars.push(<div key={i} className="star" style={style}></div>);
        }
        return stars;
    };

    return (
        <div className="space-contact" id="contact">
            <div className="stars">{createStars()}</div>
            <div className="contact-container">
                <h1 className="space-title">Get in Touch</h1>
                <h3 className="space-subtitle">Let's Collaborate on Something Amazing</h3>
                <form method="POST"
                    action="https://getform.io/f/65c92a0f-7a6c-4355-83a7-dcd78c5a552f"
                >
                    <input type="text" placeholder="Your Name" name="name" required />
                    <input type="email" placeholder="Your Email" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                    <textarea name="message" rows="5" placeholder="Your Message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} required ></textarea>
                    <button disabled={!userEmail || !userMessage} type="submit" >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;