import { Navbar, Nav, NavDropdown, Container, Col, Row } from "react-bootstrap";
import "../index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useColor } from "../store";
import axios from "axios";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const { bgColor } = useColor();

  const isLocal = window.location.hostname === "localhost"; // Check if running on localhost

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch menu items from WordPress
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          "https://site2.roberweb.com/wp-json/custom/v1/menus/2"
        );
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  // Adjust URLs if running locally
  const adjustUrl = (url) => {
    if (isLocal) {
      // Change the URL to point to localhost
      // For example, replace 'https://site2.roberweb.com' with 'http://localhost:5173'
      return url.replace("https://site2.roberweb.com", "http://localhost:5173");
    }
    return url; // Leave the URL as-is for production
  };

  // Render menu items
  const renderMenuItems = (items) => {
    return items.map((item) => {
      const adjustedUrl = adjustUrl(item.url); // Adjust the URL if needed
      if (item.children && item.children.length > 0) {
        return (
          <NavDropdown
            title={item.title}
            key={item.ID}
            id={`nav-dropdown-${item.ID}`}
          >
            {item.children.map((child) => {
              const childAdjustedUrl = adjustUrl(child.url); // Adjust child URL as well
              return (
                <NavDropdown.Item as={Link} to={childAdjustedUrl} key={child.ID}>
                  {child.title}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link as={Link} to={adjustedUrl} key={item.ID}>
            {item.title}
          </Nav.Link>
        );
      }
    });
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className={`position-fixed w-100 py-lg-auto py-0 ${
          scrolling ? "shadow" : ""
        }`}
      >
        <Container style={{ backgroundColor: bgColor }}>
          <Row className="w-100 align-items-center">
            <Col xs={4} className="d-flex justify-content-start">
              <Navbar.Toggle aria-controls="navbar-nav-dropdown" />
            </Col>
            <Col xs={4} className="mx-lg-auto text-center pt-2">
              <Navbar.Brand as={Link} to="/" className="mx-auto">
                {/* Logo directly from URL */}
                <img
                  src="https://site2.roberweb.com/wp-content/uploads/2024/10/ls-logo.png"
                  alt="Logo"
                  className="logo"
                />
              </Navbar.Brand>
            </Col>
          </Row>
          <Navbar.Collapse id="navbar-nav-dropdown">
            <Nav className="ms-auto">{renderMenuItems(menuItems)}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
