import React, { useEffect, useState } from "react";
import LogoSvgLight from "../../components/LogoSvgLight";
import LogoSvgDark from "../../components/LogoSvgDark";
import "../../style/index.css";

const LandingPage = () => {
  const [dark, setDark] = useState("");
  const [light, setLight] = useState("");

  const changeTheme = () => {
    if (dark === "d-none") {
      setDark("");
      setLight("d-none");
    } else {
      setDark("d-none");
      setLight("");
    }
  };

  useEffect(() => {
    setDark("d-none");
  }, []);
  return (
    <>
      <div
        className={
          "d-flex justify-content-center align-items-center height-100 bg-light-svg " +
          light
        }
      >
        <LogoSvgLight onClick={changeTheme} />
      </div>
      <div
        className={
          "d-flex justify-content-center align-items-center height-100 bg-dark-svg " +
          dark
        }
      >
        <LogoSvgDark onClick={changeTheme} />
      </div>
    </>
  );
};

export default LandingPage;
