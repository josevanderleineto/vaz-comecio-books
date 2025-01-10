/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;
  background-color: rgb(110, 251, 254);
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 280px;
  height: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 500px; /* Ajuste para permitir mais espaço na versão mobile */
  }
  @media (max-width: 480px) {
    width: 220px;
    height: 550px; /* Maior altura em dispositivos móveis */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  color: #333;
  font-size: 1.2em;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9em;
  margin-bottom: 15px;
  overflow: auto;
  max-height: 100px;
  flex-grow: 1;
  white-space: normal;
  text-overflow: ellipsis;
  line-height: 1.4;
  @media (max-width: 768px) {
    max-height: 120px; /* Ajuste para maior visibilidade em telas pequenas */
  }
  @media (max-width: 480px) {
    max-height: 150px; /* Maior altura em dispositivos móveis */
  }
`;

const Price = styled.p`
  color: #e74c3c;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Button = styled.a`
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;
  width: 80%;
  text-align: center;
  margin-top: 10px;
  &:hover {
    background-color: #128c7e;
  }
`;

const SalesPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://api-books-1.onrender.com/livros");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      {books.map(([id, title, author, description, quantity, price, imageUrl]) => (
        <Card key={id}>
          <Image src={imageUrl} alt={title} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>R$ {price}</Price>
          <Button
            href={`https://wa.me/55[SEU_NÚMERO]?text=Olá!%20Gostaria%20de%20comprar%20o%20livro%20${encodeURIComponent(
              title
            )}`}
            target="_blank"
          >
            Comprar no WhatsApp
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default SalesPage;
