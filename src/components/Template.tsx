import Carousel from "react-bootstrap/Carousel";
import "../CssPages/Template.css";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../images/noapte-de-iarna.jpg";
import img2 from "../images/italy.jpg";
import img3 from "../images/italy-2.jpg";
import img4 from "../images/franta.jpeg";
import img5 from "../images/franta2.jpg";
import img6 from "../images/franta3.jpg";
import img7 from "../images/austria.jpeg";
import img8 from "../images/austria1.jpg";
import img9 from "../images/austria2.jpg";
import img10 from "../images/st-moritz.jpg";
import img11 from "../images/st-moritz-1.jpg";
import img12 from "../images/st-moritz-2.jpg";

function Template() {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/Tours");
  };

  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "90vh",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <div className="title">
            <div>Choose</div>
            <div>Your</div>
            <div>Perfect</div>
            <div>Winter</div>
          </div>
          <div className="buttons">
            <button className="btn-video">Video</button>
            <button onClick={handleShowMore} className="btn-showMore">
              Show More
            </button>
          </div>
        </div>
      </div>

      <div className="container-bottom">
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <Link
                to="/Cortina"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div className="container-content">
                  <div className="d-md-flex">
                    <div className="carousel-images">
                      <img
                        src={img2}
                        className="d-block max-img-width-300 mx-auto"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-text">
                      <h2>ITALY</h2>
                      <h3>Cortina D'Ampezzo</h3>
                      <p className="text-body">
                        Cortina d`Ampezzo is a ski resort in northern Italy.
                        It`s part of the Dolomiti Superski area, which
                        encompasses the Falzarego Pass, with its downhill runs.
                        Sites from the 1956 Winter Games held in Cortina include
                        the Ice Stadium, the Eugenio Monti bobsleigh run and the
                        disused ski jump Trampolino Olimpico Italia.
                      </p>
                    </div>
                    <div className="carousel-images">
                      <img
                        src={img3}
                        className="d-block max-img-width-300 mx-auto"
                        alt="Slide 1"
                        style={{ marginRight: "30px" }}
                      />
                      <img
                        src={img2}
                        className="d-block max-img-width-300 mx-auto"
                        alt="Slide 1"
                        style={{ marginRight: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container-content">
                <div className="d-md-flex">
                  <div className="carousel-images">
                    <img
                      src={img4}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-text">
                    <h2>FRANCE</h2>
                    <h3>Val d`Isere</h3>
                    <p className="text-body">
                      Val d'Isère, one of the best French ski resorts, has been
                      a firm favourite amongst Iglu customers year on year for
                      numerous reasons: the vast Espace Killy Ski Area with 300
                      km of piste to explore including the famous Olympic
                      downhill run. La Face and the miles of cruisy reds and
                      blues.
                    </p>
                  </div>
                  <div className="carousel-images">
                    <img
                      src={img5}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                      style={{ borderRadius: "5px", marginRight: "5px" }}
                    />
                    <img
                      src={img6}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                      style={{ borderRadius: "5px", marginRight: "15px" }}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container-content">
                <div className="d-md-flex">
                  <div className="carousel-images">
                    <img
                      src={img7}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-text">
                    <h2>AUSTRIA</h2>
                    <h3>St Anton</h3>
                    <p className="text-body">
                      St Anton in the Arlberg region is one of the world`s most
                      famous ski resorts. It's home to some of the most
                      challenging slopes in the Alps and an equally demanding
                      après scene!
                    </p>
                  </div>
                  <div className="carousel-images">
                    <img
                      src={img8}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                      style={{ borderRadius: "5px", marginRight: "5px" }}
                    />
                    <img
                      src={img9}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                      style={{ borderRadius: "5px", marginRight: "15px" }}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container-content">
                <div className="d-md-flex">
                  <div className="carousel-images">
                    <img
                      src={img10}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-text">
                    <h2>ELVETIA</h2>
                    <h3>St Moritz</h3>
                    <p className="text-body">
                      St. Moritz lies on the southern slopes of the Albula Alps
                      below the Piz Nair (3,056 m or 10,026 ft) overlooking the
                      flat and wide glaciated valley of the Upper Engadine and
                      eponymous lake: Lake St. Moritz.
                    </p>
                  </div>
                  <div className="carousel-images">
                    <img
                      src={img11}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                      style={{ borderRadius: "5px", marginRight: "5px" }}
                    />
                    <img
                      src={img12}
                      className="d-block max-img-width-300 mx-auto"
                      alt="Slide 2"
                      style={{ borderRadius: "5px", marginRight: "15px" }}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Template;
