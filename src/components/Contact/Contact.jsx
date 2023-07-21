import React from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="contacts">
      <div className="c-left">
        <div className="awesome">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Get in Touch
          </span>
          <span>Contact ME</span>
          <div
            className="blur s-blur1"
            style={{ background: "#AFB1FF94" }}
          ></div>
        </div>
      </div>
      {/* leftsside  */}
      <div className="c-right">
        <form action="#">
          <input
            type="text"
            name="user-name"
            className="user"
            placeholder="name"
          />
          <input
            type="email"
            name="user-email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" className="button" value="Send" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
