import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Testimonials from "./components/Pages/testimonials";
import Consulting from "./components/Pages/consulting";
import Leadership from "./components/Pages/leadership";
import Employee from "./components/Pages/employee";

const Body = styled.div`
  @media (min-width: 768px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  );
};
