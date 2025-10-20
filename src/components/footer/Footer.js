import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import ReactGA from "react-ga4";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
   const handleFooterView = () => {
    ReactGA.event({
      category: "Footer",
      action: "User viewed footer",
    });
  };

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className="footer-div" onMouseEnter={handleFooterView}>
        <p className={`footer-text ${isDark ? "dark-mode" : ""}`}>
          {emoji("👀 Thank you for visit!")}
        </p>
      </div>
      </div>
    </Fade>
  );
}
