import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Manage from "./Manage";
import Navbar from "./Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/manage" element={<Manage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
