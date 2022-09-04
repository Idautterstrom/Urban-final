import React from "react";
import styled from "styled-components";
import logo from "../components/img/ida-logo.jpeg";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: auto;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.a`
  display: flex;
  height: 20px;
  margin-top: -10px;
`;

const Text = styled.p`
  font-family: "poppins", serif;
  font-size: 12px;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Text>Website made by</Text>
      </Container>
      <Container>
        <Logo href="https://www.instagram.com/idaswebdev/?hl=en">
          {<img src={logo} alt="Logo" />}
        </Logo>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
