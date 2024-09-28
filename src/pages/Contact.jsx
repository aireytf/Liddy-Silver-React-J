import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactImage from '../assets/images/Contact Yellow portrait fireplace.jpg'
import Layout from '../component/Layout'
import { useColor } from '../store'
import { useEffect } from 'react'

const Contact = () => {
    const { bgColor, setBGColor } = useColor()
    useEffect(() => {

        setBGColor("#D4D6D1 ")

    }, [])
    return (
        <div className='about' style={{ backgroundColor: bgColor }}>
            <Layout>
                <Container className=" d-flex justify-content-center ">
                    <Container className="d-flex justify-content-center align-items-center">
                        <Container>

                            <Row>
                                <Col>
                                    <h1 className="about-heading mt-5 mb-4 pt-5">Contact</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={7}>
                                    <Col xl={6} lg={7} md={12} className=" ms-lg-auto   p-lg-0 p-md-5 p-4" > <img
                                        src={ContactImage}
                                        alt="About-Image"
                                        className="img-fluid "
                                    /></Col>

                                </Col>
                                <Col lg={5} className='d-flex justify-content-center align-items-end'>

                                    <Col xl={5} lg={8} md={12} className=' me-sm-auto    p-lg-0 p-md-5 p-4' >
                                        <div className="text-end contact-content">
                                            <p className='mb-0'>14 Cope Place</p>
                                            <p className="mb-4">London W8 6AA</p>
                                            <p className='mb-0'>07770 522864</p>
                                            <p className='mb-0'>
                                                <Link to="mailto:ann@liddysilver.com" className='text-decoration-none text-muted'>ann@liddysilver.com</Link>
                                            </p>
                                            <p className="mb-4">
                                                <Link to="mailto:paul@liddysilver.com" className='text-decoration-none text-muted'>paul@liddysilver.com</Link>
                                            </p>
                                            <p>
                                                <Link
                                                    to="http://instagram.com/liddy_silver_design/?hl=en/"
                                                    className='text-decoration-none text-muted'>
                                                    <i className="fa-brands fa-instagram fs-4"></i>
                                                </Link>
                                            </p>

                                        </div></Col>

                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container >
            </Layout >
        </div >
    )
}

export default Contact