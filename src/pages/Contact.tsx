import { Form } from "../components/Form";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h3>Kontakt</h3>
        <div className="contact-text">
          Är du intresserad av något här så får du gärna kontakta mig på
          Instagram, mail eller via formuläret.
        </div>
        <div className="icons-wrapper">
          <div className="icons-inner-wrapper">
            <div className="icons-box">
              <a href={"https://instagram.se"}>
                <FontAwesomeIcon
                  className="instagram-icon"
                  icon={faInstagram}
                />
              </a>
              <p>j.stuborn</p>
            </div>
            <div className="icons-box">
              <a href={"mailto:j.stuborn@hotmail.com"}>
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </a>
              <p>j.stuborn@hotmail.com</p>
            </div>
          </div>
        </div>
        <Form></Form>
        <div className="portrait">
          <img src="/public/assets/josefin.png" alt="josefin" />
          <p>/ joes</p>
        </div>
      </div>
    </div>
  );
};
