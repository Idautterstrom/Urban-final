import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Aboutme from "./components/Pages/aboutme";
import Consulting from "./components/Pages/consulting";
import Leadership from "./components/Pages/leadership";
import Employee from "./components/Pages/employee";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
