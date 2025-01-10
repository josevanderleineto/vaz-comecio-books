// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(4, 74, 75);
  text-align: center;
  padding: 10px 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 20px;
  color: #fff;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Todos os direitos reservados a Vaz Comércio</FooterText>
  
    </FooterContainer>
  );
};

export default Footer;
