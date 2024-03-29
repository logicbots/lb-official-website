import React, { useState, useEffect } from "react";

const EyeLogo = (props) => {
  const {
    isBlack
  } = props;
  const [color, setColor] = useState("");
  const [circle, setCircle] = useState("");
  useEffect(() => {
    isBlack ? setColor("#f5b301") : setColor("#4a86e8");
    isBlack ? setCircle("#000") : setCircle("#FFF");
  }, [isBlack]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 353 137"
      className="eyelogo"
    >
      <path
        id="rounded-rect"
        fill={color}
        d="M352.421 68.5c0 37.321-30.707 68.5-68.028 68.5H68.028C30.707 137 0 106.293 0 68.5 0 31.18 30.707 0 68.028 0h216.365c37.321 0 68.028 30.707 68.028 68.5z"
      ></path>
      <path
        className="fade-path"
        fill={circle}
        d="M176.211 116.686c-26.928 0-49.132-22.203-49.132-49.13 0-26.928 22.204-49.132 49.132-49.132 26.927 0 49.131 22.203 49.131 49.131 0 27.4-22.204 49.131-49.131 49.131z"
      ></path>
    </svg>
  );
};

export default EyeLogo;
