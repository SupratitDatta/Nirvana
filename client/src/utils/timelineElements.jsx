import astrosat2 from "../Assets/RocketPics/astrosat2.jpeg";
import chandryan4 from "../Assets/RocketPics/chandryan4.jpeg";
import mangalyan2 from "../Assets/RocketPics/mangalyan2.jpeg";
import MM from "../Assets/RocketPics/mmx.jpg";
import Artemis from "../Assets/RocketPics/artemus-2.jpg";
import Dragonfl from "../Assets/RocketPics/dragonfly.jpeg";
import dav from "../Assets/RocketPics/davinci.jpeg";

let timelineElements = [
    {
        id: 1,
        title: " MMX",
        description: "The Martian Moons eXploration mission by the Japan Aerospace Exploration Agency (JAXA) is scheduled to enter Mars’ orbit in 2025 and explore the moon of Phobos.",
        date: "September 2024",
        icon: "school",
        imageUrl: MM,
    },
    {
        id: 2,
        title: "Artemis 2",
        description: "Astronauts on their first flight aboard NASA’s Space Launch System (SLS) rocket and Orion spacecraft will venture around the Moon.",
        date: "September 2025",
        icon: "school",
        imageUrl: Artemis,
    },
    {
        id: 3,
        title: "Mangalyaan 2",
        description: "India’s second interplanetary mission to Mars is primarily an orbiter mission.",
        date: "2026",
        icon: "school",
        imageUrl: mangalyan2,
    },
    {
        id: 4,
        title: "Dragonfly",
        description: "NASA’s Dragonfly mission heads off to Saturn in 2026, but won’t arrive at the planet’s moon, Titan, until 2034. It will spend two years taking surface samples and making measurements to establish how habitable various sites might be.",
        date: "2026",
        icon: "school",
        imageUrl:Dragonfl,
    },
    {
        id: 5,
        title: "Chandrayaan-4",
        description: "A lunar sample-return mission, the fourth in the Chandrayaan series, consists of multiple modules for different mission phases.",
        date: "2028",
        icon: "school",
        imageUrl: chandryan4,
    },
    {
        id: 6,
        title: "DAVINCI",
        description: "The mission aims to understand the origin and evolution of Venus’ atmosphere, as well as how and why Venus differs from Earth and Mars.",
        date: "2029",
        icon: "school",
        imageUrl:dav,
    },
    {
        id: 7,
        title: "AstroSat-2",
        description: "A space telescope is proposed as the successor to Astrosat-1, with an ‘Announcement of Opportunity’ issued for ideas and the development of instruments for astronomy and astrophysics.",
        date: "TBD",
        icon: "school",
        imageUrl: astrosat2,
    },
];

export default timelineElements;