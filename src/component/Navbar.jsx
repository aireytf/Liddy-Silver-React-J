import { Navbar, Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import Logo from '../assets/images/palm-leaf-bg.png';
import '../index.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useColor } from '../store';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const { bgColor } = useColor()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <Navbar expand="lg" className={`position-fixed w-100 py-lg-auto py-0 ${scrolling ? "shadow" : null}`}>
        <Container style={{ backgroundColor: bgColor }} >
          <Row className="w-100 align-items-center ">
            <Col xs={4} className="d-flex justify-content-start  ">
              <Navbar.Toggle aria-controls="navbar-nav-dropdown" />
            </Col>
            <Col xs={4} className="mx-lg-auto  text-center  pt-2">
              <Navbar.Brand as={Link} to="/" className="mx-auto ">
                <img
                  src={Logo}
                  alt="Logo"
                  className='logo'
                />
              </Navbar.Brand>
            </Col>

          </Row>
          <Navbar.Collapse id="navbar-nav-dropdown">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="Projects" id="nav-dropdown">
                <NavDropdown.Item as={Link} to="/project1">Kensington</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/project2">Villa Therese</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/project3">Tonbridge</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
