import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p className="skills">As a fresher in web development and C++ programming, I am eager to showcase my skills and attract the attention of potential employers. Through my portfolio, I aim to demonstrate my proficiency in creating dynamic and responsive websites using HTML, CSS, and JavaScript. Additionally, my expertise in C++ allows me to develop efficient and reliable applications that can handle complex tasks seamlessly. With a strong foundation in programming principles and a passion for staying up-to-date with the latest technologies, I am confident in my ability to make a valuable contribution to any team.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="chart" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="chart" />
                                <h5>C++ Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="chart" />
                                <h5>MySql</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="chart" />
    </section>
  )
}
