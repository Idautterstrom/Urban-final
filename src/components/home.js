import React from "react";
import "./styles/home.css";
import styled from "styled-components";
import Contact from "./contact";
import Form from "./form";
import profilePic from "./img/profilbild2.JPG";

const Name = styled.h1`
  font-size: 30px;
  font-family: "DM Serif Display", serif;
  color: whitesmoke;
`;

const Role = styled.h2`
  font-size: 25px;
  color: whitesmoke;
`;

const Pitch = styled.p`
  font-size: 20px;
  color: whitesmoke;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

const ProfilePic = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    left: 45%;
    top: 30%;
    height: 200px;
    border: solid 10px #eddcd9;
    border-radius: 2px;
  }
`;

const About = styled.p`
  font-size: 12px;
  text-align: left;
  width: 60%;
  margin-left: 20%;
`;

const Citat = styled.p`
  font-size: 20px;
  font-family: "DM Serif Display", serif;
  color: #264143;
  &:hover {
    font-weight: bold;
  }
`;

export const Home = () => {
  return (
    <div className="container">
      <header className="header-container">
        <div className="profile-image"></div>
        <div className="header-text">
          <Name>Urban Rhodin</Name>
          <Role>
            Senior Leadership developer &amp; coach, <br></br>HR &amp;
            Management consultant
          </Role>
          <Pitch>
            Helping companies, teams and individuals develop their full
            potential and achieve their goals.
          </Pitch>
        </div>
      </header>
      <section className="about-container">
        <div className="about">
          <ProfilePic>
            <img src={profilePic} alt="ProfilePic" />
          </ProfilePic>
          <h2 className="small-header">About me</h2>
          <div>
            <About>
              With my extensive experience and demonstrated track record in
              international HR executive roles, I started my own business in
              2021 offering HR &amp; Management consulting and Leadership
              development to support organizations, teams, and individuals to
              unleash potential and achieve goals. I'm genuinely passionate
              about what I do, and bring positive energy to all my clients.
            </About>
            <About>
              I'm a certified leadership coach, have a B.Sc. in Human Resources
              and Labor relations, as well as many years of experience from
              various manager &amp; executive roles, and leadership teams in
              different industries &amp; companies.
            </About>
            <About>
              I'm also certified in many different tools I use based on the
              needs both for individual and team development in my coaching and
              consulting. Examples of what I have in my toolbox; Leadership
              Effectiveness Analyses (LEA), Management Team Assessment Model
              (MTAM), Belbin Team Roles, PulsAnalys, TalentQ / Korn Ferry
              Assessment, Feedback &amp; Coaching.
            </About>
          </div>
        </div>
        <div className="client-container">
          <a href="/aboutme" className="ref-container">
            <Citat>
              "You have managed to bring out the best in us and to get everyone
              on the journey to develop as a team. You bring energy and
              knowledge in areas where we lack expertise. You inspire!"
            </Citat>
            <p>Anna, Site Manager</p>
          </a>
        </div>
      </section>
      <section className="second-container">
        <div className="contact">
          <h2 className="small-header">Contact</h2>
          <div className="contact-container">
            <Contact />
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
