import React from 'react';
import { Link } from "react-router-dom";
import Sphere from "./Sphere";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "../css/about.css";

function About() {
    const { ref, inView } = useInView({ triggerOnce: false });
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start(i => ({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: i * 0.3 },
            }));
        }
        else {
            controls.start({ opacity: 0, x: '-100%' });
        }
    }, [inView, controls]);

    return (
        <div className="about-container" id="about">
            <div className="about-data">
                <motion.p
                    ref={ref}
                    custom={0}
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={controls}
                    className="about-heading"
                >
                    EMPOWERING SPACE MISSIONS WITH UNMATCHED INNOVATION
                </motion.p>
                <motion.p
                    ref={ref}
                    custom={1}
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={controls}
                >
                    Nirvana is a cutting-edge space solutions agency dedicated to pioneering space research and missions. We focus on advancing space exploration technologies, like enhancing satellite imagery, studying asteroid patterns, and executing innovative missions to expand humanity's understanding of the universe. Our expertise drives the future of space science and exploration.
                </motion.p>
                <motion.div
                    ref={ref}
                    custom={2}
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={controls}
                >
                    <Link to="/Launches">
                        <button className="custom-btn future-btn">FUTURE PROSPECTS</button>
                    </Link>
                </motion.div>
            </div>
            <div className="sphere-section">
                <Sphere />
            </div>
        </div>
    );
}

export default About;