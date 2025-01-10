// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

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

const FooterLink = styled.a`
    color:rgb(107, 171, 240);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Todos os direitos reservados a Vaz Comércio</FooterText>
            <FooterText>
                Feito por <FooterLink href="https://github.com/vanderleineto">Vanderlei Neto</FooterLink>
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;