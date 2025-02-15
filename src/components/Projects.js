import { ProjectCard } from "./ProjectCard";
import {Col, Row, Tab, Container, Nav} from "react-bootstrap";
import movieRec from "../assets/project/MovieRec.jpg";
import smSpam from "../assets/project/Spam.jpg";
import emotion from "../assets/project/Emotionanalysis.jpg";
import sptify from "../assets/project/SpotifySample.jpg";
import luxWebsite from "../assets/project/Screenshot (136).jpg";
import luxDesign from "../assets/project/E-Commerce Luxeira.jpg";
import eduhub from "../assets/project/ELearning.jpg";
import foodyWeb from "../assets/project/Foody Website.jpg";
import alumniConnect from "../assets/project/Alumniconnect.jpg";
import Button from "../assets/project/Screenshot (150).jpg";
import weather from "../assets/project/Weather Tracking.jpg";
import ecoTrack from "../assets/project/Eco-Track.jpg";
import apexMobile from "../assets/project/Apex mobiles.jpg";
import foodyDesign from "../assets/project/Foody.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


const width= (1440,1252);
export const Projects=()=>{

    const projects=[
        {
            title: "Movie Recommendation System",
            description: "AI/ML",
            imgUrl: movieRec
        },
        {
            title: "SMS Spam Classifier Model",
            description: "AI/ML",
            imgUrl: smSpam
        },
        {
            title: "Emotion Analysis Model",
            description: "AI/ML",
            imgUrl: emotion
        },
        {
            title: "Spotify Landing Page",
            description: "UI/UX Design",
            imgUrl: sptify
        },
        {
            title: "E-Commerce Website",
            description: "Web Development",
            imgUrl: luxWebsite
        },
        {
            title: "E-Commerce Landing Page",
            description: "UI/UX Design",
            imgUrl: luxDesign
        }
    ];
    const projects2=[
        {
            title: "E-Learning Website",
            description: "UI/UX Design",
            imgUrl: eduhub
        },
        {
            title: "Foody - Food Ordering Website",
            description: "Web Development",
            imgUrl: foodyWeb
        },
        {
            title: "AlumniConnect - Social Media Platform",
            description: "Web Development",
            imgUrl: alumniConnect
        },
        {
            title: "Day/Night Toggle Button",
            description: "UI/UX Design",
            imgUrl: Button
        },
        {
            title: "Weather Tracking Application",
            description: "Web Development",
            imgUrl: weather
        },
        {
            title: "Eco-Track: Carbon Footprint Tracking",
            description: "Web Development",
            imgUrl: ecoTrack
        }
    ];
    const projects3=[
        {
            title: "Apex Mobiles Website",
            description: "Ui/UX Design",
            imgUrl: apexMobile
        },
        {
            title: "Foody Mobile App",
            description: "Ui/UX Design",
            imgUrl: foodyDesign
        },

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({ isVisible }) => (
                    <div className={isVisible?"animate__animated animate__bounce":""}>
                        <h2>Projects</h2>
                        <p>Welcome to my portfolio! Here, you’ll find a showcase of my journey as a developer, designer, and problem solver. With a passion for creating impactful solutions, I specialize in web development, UI/UX design, and machine learning. This page highlights my dedication to crafting innovative projects that merge creativity and technology, from responsive websites and intuitive interfaces to smart machine learning models. Dive in to explore the skills, experiences, and projects that define my work, and join me on this exciting path of continuous growth and discovery!</p>
                    </div>)}
                    </TrackVisibility>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                               <ProjectCard key = {index}
                                               {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects2.map((projects2,index)=>{
                                            return(
                                               <ProjectCard key = {index}
                                               {...projects2}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects3.map((projects3,index)=>{
                                            return(
                                               <ProjectCard key = {index}
                                               {...projects3}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )

}