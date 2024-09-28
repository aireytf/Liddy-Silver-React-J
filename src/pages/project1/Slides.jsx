import { Col, Container, Row } from "react-bootstrap";

// 1 slide
import Slide1Image from "../../assets/images/ProjectKensingtonArchie.jpg";

// 2 slide
import SLide2Image1 from "../../assets/images/Horses.jpg";
import SLide2Image2 from "../../assets/images/Kensington Green Study.jpg";
// 3 slide
import SLide3Image1 from "../../assets/images/Staircase with Red Man Picture.jpg";
import SLide3Image2 from "../../assets/images/Kitchen with Hob.jpg";
// 4 slide
import SLide4Image1 from "../../assets/images/Deer .jpg";
import SLide4Image2 from "../../assets/images/Bedroom Bella.jpg";
// 5 slide

import SLide5Image1 from "../../assets/images/Chair with Hammershoi Lookalike Phot0.jpg";
import SLide5Image2 from "../../assets/images/Roof Terrace.jpg";

// 6 slide
import SLide6Image1 from "../../assets/images/Bathroom Sink.jpg";
import SLide6Image2 from "../../assets/images/Seascape and Two Glass Jars.jpg";
import SLide6Image3 from "../../assets/images/Leaf and Bathroom .jpg";

const Slide1 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src={Slide1Image}
              alt="Slide1Image"
              className="slide-image w-100"
            />
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <div className="Kensington-content d-flex justify-content-center flex-column align-items-center px-lg-5 text-center">
              <h1>Kensington</h1>
              <p>Completed Project :</p>
              <p>Renovation of Victorian Terrace</p>
              <p>
                We added light and period details to this house, which had been
                stripped of its history in the 1960s. Cornicing, skirting boards
                and architraves, as well as panelled doors were reinstated on
                the principal floors. As a nod to its 60s overhaul, we reused
                the bronze hardware on all joinery throughout the house.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col lg={4}>
            <img
              src={SLide2Image1}
              alt="SLide2Image1"
              className="slide-image"
            />
          </Col>
          <Col lg={8}>
            <img
              src={SLide2Image2}
              alt="SLide2Image2"
              className="slide-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col lg={4}>
            <img
              src={SLide3Image1}
              alt="SLide3Image1"
              className="slide-image"
            />
          </Col>
          <Col lg={8}>
            <img
              src={SLide3Image2}
              alt="SLide3Image2"
              className="slide-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Slide4 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col lg={4}>
            <img
              src={SLide4Image1}
              alt="SLide4Image1"
              className="slide-image"
            />
          </Col>
          <Col lg={8}>
            <img
              src={SLide4Image2}
              alt="SLide4Image2"
              className="slide-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Slide5 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col lg={4}>
            <img
              src={SLide5Image1}
              alt="SLide5Image1"
              className="slide-image"
            />
          </Col>
          <Col lg={8}>
            <img
              src={SLide5Image2}
              alt="SLide5Image2"
              className="slide-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Slide6 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col lg={3}>
            <img
              src={SLide6Image1}
              alt="SLide6Image1"
              className="slide-image"
            />
          </Col>
          <Col lg={3}>
            <img
              src={SLide6Image2}
              alt="SLide6Image2"
              className="slide-image"
            />
          </Col>
          <Col lg={6}>
            <img
              src={SLide6Image3}
              alt="SLide6Image3"
              className="slide-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 };
