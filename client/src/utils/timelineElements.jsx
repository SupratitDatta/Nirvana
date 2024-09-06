import GaganyaanImage from "../Assets/RocketPics/Gaganyaan Test Vehicle.jpg";
import astrosat2 from "../Assets/RocketPics/astrosat2.jpeg";
import bharat_antriksh from "../Assets/RocketPics/bharat_antriksh.jpeg";
import chandryan4 from "../Assets/RocketPics/chandryan4.jpeg";
import gangayaan3 from "../Assets/RocketPics/gangayaan3.jpeg";
import gangayan2 from "../Assets/RocketPics/gangayan2.jpeg";
import mangalyan2 from "../Assets/RocketPics/mangalyan2.jpeg";
import nisar from "../Assets/RocketPics/nisar.jpeg";
import rhumi from "../Assets/RocketPics/rhumi.jpeg";

let timelineElements = [
    {
        id: 1,
        title: "Gaganyaan 1",
        description: "Gaganyaan is an Indian crewed orbital spacecraft  intended to be the basis of the Indian Human Spaceflight Programme.",
        // buttonText: "View Backend Projects",
        date: "December 2024",
        icon: "school",
        imageUrl: GaganyaanImage,
    },
    {
        id: 2,
        title: "Gaganyaan 2",
        description: "Second of two flight tests prior to the inaugural crewed mission.",
        //buttonText: "Company Website",
        date: "NET 2025",
        icon: "school",
        imageUrl: gangayan2,
    },
    {
        id: 3,
        title: " Mission RHUMI",
        // location: "South Warren, Geshington",
        description: "India is set to launch its first reusable rocket, marking a significant milestone in the country's space exploration efforts.",
        //buttonText: "Course Certificate",
        date: "2024",
        icon: "school",
        imageUrl: rhumi,
    },
    {
        id: 4,
        title: "NISAR",
        //location: "Skystead, Craonia",
        description: "A joint project with NASA to launch a dual-frequency synthetic aperture radar satellite for remote sensing.",
        //buttonText: "College Projects",
        date: "2007 - 2011",
        icon: "school",
        imageUrl: nisar,
    },
    {
        id: 5,
        title: "Mars Orbiter Mission 2 (Mangalyaan 2)",
        //location: "Dragontail, Ascana",
        description: "India’s second interplanetary mission to Mars is primarily an orbiter mission.",
        date: "2026",
        icon: "school",
        imageUrl: mangalyan2,
    },
    {
        id: 6,
        title: "Gaganyaan 3",
        //location: "Dragontail, Ascana",
        description: "The first crewed Gaganyaan mission aimed to make India the fourth country to independently send humans to space.",
        date: "2026",
        icon: "school",
        imageUrl: gangayaan3,
    },
    {
        id: 7,
        title: "Chandrayaan-4",
        //location: "Dragontail, Ascana",
        description: "A lunar sample-return mission, the fourth in the Chandrayaan series, consists of multiple modules for different mission phases.",
        date: "2028",
        icon: "school",
        imageUrl: chandryan4,
    },
    {
        id: 8,
        title: "Bharatiya Antariksha Station",
        //location: "Dragontail, Ascana",
        description: "A planned space station that would weigh 20 tonnes and maintain an orbit approximately 400 kilometres above Earth, where astronauts could stay for 15–20 days.",
        date: "2028-2035",
        icon: "school",
        imageUrl: bharat_antriksh,
    },
    {
        id: 9,
        title: "AstroSat-2",
        //location: "Dragontail, Ascana",
        description: "A space telescope is proposed as the successor to Astrosat-1, with an ‘Announcement of Opportunity’ issued for ideas and the development of instruments for astronomy and astrophysics.",
        date: "TBD",
        icon: "school",
        imageUrl: astrosat2,
    },

];

export default timelineElements;