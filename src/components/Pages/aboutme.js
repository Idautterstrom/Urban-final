import React from "react";
import styled from "styled-components";
import Quotation from "../img/Quotation.png";
import PictureUrb from "../img/urban.JPG";

const Page = styled.div`
  display: grid;
  grid-template-columms: 1fr;
  padding: 40px;
`;

const Heading = styled.h1`
  font-family: "DM Serif Display", serif;
  color: #264143;
  margin-bottom: 50px;
`;

const References = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    margin-left: 350px;
    margin-right: 50px;
  }
`;

const TestimonalBox = styled.div`
  background-color: #eddcd9;
  padding: 20px;
  border-radius: 2px;
  position: relative;
`;

const QuotationSign = styled.div`
  display: flex;
  height: 20px;
`;

const Citat = styled.p`
  font-size: 12px;
  text-align: left;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 8px;
  text-align: left;
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

export const Aboutme = () => {
  return (
    <section>
      <Page>
        <Picture>
          <img src={PictureUrb} alt="Urban" />
        </Picture>
        <Heading>Testimonals</Heading>
        <References>
          <TestimonalBox>
            <QuotationSign>
              <img src={Quotation} alt="Quotation" />
            </QuotationSign>

            <Citat>
              The management team has taken several important steps. You have
              managed to bring out the best in us and manage to get everyone on
              the journey to develop as a team. You bring energy and knowledge
              in areas where we lack expertise. I am so incredibly happy and
              grateful for what you contribute and that we have found a good
              teamwork in this. You inspire!
            </Citat>

            <Text>Anna, Site Manager</Text>
          </TestimonalBox>
          <TestimonalBox>
            <QuotationSign>
              <img src={Quotation} alt="Quotation" />
            </QuotationSign>

            <Citat>
              Med respekt för mina personliga egenskaper och intressen har du
              med stort engagemang uppmuntrat mig att våga pröva nya
              angreppssätt och beteenden. Din humor och soligt värmländska
              sinne, har skapat förtroende och gjort resan mot en bättre
              självinsikt lättare.
            </Citat>

            <Text>Elisabeth, Department Manager</Text>
          </TestimonalBox>
          <TestimonalBox>
            <QuotationSign>
              <img src={Quotation} alt="Quotation" />
            </QuotationSign>

            <Citat>
              Urban has given me great HR consulting support. I’m so grateful
              for the generosity I received in terms of wise advice just as
              great coaching enabling me to work out solutions by myself. Hope
              we get a chance to work together again soon!
            </Citat>

            <Text>Ebba, People &amp; Culture Consultant</Text>
          </TestimonalBox>
          <TestimonalBox>
            <QuotationSign>
              <img src={Quotation} alt="Quotation" />
            </QuotationSign>

            <Citat>
              Jag hörde ju vad du sa men jag behövde verkligen göra resan och
              har förstått på riktigt först nu vad du menade och betydelsen av
              det. En del saker tänkte jag att det skulle ta mycket av min tid,
              men ser nu hur mycket annat som blir gjort och kommer på plats
              eftersom medarbetarna är så mycket mer engagerade och motiverade.
            </Citat>

            <Text>Elisabeth, Manager</Text>
          </TestimonalBox>
        </References>
      </Page>
    </section>
  );
};

export default Aboutme;
