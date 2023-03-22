import { Container, Row, Col } from "react-bootstrap";
import Pdf from '../assets/img/CV.pdf';
/*import { MailchimpForm } from "./MailchimpForm";*/
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon5.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alexis-lemée-5760a1252/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" title="LinkedIn"/></a>
              <a href="https://github.com/AlexLemOC" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" title="GitHub"/></a>
              <a href= {Pdf} target="_blank" rel="noreferrer"><img src={navIcon3} alt="Pdf" title="CV.PDF"/></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
