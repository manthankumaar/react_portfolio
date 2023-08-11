import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href='https://spotolet.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='keep_white'
        >
          Spotolet
        </a>
      ),
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: (
        <a
          href='https://order-pizzaapp.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='keep_white'
        >
          E-commerce Pizaa Delivery App
        </a>
      ),
      description: 'Design & Development',
      imgUrl: projImg4,
    },
    {
      title: (
        <a
          href='https://github.com/manthankumaar/worldwise'
          target='_blank'
          rel='noreferrer'
          className='keep_white'
        >
          WorldWise App
        </a>
      ),
      description: 'Design & Development',
      imgUrl: projImg5,
    },
    {
      title: (
        <a
          href='https://manthankumaar.github.io/tindog/'
          target='_blank'
          rel='noreferrer'
          className='keep_white'
        >
          TinDog
        </a>
      ),
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          href='https://github.com/manthankumaar/cars'
          target='_blank'
          rel='noreferrer'
          className='keep_white'
        >
          Cars List
        </a>
      ),
      description: 'Design & Development',
      imgUrl: projImg6,
    },
    {
      title: (
        <a
          href='https://manthankumaar.github.io/DrumKit/'
          target='_blank'
          rel='noreferrer'
          className='keep_white'
        >
          DrumKit
        </a>
      ),
      description: 'Design & Development',
      imgUrl: projImg2,
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p className='about'>
                    Welcome to my project showcase, where I, Manthan Kumar, a
                    budding developer with a year of valuable experience in
                    React.js, HTML, CSS, and JavaScript, present a curated
                    collection of my finest works. As a fresh talent in the
                    world of web development, I have passionately crafted
                    projects that reflect my dedication, creativity, and growth
                    in these essential technologies. Each project represents a
                    unique journey of learning and innovation, and I am excited
                    to share my progress as I continue to shape my skills and
                    embark on new challenges in this dynamic field.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>
                          Web Dev
                          <br /> Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>
                          C++
                          <br />
                          Project
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>
                          Civil
                          <br />
                          Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                        <Row>
                          <p className='project_footer'>
                            For more of my Projets please Visit my Github page
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>
                          <h4>Tic-Tac-Toe:</h4>
                          <ul>
                            <li>
                              Developed by simple implementation of 2D Array in
                              c++ environment.
                            </li>
                            <li>
                              Allows two players to play against each other in a
                              game of tic-tac-toe.Matplotlib library.
                            </li>
                            <li>
                              Provides players with a seamless and enjoyable
                              experience with its straightforward user
                              interface.
                            </li>
                            <li>
                              Use the C++ programming language to implement safe
                              memory allocation and robust error handling.
                            </li>
                            <li>
                              Click{' '}
                              <a href='https://raw.githubusercontent.com/manthankumaar/tic-tac-toe/main/tic-tac-toe.exe'>
                                here
                              </a>{' '}
                              to play with a friend (if u have one 🥲).{' '}
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          <ul>
                            <li>
                              Project1
                              <br />
                              Designed and modelled a complete layout plan of a
                              G+2 building for college mini project.using
                              AutoCAD, Rivit and StadPro
                            </li>
                            <br />
                            <li>
                              Project2
                              <br />
                              Preparing a complete flood inundation map for
                              Netravati River using HEC-RAS Mapping.
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='bg-img'
      ></img>
    </section>
  )
}
