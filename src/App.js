import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/LandingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import HorizontalScroll from "react-scroll-horizontal";
import { useState } from "react";
import WebPage from "./screens/Webpage";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebPage/>}/>
      </Routes>
    </Router>
    // <div>
    //   <HorizontalScroll style={{ height: `100vh`, width: `100vw` }} reverseScroll={true}>
    //     {[
    //       <div className="page" key={1}>
    //         <LandingPage />
    //       </div>,
    //       <div className="page" key={2}>
    //         <AboutUs />
    //       </div>,
    //     ]}
    //   </HorizontalScroll>
    // </div>
  );
}

export default App;
