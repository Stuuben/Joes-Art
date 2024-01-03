import { Form } from "../components/Form";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h2>Kontakt</h2>
        <div className="contact-text">
          Är du intresserad av något här så får du gärna kontakta mig på
          Instagram, mail eller via formuläret.
        </div>
        <div className="icons-wrapper">
          <div className="icons-inner-wrapper">
            <div className="icons-box">
              <a href={"https://www.instagram.com/j.stuborn/"}>
                <FontAwesomeIcon
                  className="instagram-icon"
                  icon={faInstagram}
                />

                <p className="link-p">j.stuborn</p>
              </a>
            </div>
            <div className="icons-box">
              <a href={"mailto:j.stuborn@hotmail.com"}>
                <FontAwesomeIcon icon={faEnvelopeSquare} />

                <p className="link-p">j.stuborn@hotmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <Form></Form>
      </div>
    </div>
  );
};
