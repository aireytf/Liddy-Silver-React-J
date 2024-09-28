import { Col, Container, Row } from 'react-bootstrap'


// 1 slide
import Slide1Image from '../../assets/images/Tonbridge Hall with Bench.jpg'

// 2 slide
import SLide2Image1 from '../../assets/images/Tonbridge Drawing Room CGI.jpg'
import SLide2Image2 from '../../assets/images/Tonbridge Kitchen CGI.jpg'
// 3 slide
import SLide3Image1 from '../../assets/images/Tonbridge Dining Room.jpg'
import SLide3Image2 from '../../assets/images/Tonbridge Entrance Hall .jpg'

const Slide1 = () => {
    return (
        <div className="d-flex justify-content-center ">
            <Container className='d-flex justify-content-center align-items-center'>
                <Row>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <img src={Slide1Image} alt="Slide1Image" className=' slide-image' />
                    </Col>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <div style={{ backgroundColor: "#cfcfc2" }} className="Kensington-content d-flex flex-column align-items-center px-lg-5 px-1 justify-content-center text-center">
                            <h1 style={{ color: "#7ea195" }}>TONBRIDGE</h1>
                            <p>Ongoing Project :</p>
                            <p>Visualisation of an off plan project</p>
                            <p>We built a virtual house, using architect’s plans
                                and elevations for the conversion of a disused
                                settlement tank. The CGI’s show the abundance of
                                natural light and help prospective buyers visualise
                                the property’s interiors. The chosen furniture and
                                fittings are neutral, but full of character and the
                                palette is in harmony with the surrounding
                                countryside.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const Slide2 = () => {
    return (
        <div className="d-flex justify-content-center">
            <Container className='d-flex justify-content-center align-items-center'>
                <Row>
                    <Col lg={8} className='d-flex justify-content-center'>
                        <img src={SLide2Image1} alt="SLide2Image1" className=' slide-image' />
                    </Col>
                    <Col lg={4} className='d-flex justify-content-center'>
                        <img src={SLide2Image2} alt="SLide2Image2" className=' slide-image' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const Slide3 = () => {
    return (
        <div className="d-flex justify-content-center">
            <Container className='d-flex justify-content-center align-items-center'>
                <Row>
                    <Col lg={8} className='d-flex justify-content-center'>
                        <img src={SLide3Image1} alt="SLide3Image1" className=' slide-image' />
                    </Col>
                    <Col lg={4} className='d-flex justify-content-center'>
                        <img src={SLide3Image2} alt="SLide3Image2" className=' slide-image' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { Slide1, Slide2, Slide3 }
