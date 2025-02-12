import React from "react";
import styled from "styled-components";

// Estilização do componente
const ApresentationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px;
  background-color: var(--primary); /* Fundo escuro */
  color: var(--neutralLigth); /* Texto claro */
  min-height: 100vh; /* Cobrir a altura da tela */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 20px; /* Bordas arredondadas */
    box-shadow: 0 10px 30px rgba(251, 82, 49, 0.5); /* Sombra laranja */
    transform: perspective(1000px) rotateY(-10deg); /* Efeito 3D */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: perspective(1000px) rotateY(0deg); /* Efeito ao passar o mouse */
      box-shadow: 0 15px 40px rgba(251, 82, 49, 0.7); /* Sombra mais intensa */
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const SloganContainer = styled.div`
  flex: 1;
  padding: 0 40px;
  position: relative;

  h1 {
    font-size: 3rem; /* Tamanho grande para impacto */
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--neutralLigth); /* Texto claro */
    font-family: 'League Gothic', sans-serif; /* Fonte moderna */
    text-transform: uppercase; /* Letras maiúsculas */
    letter-spacing: 3px; /* Espaçamento entre letras */
    text-shadow: 0 5px 15px rgba(251, 82, 49, 0.5); /* Sombra laranja */
  }

  p {
    font-size: 1.5rem;
    color: var(--neutralLigth); /* Texto claro */
    line-height: 1.6;
    opacity: 0.9; /* Leve transparência */
    text-shadow: 0 3px 10px rgba(251, 82, 49, 0.4); /* Sombra laranja */
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--secondary); /* Borda laranja */
    border-radius: 20px;
    z-index: -1;
    box-shadow: 0 10px 30px rgba(251, 82, 49, 0.3); /* Sombra laranja */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

// Componente Apresentation
const Apresentation = ({ logoUrl }) => {
  return (
    <ApresentationContainer>
      <LogoContainer>
        <img
          src={logoUrl || "https://via.placeholder.com/400"} // Imagem padrão caso não seja passada
          alt="Logo da Serralheria"
        />
      </LogoContainer>
      <SloganContainer>
        <h1>Metal com precisão, qualidade em cada detalhe.</h1>
        <p>
          Oferecemos serviços de serralheria com excelência, garantindo durabilidade e
          sofisticação para o seu projeto.
        </p>
      </SloganContainer>
    </ApresentationContainer>
  );
};

export default Apresentation;