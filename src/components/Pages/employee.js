import React from "react";
import styled from "styled-components";
import ProPic from "../img/urban3.JPG";

const Page = styled.div`
  display: grid;
  grid-template-columms: 1fr;
`;

const Heading = styled.h1`
  font-family: "DM Serif Display", serif;
  color: #264143;
`;

const Text = styled.p`
  text-align: left;
`;

const Div = styled.div`
  padding: 40px;
  margin: 40px;
  background-color: #d9d6cf;
  @media (min-width: 768px) {
    margin-left: 400px;
    margin-right: 400px;
  }
`;

const ListItem = styled.li`
  list-style-type: circle;
  text-align: left;
  font-size: 10px;
`;

const SmallHeading = styled.h5`
  text-align: left;
`;

const Picture = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    margin-left: 28%;
    margin-top: 13%;
    height: 300px;
    border: solid 10px #ffffff;
    border-radius: 2px;
  }
`;

export const Employee = () => {
  return (
    <section>
      <Page>
        <Div>
          <Picture>
            <img src={ProPic} alt="Urban" />
          </Picture>
          <Heading>People &amp; Team development</Heading>
          <Text>
            Just as leaders need training in good leadership, everyone
            (individual employees and teams) constantly needs to nurture,
            develop knowledge and skills, reflect, and learn to grow to become
            the best version of themselves.
          </Text>
          <Text>
            I offer Inspirational lectures, webinars, tailor-made trainings and
            mentoring, coaching and team development according to wishes and
            needs both digitally and IRL.
          </Text>
          <div>
            <SmallHeading>Examples of seminars and trainings: </SmallHeading>
            <ul>
              <ListItem>Annual appraisals</ListItem>
              <ListItem>One-on-One’s</ListItem>
              <ListItem>Career planning</ListItem>
              <ListItem>Personal and professional development</ListItem>
              <ListItem>Communication</ListItem>
              <ListItem> Feedback culture</ListItem>
              <ListItem>Team development &amp; dynamics</ListItem>
              <ListItem>Change Management</ListItem>
              <ListItem> Meeting culture &amp; effective meetings</ListItem>
              <ListItem>Cross-culture understanding</ListItem>
              <ListItem>Corporate culture &amp; values</ListItem>
              <ListItem>and much more!</ListItem>
            </ul>
          </div>
        </Div>
      </Page>
    </section>
  );
};

export default Employee;
