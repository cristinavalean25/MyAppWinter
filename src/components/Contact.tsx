import "../CssPages/Contact.css";
import img1 from "../images/back.jpeg";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="contact-form">
          <h2>Contact us</h2>
          <form>
            <div className="form-group">
              <label>Your name:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Your email:</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Your message:</label>
              <textarea></textarea>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                style={{
                  marginLeft: "100px",
                }}
              />
              <label>Subscribe to our newsletter</label>
            </div>
            <button type="submit" className="btn-send-message">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
