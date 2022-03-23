import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Disponbilidades from "./pages/Disponibilidades";
import Galeria from "./pages/Galeria";

import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Unbox from "./pages/Unbox";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jogos" element={<Jogos />}></Route>
        <Route path="/galeria" element={<Galeria />}></Route>
        <Route path="/unbox" element={<Unbox />}></Route>
        <Route path="/disponibilidade" element={<Disponbilidades />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
