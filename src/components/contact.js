import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const Contact = () => {
  return (
    <section>
      <div>
        <Text>Rhodin Consulting &amp; Coaching AB</Text>
        <Text>+46 70 564 56 93</Text>
        <Text>urban.rhodin@gmail.com</Text>
        <Text>Sankt Eriksgatan 12</Text>
        <Text>112 39 Stockholm</Text>
      </div>
    </section>
  );
};

export default Contact;
