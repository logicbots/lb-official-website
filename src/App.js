import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from './screens/LandingPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
