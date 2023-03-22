import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projet2.gif";
import projImg2 from "../assets/img/projet3.gif";
import projImg3 from "../assets/img/projet4.gif";
import projImg4 from "../assets/img/projet5.gif";
import projImg5 from "../assets/img/projet6.gif";
import projImg6 from "../assets/img/projet7.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Booki",
      description: "Réservation d'hôtel",
      imgUrl: projImg1,
    },
    {
      title: "Ohmyfood",
      description: "Réservation de restaurant",
      imgUrl: projImg2,
    },
    {
      title: "Agence La Panthère",
      description: "Amélioration de l'existant",
      imgUrl: projImg3,
    },
    {
      title: "Kanap",
      description: "Achat en ligne de canapé",
      imgUrl: projImg4,
    },
    {
      title: "Hot-Takes",
      description: "Site de référencement de sauces piquantes",
      imgUrl: projImg5,
    },
    {
      title: "Groupomania",
      description: "Réseau social professionnel",
      imgUrl: projImg6,
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
                <h2>Projets</h2>
                <p>Voici différents projets que j'ai eu l'occasion de faire dans ma formation OpenClassrooms. La difficulté et la complexité augmente et varie au fur et à mesure que les leçons avancent. On y retrouve des site en HTML / css, du TypeScript, JavaScript, React et d'autres.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
