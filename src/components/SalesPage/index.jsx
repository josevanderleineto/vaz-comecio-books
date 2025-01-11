// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Estilização dos componentes
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;
  background-color: rgb(110, 251, 254);
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 80px; /* Espaço extra para evitar cortes */
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px; /* Menor espaço interno */
  width: 350px; /* Largura reduzida */
  height: 500px; /* Altura reduzida */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 220px; /* Ajuste para tablets */
    height: 500px; /* Altura ajustada */
  }

  @media (max-width: 480px) {
    width: 260px; /* Ajuste para celulares */
    height: 570px; /* Altura maior para celulares */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px; /* Reduzido para caber melhor */
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  color: #333;
  font-size: 0.8rem; /* Tamanho reduzido */
  margin: 10px 0;
  line-height: 1.4;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.6rem; /* Descrição menor */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Exibe até 4 linhas */
  -webkit-box-orient: vertical;
`;

const Quantity = styled.p`
  font-size: 0.9em; /* Texto menor para quantidade */
  color: #555;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #e74c3c;
  font-size: 1.1em; /* Preço levemente destacado */
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled.a`
  background-color: #25d366;
  color: white;
  padding: 10px 20px; /* Botão menor */
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9em; /* Texto menor no botão */
  width: 85%; /* Ajuste de largura */
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
        const response = await axios.get("https://api-books-vaz.onrender.com/livros");
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Bem-vindo! Conheça nossa coleção de livros sobre saúde!
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px", maxWidth: "800px", fontSize: "1.1em" }}>
        Aqui você encontra livros de medicina e áreas da saúde em geral. Todos são usados, mas estão bem conservados, 
        e nossos preços são acessíveis para garantir que você encontre o que precisa sem pesar no bolso!
      </p>
      <CardsWrapper>
        {books.map((book) => (
          <Card key={book._id}>
            <Image src={book.url_imagem} alt={book.titulo} />
            <Title>{book.titulo}</Title>
            <Description>{book.descricao}</Description>
            <Quantity>Quantidade: {book.quantidade}</Quantity>
            <Price>R$ {book.valor.toFixed(2)}</Price>
            <Button
              href={`https://wa.me/55[SEU_NÚMERO]?text=Olá!%20Gostaria%20de%20comprar%20o%20livro%20${encodeURIComponent(
                book.titulo
              )}`}
              target="_blank"
            >
              Comprar no WhatsApp
            </Button>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default SalesPage;
