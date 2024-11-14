import { Container } from "react-bootstrap";
import HomeLogo from "../assets/images/palm-leaf-bg-am.png";
import Layout from "../component/Layout";
import { useEffect, useState } from "react";
import { useColor } from "../store";
import axios from "axios";

const Home = () => {
  const { bgColor, setBGColor } = useColor();

  // Initialize state variables for page content, tagline, and loading state
  const [pageContent, setPageContent] = useState(null);
  const [siteTitle, setSiteTitle] = useState("");

  useEffect(() => {
    // Set background color on initial load
    setBGColor("#DFE2DB");

    // Fetch the static page by slug (Home page)
    axios
      .get("https://site2.roberweb.com/wp-json/wp/v2/pages?slug=home") // Replace with your slug or ID
      .then((response) => {
        setPageContent(response.data[0]); // Assuming the home page is the first result
      })
      .catch((error) => {
        console.error("Error fetching page:", error);
      });

    // Fetch the site title
    axios.get("https://site2.roberweb.com/wp-json")
      .then(response => {
        setSiteTitle(response.data.name);
      })
      .catch(error => console.error("Error fetching site title:", error));

  }, [setBGColor]);

  return (
    <div className="home" style={{ backgroundColor: bgColor }}>
      <Layout>
        <Container className="d-flex align-items-center justify-content-center">
          <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
            <div className="home-image p-md-0 p-5">
              <img src={HomeLogo} alt="Home Logo" className="img-fluid" />
            </div>
            <h1 className="text-center">
              <b className="home-title">{siteTitle}</b>
            </h1>
            <div
              //dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }}
            />
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
