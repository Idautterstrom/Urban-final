import React from "react";
import styled from "styled-components";
import ProPicture from "../img/urban2.JPG";

const Page = styled.div`
  display: grid;
  grid-template-columms: 1fr;
`;

const About = styled.div`
  padding: 40px;
  background-color: #eddcd9;
`;

const Heading = styled.h1`
  font-family: "DM Serif Display", serif;
  color: #264143;
`;

const HeadingSmall = styled.h3`
  display: flex;
  text-align: left;
`;

const Text = styled.p`
  @media (min-width: 768px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-left: 400px;
    margin-right: 100px;
  }
`;

const InfoText = styled.p`
  text-align: left;
`;

const Div = styled.div`
  padding: 40px;
`;

const Picture = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    height: 500px;
    border: solid 10px #eddcd9;
    border-radius: 2px;
  }
`;

export const Leadership = () => {
  return (
    <section>
      <Page>
        <About>
          <Heading>Leadership development</Heading>
          <Text>
            Whatever you aspire to achieve as a company – and whether you will
            be successful or not – depends a lot on the quality in leadership
            throughout the organization, having such a huge impact on
            everything! Leadership is key to successfully develop a healthy
            organization, winning culture and an environment where employees
            thrive and can develop their full potential, positively impacting on
            innovation, efficiency, productivity, profitability and competitive
            advantage!
          </Text>
          <Picture>
            <img src={ProPicture} alt="Urban" />
          </Picture>
        </About>
        <Div>
          <Heading>What I offer</Heading>
          <Info>
            <div>
              <HeadingSmall>
                Inspirational lectures, tailor-made trainings &amp; development
                program
              </HeadingSmall>
              <InfoText>
                I adapt and tailor lectures, webinars, trainings (both digital
                and IRL) and programs (IRL mainly) for established/experienced
                leaders, newly appointed and emerging people leaders.
              </InfoText>
              <HeadingSmall>Leadership team development</HeadingSmall>
              <InfoText>
                All leadership teams are unique, just as their situation,
                setting and context, why I always tailor and offer leadership
                team development based on the specific needs. Common elements
                often involve processing around the leadership team's mission,
                purpose, and goals, developing relationships, collaboration,
                trust, openness, communication, team dynamics, working methods
                and efficiency.
              </InfoText>
            </div>

            <div>
              <HeadingSmall>Leadership coaching</HeadingSmall>
              <InfoText>
                To successfully lead others, you must first be able to lead
                yourself. Coaching is powerful and supports people to achieving
                what they aspire for and becoming who they want to be – unlock
                potential – by building awareness, empower choice which leads to
                change.
              </InfoText>
              <InfoText>
                As a coach, I help you to achieving your personal best and to
                produce the results you want by asking the right questions,
                listening, and using various coaching techniques helping you to
                insights and move on. It is always up to you to choose what the
                coaching conversations should be about and as a coach I assist
                you to, by yourself and with your own resources and strengths,
                set goals, find strategies and ways of action to reach where you
                want, build up your own capacity to make a permanent change.
              </InfoText>
              <InfoText>
                I always offer a free and unconditional first call and if you
                want to proceed with a coaching process, we will agree on the
                arrangements and forms for this. The leadership coaching can be
                carried out both digitally and in the form of physical meetings
                and I will help you during the process to reach an increased
                self-awareness, strengthen your self-leadership, understanding
                of others and how you influence others, enabling you to
                successfully lead both yourself and others.
              </InfoText>
            </div>
          </Info>
        </Div>
      </Page>
    </section>
  );
};

export default Leadership;
