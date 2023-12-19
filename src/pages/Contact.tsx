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
        <Form subject={""}></Form>
        <div className="portrait">
          {/*  <img src="../../public/assets/josefin.png" alt="josefin" /> */}
          <div>
            <img
              src="/assets/JOES.svg"
              alt="joes"
              width={"50px"}
              height={"50px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
