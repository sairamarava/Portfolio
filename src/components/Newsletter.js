import { Alert } from "bootstrap";
import {Row,Col} from "react-bootstrap";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <TrackVisibility>
          {({isVisible})=>(
          <div className={isVisible? "animate__animated animate__zoomIn":"animate__animated animate__zoomOut"}>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success"></Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
          </div>)}</TrackVisibility>
        </Row>
      </div>
    </Col>
  );
};
