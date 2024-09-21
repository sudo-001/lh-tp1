import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import NavBar from "./components/global/NavBar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Feature from "./pages/Feature";
import Testimonial from "./pages/Testimonial";
import Product from "./pages/Product";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Faq from "./pages/Faq";
import Details from "./pages/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <BrowserRouter>
      <div className="px-[5%] bg-[#F5F7FA]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/" element={<Service />} />
          <Route path="/feature/" element={<Feature />} />
          <Route path="/testimonial/" element={<Testimonial />} />
          <Route path="/product/" element={<Product />} />
          <Route path="/faq/" element={<Faq />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/signin/" element={<Signin />} />
          <Route path="/signup/" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
