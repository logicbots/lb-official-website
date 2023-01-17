import React, { useEffect, useState } from "react";
import LogoSvgLight from "../../components/LogoSvgLight";
import LogoSvgDark from "../../components/LogoSvgDark";
import "../../style/index.css";

const LandingPage = () => {
  const [dark, setDark] = useState("");
  const [light, setLight] = useState("");
  const [textColor, setTextColor] = useState("text-light-theme");

  const changeTheme = () => {
    if (dark === "d-none") {
      setDark("");
      setLight("d-none");
      setTextColor("text-dark-theme");
    } else {
      setDark("d-none");
      setLight("");
      setTextColor("text-light-theme");
    }
  };

  useEffect(() => {
    setDark("d-none");
  }, []);
  return (
    <div>
      <div className="svgDiv">
        <div
          className={
            "d-flex justify-content-center align-items-center height-100 bg-light-svg " +
            light
          }
        >
          <LogoSvgLight onClick={changeTheme} />
          <div className="textDiv">
            <p className={`${textColor} cursor noselect`} onClick={changeTheme}>
              Click to switch mode|
            </p>
          </div>
        </div>
        <div
          className={
            "d-flex justify-content-center align-items-center height-100 bg-dark-svg " +
            dark
          }
        >
          <LogoSvgDark onClick={changeTheme} />
          <div className="textDiv">
            <p className={`${textColor} cursor noselect`} onClick={changeTheme}>
              Click to switch mode|
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
