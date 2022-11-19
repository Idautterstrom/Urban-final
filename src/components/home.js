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
    border: solid 10px #d9d6cf;
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
  text-decoration: none;
`;

export const Home = () => {
  return (
    <div className="container">
      <header className="header-container">
        <div className="profile-image"></div>
        <div className="header-text">
          <Name>Urban Rhodin</Name>
          <Role>
            Leadership developer &amp; coach, <br></br>HR &amp; Management
            consultant
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
              I’m a passionate consultant and coach who loves to optimize people
              and organizations! I bring my never ending passion and positive
              energy to all my clients and in everything I do.
            </About>
            <About>
              After 30 years in in the corporate world and having been in
              several international HR roles, I’ve gained extensive experience
              and insight into what makes people and organizations “tick”.
            </About>
            <About>
              To build on my experience and fully unlock my passion for what
              makes me “tick”, I started my own business in 2021 offering
              services within Leadership development, HR- &amp; Management
              Consulting to support organizations, teams, and individuals to
              unleash potential and achieve goals.
            </About>
            <About>
              I'm a certified leadership coach, have a B.Sc. in Human Resources
              and Labor relations, many years’ experience from various
              leadership roles and leadership teams in different industries
              &amp; companies.
            </About>
            <About>
              I'm certified in many different tools I use based on the needs
              both for individual and team development in my coaching and
              consulting. Examples of what I have in my toolbox; Leadership
              Effectiveness Analyses (LEA), Management Team Assessment Model
              (MTAM), Belbin Team Roles, PulsAnalys, TalentQ / Korn Ferry
              Assessment, Feedback &amp; Coaching.
            </About>
          </div>
        </div>
        <div className="client-container">
          <a href="/testimonials" className="ref-container">
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
