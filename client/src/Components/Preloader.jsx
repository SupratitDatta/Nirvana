import React, { useEffect } from "react";
import Landing from "./Landing";
import gsap from "gsap";
import Intro from "./Intro";
import "../css/landing.css";

function Preloader() {
    useEffect(() => {
        const tl = gsap.timeline({ default: { ease: "power1.out" } });
        tl.to(".text", { y: "0%", duration: 2.5, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 0.25, delay: 0.7 });
        tl.to(".intro", { y: "-100%", duration: 0.5 }, "-=0.4")
            .to(".first", { x: "-100%", duration: 1.5, ease: "power2.out" })
            .to(".second", { x: "-100%", duration: 1, ease: "power2.out" }, "-=1")
            .to(".third", { x: "-100%", duration: 1.5, ease: "power2.out" }, "-=1");
        tl.fromTo(".bigText", { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    return (
        <div className="preloader-container">
            <section className="landing">
                <Landing />
            </section>
            <Intro />
        </div>
    );
};

export default Preloader;