

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ColorSharp2 from "../assets/img/color-sharp2.png";

export const Project = () => {

  const Project = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
            <Container>
                <Row>
                    <Col><h2>Project</h2>
                    <p>Nisi ullamco aliqua aliquip ex.<br/>
                    Tempor adipisicing pariatur cillum labore sit aliquip.<br/></p>
                    <Tab.Container id="project-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justtify-content-center aling-item-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab 3
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                Project.map((Project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...Project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Qui nisi sit elit elit dolor quis elit sunt excepteur enim anim veniam consequat.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Excepteur amet pariatur magna labore sit exercitation consequat quis nulla incididunt in cillum exercitation.</p>
                                </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={ColorSharp2} className="background-image-right" alt="bg-img"/>
        </section>
  )
}
