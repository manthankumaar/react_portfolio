import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: <a href="https://manthankumaar.github.io/tindog/" target="_blank" rel="noreferrer" className="keep_white">TinDog</a>,
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: <a href="https://manthankumaar.github.io/DrumKit/" target="_blank" rel="noreferrer" className="keep_white">DrumKit</a>,
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: <a href="https://spotolet.netlify.app/" target="_blank" rel="noreferrer" className="keep_white">Spotolet</a>,
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="about">Hey there! I'm a fresh developer with limited experience in web development and C++ programming. Here I've showcased some of my best work in the projects section here, including websites designed with HTML, CSS, and JavaScript, as well as C++ applications I've built. As I continue to grow as a developer, I'm excited to add more exciting projects to my portfolio and explore new opportunities in the field.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development<br/> Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">C++<br/>Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Civil<br/>Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>Tic-Tac-Toe:<br/>
                        • Developed by simple implementation of 2D Array in c++ environment.<br/>
                        • Allows two players to play against each other in a game of tic-tac-toe.Matplotlib library.<br/>
                        • Provides players with a seamless and enjoyable experience with its straightforward user interface.<br/>
                        • Use the C++ programming language to implement safe memory allocation and robust error handling. <br/>
                        • Click <a href="https://raw.githubusercontent.com/manthankumaar/tic-tac-toe/main/tic-tac-toe.exe">here</a> to play with a friend (if u have one 🥲).  </p> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>• Project1<br/>Designed and modelled a complete layout plan of a G+2 building for college mini project.using AutoCAD, Rivit and StadPro</p>
                      <p>• Project2<br/>Preparing a complete flood inundation map for Netravati River using HEC-RAS Mapping.</p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  )
}
