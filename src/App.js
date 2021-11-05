import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Suggest from "./pages/Suggest"
import "./global.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suggest" element={<Suggest />} />
    </Routes>
  );
}

export default App;
