import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center justify-center'>
          <Col size={6} sm={12} className=' text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/manthan-kumar-704156193/'>
                <img src={navIcon1} alt='linkedIn' />
              </a>
              <a href='https://github.com/manthankumaar'>
                <img src={navIcon2} alt='GitHub' />
              </a>
              <a href='https://www.instagram.com/manthan_maxx/'>
                <img src={navIcon3} alt=' ' />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
