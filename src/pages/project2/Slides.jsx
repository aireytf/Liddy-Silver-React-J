import { Col, Container, Row } from "react-bootstrap";
import SLide2Image1 from "../../assets/images/Drawing VT Guest Bathroom 2F.jpg";
import SLide4Image1 from "../../assets/images/Materials Palette with William Morris Paper.jpg";
import Slide1Image from "../../assets/images/Villa therese without blue line.png";
import SLide3Image1 from "../../assets/images/VT Kitchen Frontal View.jpg";
import SLide5Image1 from "../../assets/images/VT Materials Palette with Howe Paisley Wallpaper.jpg";
import SLide5Image2 from "../../assets/images/VT-bedroom-hp-paper.png";
import SLide2Image2 from "../../assets/images/VT-guest-bath.png";
import SLide3Image2 from "../../assets/images/VT-kitchen-left-view.png";
import SLide4Image2 from "../../assets/images/VT-WM-paper.png";

const Slide1 = () => {
  return (
    <div className="about">
      <Container className="d-flex justify-content-center">
        <Container className="d-flex justify-content-center align-items-center ">
          <Container>
            <Row>
              <Col>
                <h1 className="about-heading villa-heading mt-lg-0 mt-5 pt-lg-0 pt-5  mb-5">
                  Villa Therese
                </h1>
              </Col>
            </Row>
            <Row className="villa-content">
              <Col
                lg={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-center align-items-center"
              >
                <Col xl={10} lg={12}>
                  <div className="villa-image-div ">
                    <img
                      src={Slide1Image}
                      alt="Slide1Image"
                      className="slide-image "
                    />
                  </div>
                </Col>
              </Col>
              <Col
                lg={6}
                sm={12}
                xs={12}
                className="d-flex flex-column justify-content-center align-items-center about-content text-center px-lg-4 px-2"
                style={{ backgroundColor: "#cfcfc2" }}
              >
                <p>Ongoing Project:</p>
                <p>
                  Renovation of a turn of the century villa overlooking the
                  Meuse river
                </p>
                <p>
                  The redesign of this project is a careful balance between
                  functionality and respect for its architectural heritage. The
                  villa will be used as a weekend house, welcoming guests after
                  muddy walks in the surrounding countryside. Design of the
                  principal rooms grew out of the house’s history. Palettes are
                  drawn from the surrounding landscape. Materials have been
                  sourced locally, with Belgian Blue stone playing a prominent
                  role in the conservatory kitchen.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

// Slide2 Component
const Slide2 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col lg={8} className="d-flex justify-content-center">
            <img
              src={SLide2Image1}
              alt="SLide2Image1"
              className="slide-image "
            />
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={SLide2Image2}
              alt="SLide2Image2"
              className="slide-image "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Slide3 Component
const Slide3 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src={SLide3Image1}
              alt="SLide3Image1"
              className="slide-image "
            />
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src={SLide3Image2}
              alt="SLide3Image2"
              className="slide-image "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Slide4 Component
const Slide4 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src={SLide4Image1}
              alt="SLide4Image1"
              className="slide-image "
            />
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src={SLide4Image2}
              alt="SLide4Image2"
              className="slide-image "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Slide5 Component
const Slide5 = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={SLide5Image1}
              alt="SLide5Image1"
              className="slide-image "
            />
          </Col>
          <Col lg={8} className="d-flex justify-content-center">
            <img
              src={SLide5Image2}
              alt="SLide5Image2"
              className="slide-image "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Slide1, Slide2, Slide3, Slide4, Slide5 };
