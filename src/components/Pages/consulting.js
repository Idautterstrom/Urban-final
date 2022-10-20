import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: grid;
  grid-template-columms: 1fr;
`;

const Heading = styled.h1`
  font-family: "DM Serif Display", serif;
  color: #264143;
`;

const HR = styled.div`
  padding: 40px;
  background-color: #d9d6cf;
`;

const Mng = styled.div`
  padding: 40px;
`;

const InfoText = styled.p`
  text-align: left;
`;

const Div = styled.div`
  padding: 40px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-left: 200px;
    margin-right: 200px;
  }
`;

export const Consulting = () => {
  return (
    <section>
      <Page>
        <Div>
          <Info>
            <HR>
              <Heading>HR consulting</Heading>
              <InfoText>
                With my extensive experience in HR, I offer everything from
                advising calls to fixed-term project- and interim assignments. I
                can take lead and give support within the entire field of HR,
                from hire to fire, and that is everything from talent
                acquisition to people &amp; organizational development, people
                strategy, strategic competence and resource planning,
                remuneration, culture and values work, cross-culture management,
                restructuring, downsizing and more.
              </InfoText>
            </HR>
            <Mng>
              <Heading>Management consulting</Heading>
              <InfoText>
                With my vast experience from international industrial
                investments, greenfield projects, divestments, mergers &amp;
                acquisitions, I support top management and executives with
                expertise in strategic analysis and change management,
                designing, leading, implementing transition/efficiency programs,
                transformation processes, acquisitions, mergers, divestments.
              </InfoText>
            </Mng>
          </Info>
        </Div>
      </Page>
    </section>
  );
};

export default Consulting;
