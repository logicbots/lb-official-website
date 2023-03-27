import React, { useState, useEffect,useRef } from "react";
import "./index.css";
import { connect } from "react-redux";
import { setTheme } from "../../action/setTheme";

const ThemeSwitch = (props) => {
  const {
    theme: { isBlack },
  } = props;
  const [light, setLight] = useState(!isBlack);

  const handleSwitchChange = (event) => {
    const newDark = event.target.checked;
    props.setTheme(!newDark);
    setLight(newDark);
    //console.log(newDark);
  };

  useEffect(() => {
    setLight(!isBlack)
    //console.log(isBlack)
    //console.log("light", light);
  }, [isBlack,light]);

  return (
    <span className="switcher switcher-1">
      <input
        type="checkbox"
        id="switcher-1"
        checked={light}
        onChange={handleSwitchChange}
      />
      <label></label>
    </span>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setTheme: (val) => dispatch(setTheme(val)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
