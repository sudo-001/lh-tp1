import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import App from "./App";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <BrowserRouter>
      <div className="px-[5%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/signin/" element={<Signin />} />
      </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
