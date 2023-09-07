import Navbar from "./Navbar";
import "../CssPages/About.css";
import img1 from "../images/travel.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCar,
  faHeart,
  faLifeRing,
  faMap,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <Navbar />

      <div>
        <img src={img1} alt="" className="img-fluid max-height-500 w-100 " />
      </div>
      <div className="title-about text-center mx-auto">
        <h1>Why Choos Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum
          illo, architecto, nihil nam sed odit aut optio veritatis recusandae
          sequi itaque sit earum perferendis dolorum placeat nesciunt vero
          magnam!
        </p>
      </div>

      <div className="container-fluid travel-container">
        <div className="row">
          <div className="col-md-4 easy-container">
            <FontAwesomeIcon icon={faBook} size="2x" color="#94544A" />
            <h3>Easy Booking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-4 easy-container">
            <FontAwesomeIcon icon={faMoneyBillWave} size="2x" color="green" />
            <h3>Value for Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-4 easy-container">
            <FontAwesomeIcon icon={faHeart} size="2x" color="red" />
            <h3>Passionate Travel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 easy-container">
            <FontAwesomeIcon icon={faMap} size="2x" />
            <h3>Awesome Places</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-4 easy-container">
            <FontAwesomeIcon icon={faCar} size="2x" />
            <h3>Value for Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-4 easy-container">
            <FontAwesomeIcon icon={faLifeRing} size="2x" />
            <h3>Pasionate Travel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
