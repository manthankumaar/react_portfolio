import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
const [activeLink, setActiveLink]=useState('home');
const [scrolled, seScrolled] = useState(false);

useEffect(()=>{
    const onScroll =() => {
    if (window.scroll>50){
        seScrolled(true);
    }
    else {
        seScrolled(false);
    }}
    window.addEventListener("scroll", onScroll);

    return () => window.addEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
    setActiveLink (value);
}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navBar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink==='home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
          </Nav>
            <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/manthan-kumar-704156193/"><img src={navIcon1} alt="linkedIn"/></a>
                <a href="https://github.com/manthankumaar"><img src={navIcon2} alt="GitHub"/></a>
                <a href="https://www.instagram.com/manthan_maxx/"><img src={navIcon3} alt=" "/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>Let's connect</button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}