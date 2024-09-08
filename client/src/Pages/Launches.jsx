import { useEffect } from "react";
import { ReactComponent as WorkIcon } from "../Assets/Icons/school.svg";
import { ReactComponent as SchoolIcon } from "../Assets/Icons/school.svg";
import timelineElements from "../utils/timelineElements";
import Navbar from "../Components/Navbar";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/launches.css";

function Launches() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="launch-container">
            <Navbar />
            <div className="launches">
                <h1 className="title2">Upcoming Missions in Focus</h1>
                <VerticalTimeline>
                    {timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work";
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== "";

                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <div className="timeline-content">
                                    <div className="text-content">
                                        <h3 className="vertical-timeline-element-title">
                                            {element.title}
                                        </h3>
                                        <h5 className="vertical-timeline-element-subtitle">
                                            {element.location}
                                        </h5>
                                        <p id="description">{element.description}</p>
                                        {showButton && (
                                            <a
                                                className={`button1 ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                                href="/"
                                            >
                                                {element.buttonText}
                                            </a>
                                        )}
                                    </div>
                                    <div className="image-content">
                                        <img
                                            src={element.imageUrl}
                                            alt={element.title}
                                            className="timeline-image"
                                        />
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Launches;