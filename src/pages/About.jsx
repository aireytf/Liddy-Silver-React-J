import { Col, Container, Row } from "react-bootstrap";
import AboutImage from "../assets/images/Paul and Ann Ingestre-flipped.jpg";
import Layout from "../component/Layout";
import { useEffect } from "react";
import { useColor } from "../store";

const About = () => {
  const { bgColor, setBGColor } = useColor();
  useEffect(() => {
    setBGColor("#D4D6D1 ");
  }, []);
  return (
    <div className="about" style={{ backgroundColor: bgColor }}>
      <Layout>
        <Container className=" d-flex justify-content-center ">
          <Container className="d-flex justify-content-center align-items-center">
            <Container>
              <Row>
                <Col>
                  <h1 className="about-heading my-5 pt-5">
                    About Liddy Silver
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <img
                    src={AboutImage}
                    alt="About-Image"
                    className="about-image"
                  />
                </Col>
                <Col lg={8}>
                  <div className=" about-content">
                    <p>
                      We are a London based company specialising in residential
                      interior design.
                    </p>
                    <br />
                    <p>
                      Liddy Silver was founded by Ann Bamelis and Paul Silver.
                      Ann has over ten years’ experience within the high end
                      residential sector, including three years as senior
                      designer with K&amp;H Design, one of the top 100 UK
                      interior design companies. Ann’s designs have featured in
                      House in Garden. Paul is the driving force behind the
                      company.
                    </p>
                    <br />

                    <p>
                      Ann has an extensive background in art and antiques. She
                      brings her thorough understanding of historic interiors,
                      gained as a valuer at auction houses such as Sotheby’s and
                      Dreweatts, and instills elements of this into designs that
                      are relevant today. This results in harmonious and deeply
                      inviting interiors that, at the same time, reflect the
                      personality or intention of the clients. The studio’s
                      interiors are a perfect balance of practicality and
                      sophistication.
                    </p>
                    <br />

                    <p>
                      Our services include concept design, technical drawings
                      including joinery design, bathroom and kitchen design
                      (RIBA stages 1-3) for full refurbishments. They also
                      include sourcing and procurement of furniture and
                      lighting, bespoke joinery, curtains and soft furnishings
                      (RIBA stage 4) and staging.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Layout>
    </div>
  );
};

export default About;
