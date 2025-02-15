import React, {useState,useEffect} from "react";
import { Row,Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "react-multi-carousel/lib/styles.css";


export const Skills=()=>{
    const responsive={
        superLargeDesktop:{
            breakpoint:{max: 4000, min:3000},
            items: 5
        },
        desktop:{
            breakpoint:{max: 3000, min:1024},
            items: 3
        },
        tablet:{
            breakpoint:{max: 1024, min:464},
            items: 2
        },
        mobile:{
            breakpoint:{max: 464, min:0},
            items: 1
        },
    }
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I bring a versatile skill set to the table, excelling in web development, UI/UX design, and machine learning. With expertise in crafting responsive websites, deploying AI models, and building efficient backend systems, I combine creativity with technical precision. My strengths lie in problem-solving, collaboration, and delivering impactful solutions that resonate with users. Whether it’s coding, designing, or analyzing, I’m always up for a challenge to push boundaries and grow.</p>
                            <Carousel className="skill-slider" responsive={responsive} infinite={true} >
                                <div className="item">
                                    <img src={meter1} alt="image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image"/>
                                    <h5>AI/ML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image"/>
                                    <h5>UI/Ux Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image"/>
                                    <h5>Web Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-left"/>
        </section>
    )
}