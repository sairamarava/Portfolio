import { Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const ProjectCard=({title, description, imgUrl})=>{
    return (
        <Col sm={6} md={4}>
            <TrackVisibility>
            {({isVisible})=>(
            <div className={isVisible?"animate__animated animate__zoomIn":"animate__animated animate__zoomOut"}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            </div>)}
            </TrackVisibility>
        </Col>
    )
}