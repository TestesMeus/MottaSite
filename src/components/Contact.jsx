import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

// Estilização do botão flutuante
const FloatingButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #cf245f;
  background-image: linear-gradient(to bottom right, #fb5231, #ffd166);
  border: 0;
  border-radius: 50%; /* Botão circular */
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 1000; /* Garante que o botão fique acima de outros elementos */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Componente Contact
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar a visibilidade do botão

  // Efeito para observar a visibilidade do ContactButton no Header
  useEffect(() => {
    const contactButton = document.querySelector("#contact-button");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se o ContactButton não estiver visível, mostra o botão flutuante
          setIsVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // 10% do elemento visível
    );

    if (contactButton) {
      observer.observe(contactButton);
    }

    return () => {
      if (contactButton) {
        observer.unobserve(contactButton);
      }
    };
  }, []);

  return (
    <>
      {isVisible && (
        <FloatingButton href="https://wa.me/5521993877515?text=Oi%20eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA">
          <FaPhone size={24} />
        </FloatingButton>
      )}
    </>
  );
};

export default Contact;