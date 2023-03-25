import React, { useEffect, useRef } from "react";
import logoDark from "../../assets/dark.svg";
import logoLight from "../../assets/light.svg";
import quotes from "../../assets/quotes.svg";
import ThemeSwitch from "../ThemeSwitch";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import EyeLogo from "../EyeLogo";
import { setTheme } from "../../action/setTheme";
import { connect } from "react-redux";
import teamSvg from "../../assets/team.svg";
import TeamWithName from "../TeamWithName";

const OurTeam = (props) => {
  const {
    theme: { isBlack },
  } = props;
  const switchRef = useRef(false);
  useEffect(() => {
    //const slide = document.querySelector(".subHeading");
    const fadeinout = document.querySelector(".logo-top-right");
    //const fadeIn = document.querySelector(".quotesImg");
    const move = document.querySelector(".logoTopLeft");
    const typing = document.querySelector(".heading-text");
    const popIn = document.querySelector(".teamSvgDiv");

    // Hide all the elements before the animations start
    //slide.style.opacity = "0";
    fadeinout.style.opacity = "0";
    //fadeIn.style.opacity = "0";
    move.style.opacity = "0";
    typing.style.width = "0";
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
    // setTimeout(() => {
    //   fadeIn.style.opacity = "1";
    // }, 5000);
    setTimeout(() => {
      typing.style.width = "100%";
    }, 7000);
    // setTimeout(() => {
    //   slide.style.opacity = "1";
    // }, 9000);
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
                <img src={logoDark} className="logoTopLeft-without" />
              ) : (
                <img src={logoLight} className="logoTopLeft-without" />
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="logo-top-right d-flex">
              <p className="text-dark-color mb-0 text-uppercase">Team</p>
              <EyeLogo />
              {/* <img src={defaultLogo} /> */}
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-sm-4 col-md-3 col-lg-4">
            <div className="body-content">
              <div className="quotesDiv">
                <img src={quotes} className="quotesImg-without" />
              </div>
              <div className="quoteTextDiv">
                <p className="heading-text text-uppercase text-white mb-0 ">
                  We Create
                  <br />
                  <span className="textTyping text-uppercase mb-0 text-dark-color">
                    Custom-invotive
                  </span>
                  <br />
                  Solution for
                  <br />
                  Your tech problems
                </p>
              </div>
              <div className="quoteTextDiv">
                <p className="text-white subHeading">
                  With a culture of freedom and growth,
                  <br />
                  LogicBots is more than just a software agency.
                  <br />
                  It's community dedicated to making
                  <br />
                  the world a better place through technology.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-8">
            <div className="teamSvgDiv-without w-100">
              <TeamWithName/>
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
export default connect(mapStateToProps, mapDispatchToProps)(OurTeam);
