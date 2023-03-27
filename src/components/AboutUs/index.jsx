import React, { useEffect, useRef } from "react";
import logoDark from "../../assets/dark.svg";
import logoLight from "../../assets/light.svg";
import quotes from "../../assets/quotes.svg";
import "./index.css";
import ThemeSwitch from "../ThemeSwitch";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import EyeLogo from "../EyeLogo";
import { connect } from "react-redux";
import { setTheme } from "../../action/setTheme";
import teamSvg from "../../assets/team_1.svg";
import TeamWithoutName from "../TeamWithoutName";
import quotesLight from "../../assets/quotes-light.svg";

const AboutUs = (props) => {
  const {
    theme: { isBlack },
  } = props;
  const switchRef = useRef(false);
  useEffect(() => {
    const slide = document.querySelector(".subHeading");
    const fadeinout = document.querySelector(".logo-top-right");
    const fadeIn = document.querySelector(".quotesImg");
    const move = document.querySelector(".logoTopLeft");
    const typing = document.querySelector(".heading-text");
    const popIn = document.querySelector(".teamSvgDiv");

    // Hide all the elements before the animations start
    slide.style.opacity = "0";
    fadeinout.style.opacity = "0";
    fadeIn.style.opacity = "0";
    move.style.opacity = "0";
    typing.style.opacity = "0";
    popIn.style.opacity = "0";
    popIn.style.transform = "scale(0)";

    // Define the sequence of animations using setTimeout
    setTimeout(() => {
      move.style.opacity = "1";
    }, 0);
    setTimeout(() => {
      fadeinout.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      popIn.style.opacity = "1";
      popIn.style.transform = "scale(1)";
    }, 2000);
    setTimeout(() => {
      fadeIn.style.opacity = "1";
    }, 3000);
    setTimeout(() => {
      typing.style.opacity = "1";
    }, 4000);
    setTimeout(() => {
      slide.style.opacity = "1";
    }, 5000);
  });

  return (
    <div className="aboutUs">
      <div
        className={
          isBlack
            ? "height-100 bg-dark-svg pt-4"
            : "height-100 bg-light-svg pt-4"
        }
      >
        <div className="row mx-0">
          <div className="col-6">
            <div className="logo-top">
              {isBlack ? (
                <img src={logoDark} className="logoTopLeft" />
              ) : (
                <img src={logoLight} className="logoTopLeft" />
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="logo-top-right d-flex">
              <p
                className={
                  isBlack ? "text-dark-color mb-0" : "text-light-color mb-0"
                }
              >
                ABOUT US
              </p>
              <EyeLogo isBlack={isBlack} />
              {/* <img src={defaultLogo} /> */}
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-sm-4 col-md-3 col-lg-4">
            <div className="body-content">
              <div className="quotesDiv">
              {isBlack ? 
                  <img src={quotes} className="quotesImg" />
                  :
                  <img src={quotesLight} className="quotesImg" />
                }
              </div>
              <div className="quoteTextDiv">
                {/* <p className="heading-text text-uppercase text-white mb-0 ">
                <span>We speak the</span>
                <br />
                <span className="textTypingWrapper">
                  <span className="textTyping text-uppercase mb-0 text-dark-color">Language</span>
                </span>
                <br />
                <span>Your tech-device</span>
                <br />
                <span>knows</span>
              </p> */}
                <p
                  className={
                    isBlack
                      ? "heading-text text-uppercase text-white mb-0"
                      : "heading-text text-uppercase text-dark-light-color mb-0"
                  }
                >
                  We speak the
                  <br />
                  <span
                    className={
                      isBlack
                        ? "textTyping text-uppercase mb-0 text-dark-color "
                        : "textTyping text-uppercase mb-0 text-light-color "
                    }
                  >
                    Language
                  </span>
                  <br />
                  Your tech-device
                  <br />
                  knows
                </p>
              </div>
              <div className="quoteTextDiv">
                <p
                  className={
                    isBlack
                      ? "text-white subHeading fw-semibold"
                      : "text-dark-light-color subHeading fw-semibold"
                  }
                >
                  We begin each project by envisioning the end result
                  <br />
                  and then use our experitise,analytical skills, and artistic
                  <br />
                  touch to bring that vision to life. Our goal is to not only
                  <br />
                  deliver high-quality solutions, but also to empower our
                  <br />
                  clients and employees to achieve their full potential.
                </p>
              </div>
              <div className="skillDiv">
                <p
                  className={
                    isBlack
                      ? "text-uppercase text-dark-color subHeading fw-semibold"
                      : "text-uppercase text-light-color subHeading fw-semibold"
                  }
                >
                  Java,C#,Node js,react js,vue js,angular js,react
                  <br />
                  native,flutter,sql,nosql,aws,azure
                </p>
                <p className="text-end text-secondary subHeading fw-semibold">
                  Explore more...
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-8">
            <div className="teamSvgDiv w-100">
              <img src={teamSvg} className="teamSvg" />
              {/* <TeamWithoutName/> */}
            </div>
          </div>
        </div>
        <div className="switch">
          <ThemeSwitch switchRef={switchRef} />
        </div>
        <div className="socials">
          <div className="insta my-2">
            {isBlack ? (
              <FaInstagram className="text-white" />
            ) : (
              <FaInstagram className="text-primary" />
            )}
          </div>
          <div className="facebook my-2">
            {isBlack ? (
              <FaFacebookF className="text-white" />
            ) : (
              <FaFacebookF className="text-primary" />
            )}
          </div>
          <div className="twitter my-2">
            {isBlack ? (
              <FaTwitter className="text-white" />
            ) : (
              <FaTwitter className="text-primary" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setTheme: (val) => dispatch(setTheme(val)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
