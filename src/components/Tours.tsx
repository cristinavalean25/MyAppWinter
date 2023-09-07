import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap";
import "../CssPages/Tours.css";
import { Link } from "react-router-dom";
import img1 from "../images/maldive.jpg";
import img2 from "../images/nisa.jpg";
import img3 from "../images/paris.jpeg";
import img4 from "../images/barcelona.jpg";
import img5 from "../images/lisabona.jpg";
import img6 from "../images/roma.jpg";

function Tours() {
  return (
    <>
      <Navbar />
      <div className="tours-container">
        <h2>Tours</h2>
        <Carousel className="custom-carousel">
          <Carousel.Item>
            <Link to="/">
              <img className="custom-carousel-image" src={img1} alt=""></img>
            </Link>
            <Carousel.Caption>
              <h3>Maldive</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/">
              <img className="custom-carousel-image" src={img2} alt=""></img>
            </Link>
            <Carousel.Caption>
              <h3>Nisa</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/">
              <img className="custom-carousel-image" src={img6} alt=""></img>
            </Link>
            <Carousel.Caption>
              <h3>Roma</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Other Trips</h2>
      <div className="secound-nav">
        <div className="secound-nav-paris">
          <Link to="/" style={{ margin: "10px", textDecoration: "none" }}>
            <img className="image-div" src={img3} alt=""></img>
            <h3>PARIS</h3>
          </Link>
        </div>
        <div className="secound-nav-paris">
          <Link to="/" style={{ margin: "10px", textDecoration: "none" }}>
            <img className="image-div" src={img4} alt=""></img>
            <h3>BARCELONA</h3>
          </Link>
        </div>
        <div className="secound-nav-paris">
          <Link to="/" style={{ margin: "10px", textDecoration: "none" }}>
            <img className="image-div" src={img5} alt=""></img>
            <h3>LISABONA</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Tours;
