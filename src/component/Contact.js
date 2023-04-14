import {useState} from "react";
import { Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const contact = () => {
    const formInitalDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitalDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState ({});
    const onFormUpdate = (category, value) => {
        setFormDetails ({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {
        
    }
    return (
        <section className="contact" id="connect">
            <Container >
                <Row className="aling-item-center">
                    <col md={6}>
                        <img src={contactImg} />
                    </col>
                    <col md={6}>
                    <h2>Get In Touch</h2>
                    <form>
                        <Row>
                            <col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placegolder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </col>
                            <col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placegolder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </col>
                            <col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placegolder="Your Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </col>
                            <col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placegolder="Your Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </col>
                            <Col>
                               <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                <button type="Submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success ===false ? "Try Again" : "Sucess"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                    </col>
                </Row>
            </Container>
        </section>
    )
}