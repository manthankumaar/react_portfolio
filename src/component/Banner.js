import { useState, useEffect } from "react"; 
import { Row, Container, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum]=useState(0);
    const [isDeleteing, setIsDeleting]=useState(false);
    const toRotate =  ["Web Developer", "Web Designer",];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState (300-Math.random()*100);
    const period = 2000;

    const tick = () => {
        let i=loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleteing? fullText.substring(0, text.lenght - 1) : fullText.substring(0, text.length+1);
        setText(updatedText);
        if (isDeleteing){
            setDelta(preDelta => preDelta/2)
        }
        if(!isDeleteing && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleteing && updatedText==='') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="alling-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="about container-flui">
                            <span className="tagLine">Welcome to my Portfolio. </span>
                                <h1>{"Hi I'm Manthan Kumar"}<br></br><span className="wrap">{text}</span></h1>
                        </div>
                        <p className="about">"Crafting digital masterpieces with lines of code. Bringing your visions to life with my passion for web development and technology. Let's create something amazing together!"</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="hader Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}