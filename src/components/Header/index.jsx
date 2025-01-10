/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaWhatsapp } from 'react-icons/fa';  // Importando ícones

const Header = styled.header`
    padding: 20px 20px;
    background-color: rgb(4, 74, 75);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

`;

const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`;

const MenuIcon = styled.div`
    font-size: 2em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlideMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: rgb(4, 74, 75);
    color: white;
    padding: 20px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    z-index: 1000;
`;

const MenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const Link = styled.a`
    color: white;
    padding: 10px 0;
    text-decoration: none;
    font-size: 1.2em;

    &:hover {
        background-color: #555;
    }
`;

const WhatsAppIcon = styled(FaWhatsapp)`
    color: #25D366;  // Cor verde do WhatsApp
    margin-right: 8px;  // Espaço entre o ícone e o texto
`;

const Overlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const HeaderComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <Header>
                <Logo>Vaz Comércio</Logo>
                <MenuIcon onClick={toggleMenu}>
                    <FaBars />
                </MenuIcon>
                <SlideMenu isOpen={menuOpen}>
                    <MenuLinks>
                        <Link href="https://wa.me/1234567890">
                            <WhatsAppIcon /> Katharina
                        </Link>
                        <Link href="https://wa.me/0987654321">
                            <WhatsAppIcon /> Vanderlei Neto
                        </Link>
                        <Link href="/new-books">Ver livros que ainda não estão no catálogo</Link>
                    </MenuLinks>
                </SlideMenu>
            </Header>
            <Overlay isOpen={menuOpen} onClick={closeMenu} />
        </>
    );
};

export default HeaderComponent;
