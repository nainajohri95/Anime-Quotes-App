import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Description from "./pages/Description";
import Anime from "./pages/Anime";
import Create from "./pages/Create";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactUs from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Category />} />
        <Route path="/description" element={<Description />} />
        <Route path="/constactUs" element={<ContactUs />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
