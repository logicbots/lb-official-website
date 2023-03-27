import React, { useEffect, useState } from "react";
import LogoSvgLight from "../../components/LogoSvgLight";
import LogoSvgDark from "../../components/LogoSvgDark";
import TeamSvgDark from "../../components/TeamSvgDark";
import "../../style/index.css";
import { setTheme } from "../../action/setTheme";
import { connect } from "react-redux";

const LandingPage = (props) => {
  const {
    theme: { isBlack },
  } = props;
  //console.log("theme>>>",isBlack)
  const [themeClass, setThemeClass] = useState("bg-dark-svg");
  const [textColor, setTextColor] = useState("text-dark-theme");
  const [isVisible, setIsVisible] = useState(false);

  const changeTheme = () => {
    props.setTheme(!isBlack);
  };

  return (
    <div>
      <section id="landing">
        <div className="svgDiv">
          <div
            className={!isBlack ? "d-flex justify-content-center align-items-center height-100 bg-light-svg" : "d-flex justify-content-center align-items-center height-100 bg-dark-svg"}
          >
            {!isBlack ? (
              <LogoSvgLight onClick={changeTheme} />
            ) : (
              <LogoSvgDark onClick={changeTheme} />
            )}
            {/* <LogoSvgLight onClick={changeTheme} /> */}
            <div className="textDiv">
              <p
                className={!isBlack ? "text-light-theme cursor noselect mb-0 " : "text-dark-theme cursor noselect mb-0 "}
                onClick={changeTheme}
              >
                Click to switch mode<span className="binker"></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setTheme: (val) => dispatch(setTheme(val)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
