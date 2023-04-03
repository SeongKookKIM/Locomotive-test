import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Foot from "./Pages/Foot";

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/foot" element={<Foot />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Navigate() {
  const navi = useNavigate("");

  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              navi("/");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navi("/about");
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navi("/foot");
            }}
          >
            Foot
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default App;
