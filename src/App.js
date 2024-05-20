import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Home/Common/Navbar";
import Home from "./components/Home/Common/Home";
import About from "./components/About/About";
import Footer from "./components/Home/Common/Footer";
import Login from "./components/Account/Login";
import Getstarted from "./components/Home/Getstarted";
import Howitworks from "./components/Home/Howitworks";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Account/Signup";
import { Modal } from "./components/Home/Modal";
import Userhome from "./components/Project/Userhome";
import Dashboardmain from"./components/Project/Dashboardmain";
import Aboutus from "./components/About/Aboutus";
import Resources  from "./components/About/Resources";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Getstarted" element={<Getstarted />} />
          <Route path="/Howitworks" element={<Howitworks />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Signup" element={<Signup />} />       
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Userhome" element={<Userhome />} />
          <Route path="/Dashboardmain" element={<Dashboardmain />} />     
          <Route path="/Resources" element={<Resources/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
