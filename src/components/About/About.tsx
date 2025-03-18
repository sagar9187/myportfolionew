import { Container } from "./styles";
import SagarJadhav from "../../assetss/sagarjadhav.jpg";
import python from "../../assetss/pythonSVG.svg";
import django from "../../assetss/djangoSVG.svg";
import fastapi from "../../assetss/fastapiSVG.svg";
import restapi from "../../assetss/rest-apiSVG.svg";
import postgresql from "../../assetss/postgresqlSVG.svg";
import mysql from "../../assetss/mysqlSVG.svg";
import aws from "../../assetss/awsSVG.jpg";
import selenium from "../../assetss/seleniumSVG.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Sagar Jadhav, a software engineer passionate about building scalable and high-performance applications. My expertise includes Python, Django, and cloud-based architectures.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            With experience in backend development, API design, and automation, I specialize in creating robust solutions for businesses. I also have strong database management skills with PostgreSQL and MySQL.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            Whether you're looking for a new web application, API development, or automation solutions, I'm here to help. Let's build something great together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>My Core Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <img src={python} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={120}>
              <img src={django} alt="Django" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src={fastapi} alt="FastAPI" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={160}>
              <img src={restapi} alt="REST APIs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src={postgresql} alt="PostgreSQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <img src={mysql} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={220}>
              <img src={aws} alt="AWS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={240}>
              <img src={selenium} alt="Selenium" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={200}>
          <img src={SagarJadhav} alt="Sagar Jadhav" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
