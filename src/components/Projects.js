import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/image4.png";
import projImg5 from "../assets/img/omnifood.png";
import projImg6 from "../assets/img/ar-shakir.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Youtube Clone",
      description: "React Js",
      imgUrl: projImg1,
      link: 'https://github.com/seifeddinesaad01/youtube-clone'
    },
    {
      title: "TrailHive landing Page",
      description: "React Ts & SCSS",
      imgUrl: projImg2,
      link: "https://github.com/seifeddinesaad01/TrailHive"
    },
    {
      title: "Admin Dashboard",
      description: "React Js & CSS",
      imgUrl: projImg3,
      link: "https://github.com/seifeddinesaad01/react-admin-dashboard/tree/master"
    },
    {
      title: "Gaming App",
      description: "React Js & CSS",
      imgUrl: projImg4,
      link: "https://github.com/seifeddinesaad01/Gaming-App"
    },
    {
      title: "Food App Landing Page",
      description: "HTML && CSS",
      imgUrl: projImg5,
      link: "https://github.com/seifeddinesaad01/omnifood"
    },
    {
      title: "AR Shakir Landing Page",
      description: "HTML && CSS",
      imgUrl: projImg6,
      link: "https://github.com/seifeddinesaad01/AR-sahkir"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Those are Examples of web sites that i've created to demonstrate my skills.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
