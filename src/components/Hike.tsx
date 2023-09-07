import img1 from "../images/hike.jpg";
import "../CssPages/Hike.css";
import Navbar from "./Navbar";
import img3 from "../images/galcescu.jpeg";
import img4 from "../images/parang.jpg";
import img5 from "../images//parang2.jpg";
import img6 from "../images/parang3.jpg";

function Hike() {
  return (
    <>
      <Navbar />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "73vh",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-left p-5">
                <h2
                  style={{ color: "#fff", fontWeight: "900", fontSize: "55px" }}
                >
                  TAKE A HIKE
                </h2>
                <p
                  className="text-paragraf"
                  style={{ fontSize: "25px", marginTop: "10px" }}
                >
                  Lacul Gâlcescu, denumit uneori Câlcescu din Munții Parâng,
                  este un lac glaciar aflat într-o cuvetă de eroziune glaciară.
                  Este situat în Căldarea Câlcescu din Munții Parâng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3">
              <img
                src={img3}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="col-md-3">
              <img
                src={img4}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="col-md-3">
              <img
                src={img5}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </div>
            <div className="col-md-3">
              <img
                src={img6}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hike;
