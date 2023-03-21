import React, { useEffect, useState } from "react";
import LogoSvgLight from "../../components/LogoSvgLight";
import LogoSvgDark from "../../components/LogoSvgDark";
import TeamSvgDark from "../../components/TeamSvgDark";
import "../../style/index.css";

const LandingPage = () => {
  const [themeClass, setThemeClass] = useState("bg-dark-svg");
  const [textColor, setTextColor] = useState("text-dark-theme");
  const [isVisible, setIsVisible] = useState(false);

  const changeTheme = () => {
    if (!isVisible) {
      setThemeClass("bg-light-svg");
      setTextColor("text-light-theme");
    } else {
      setThemeClass("bg-dark-svg");
      setTextColor("text-dark-theme");
    }
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <section id="landing">
        <div className="svgDiv">
          <div
            className={`d-flex justify-content-center align-items-center height-100  ${themeClass}`}
          >
            {isVisible ? (
              <LogoSvgLight onClick={changeTheme} />
            ) : (
              <LogoSvgDark onClick={changeTheme} />
            )}
            {/* <LogoSvgLight onClick={changeTheme} /> */}
            <div className="textDiv">
              <p
                className={`${textColor} cursor noselect mb-0 `}
                onClick={changeTheme}
              >
                Click to switch mode|
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
