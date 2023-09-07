import Navbar from "../components/Navbar";
import "../CssPages/Cortina.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import img1 from "../images/summer-cortina.jpg";

function Cortina() {
  return (
    <>
      <Navbar />
      <div className="container-fluid cortina-container">
        <Row>
          <Col md={6} className="cortina-content">
            <h1>Let's enjoy your trip in Cortina D'Ampezzo</h1>
            <Form className="cortina-form">
              <Form.Group className="mb-3">
                <Form.Label>Select your destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Destination"
                  className="cortina-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select date</Form.Label>
                <Form.Control type="date" className="cortina-input" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of persons</Form.Label>
                <Form.Control type="number" className="cortina-input" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="cortina-button"
              >
                Search
              </Button>
            </Form>
          </Col>
          <Col md={6} className="cortina-image">
            <img src={img1} alt="" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Cortina;
