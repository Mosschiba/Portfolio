import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Thumbup from "../../img/thumbup.png";
import Islem2 from "../../img/Islem2.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Floatingdiv from "../Floatingdiv/Floatingdiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Hi! I Am
          </span>
          <span>Mouslem Chibane</span>
          <span>
            Frontend Developer with high level of experience in wed designing
            and development, poruducing highend quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="#">
            <img src={Github} alt="github-icon" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="linkedin-icon" />
          </a>
          <a href="#">
            <img src={Instagram} alt="insta-icon" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img className="islam" src={Islem2} alt="" />
        <motion.img
          initial={{ left: "-38%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          className="glasses"
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "80%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="crown"
          style={{
            top: "-6%",
            left: "70%",

            color: darkMode ? "black" : "",
          }}
        >
          <Floatingdiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "-38%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          className="thumb"
          style={{
            top: "85%",
            left: "-4rem",
            color: darkMode ? "black" : "",
          }}
        >
          <Floatingdiv image={Thumbup} txt1="Beautiful" txt2="Web pages" />
        </motion.div>
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "18rem",
            left: "-9rem",
            width: "24rem",
            height: "14rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
