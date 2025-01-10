// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Estilização dos componentes
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  max-height: 100%;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;
  background-color: rgb(110, 251, 254);
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 350px; /* Largura do card */
  height: 550px; /* Altura do card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 320px; /* Ajuste para tablets */
    height: 600px; /* Altura maior para telas menores */
  }

  @media (max-width: 480px) {
    width: 300px; /* Ajuste para celulares */
    height: 650px; /* Altura maior para celulares */
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
  font-size: 1.2em; /* Título maior */
  margin: 10px 0;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Description = styled.p`
  color: #666;
  font-size: 1em; /* Descrição maior */
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Exibe até 5 linhas */
  -webkit-box-orient: vertical;
`;

const Quantity = styled.p`
  font-size: 1em; /* Texto maior para quantidade */
  color: #555;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #e74c3c;
  font-size: 1.2em; /* Preço mais destacado */
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled.a`
  background-color: #25d366;
  color: white;
  padding: 12px 25px; /* Botão maior */
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em; /* Texto maior no botão */
  width: 90%; /* Mais largo */
  text-align: center;
  margin-top: 15px;

  &:hover {
    background-color: #128c7e;
  }
`;

// Componente principal
const SalesPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://api-books-1.onrender.com/livros");
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      {books.map((book) => {
        const [id, title, author, description, quantity, price, imageUrl] = book;

        return (
          <Card key={id}>
            <Image src={imageUrl} alt={title} />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Quantity>Quantidade: {quantity}</Quantity>
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
        );
      })}
    </Container>
  );
};

export default SalesPage;
