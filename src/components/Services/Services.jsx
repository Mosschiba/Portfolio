import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awsome</span>
        <span>Services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, adobe, adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-10rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ left: "16rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"lorem epsom text are usally used in places where"}
          />
        </motion.div>
      </div>
      <div className="blur s-blur2" style={{ background: "var--purple" }}></div>
    </div>
  );
};

export default Services;
