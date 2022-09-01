import React from "react";
import "./styles/home.css";
import styled from "styled-components";
import logo from "../components/img/UrbanLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    border: 1px solid black;
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  padding: 5px 12px 5px 12px;
  color: #433e49;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: green;
  }
`;

const Logo = styled.div`
  display: flex;
  height: 35px;
  padding: 5px;
  @media (min-width: 768px) {
    height: 60px;
  }
`;

const Toggle = styled.span`
  position: absolute;
  justify-content: right;
  top: 10px;
  right: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <section>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Toggle id="js-navbar-toggle">
          <FontAwesomeIcon icon={faBars} />
        </Toggle>

        <MainNav id="js-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutme">Testimonals</Link>
          </li>
          <li>
            <Link href="/consulting">HR &amp; Management consulting</Link>
          </li>
          <li>
            <Link href="/leadership">Leadership development</Link>
          </li>
          <li>
            <Link href="/employee">People &amp; Team development</Link>
          </li>
          <li>
            <Link href="/">Contact me</Link>
          </li>
        </MainNav>
      </Nav>
    </section>
  );
};

export default Navbar;
