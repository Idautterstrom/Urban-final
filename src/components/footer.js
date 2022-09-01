import React from "react";
import styled from "styled-components";
import logo from "../components/img/ida-logo.jpeg";

const Logo = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 15px;
    padding: 10px;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  display: none;
  @media (min-width: 768px) {
    font-size: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: -5px;
  }
`;

export const Footer = () => {
  return (
    <section>
      <div>
        <Text>Website made by</Text>
        <Logo>{<img src={logo} alt="Logo" />}</Logo>
      </div>
    </section>
  );
};

export default Footer;
