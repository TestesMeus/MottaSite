import React from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";


const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
`;

// Estilização do header
const HeaderOptions = styled.header`
  background-color: var(--primary);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  margin: 0 100px;
`;

const NameLogo = styled.div`
  text-align: center;
`;

const NamePage = styled.h1`
  color: var(--secondary);
  font-size: 3rem; 
  font-weight: 400; 
  letter-spacing: 4px; 
  text-transform: uppercase; 
  margin: 0; 
  font-family: 'League Gothic', sans-serif; 
  position: relative; 
  display: inline-block;
  line-height: 1; 


  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: var(--secondary);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const SubNamePage = styled.h3`
  color: var(--secondary);
  font-size: 1.5rem; 
  font-weight: 400; 
  letter-spacing: 2px; 
  margin: 0; 
  font-family: 'League Gothic', sans-serif; 
  opacity: 0.9; 
  text-transform: uppercase; 
`;

const ContactButton = styled.a`
  background-color: #cf245f;
  background-image: linear-gradient(to bottom right, #fb5231, #ffd166);
  border: 0;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: var(--primary);
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.125rem; 
  font-weight: 600;
  line-height: 1.75rem; 
  padding: 1rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: transform 0.2s ease, box-shadow 0.2s ease; 

  &:hover {
    transform: translateY(-2px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }

  &:active {
    transform: translateY(0); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;


const Header = () => {
  return (
    <>
      <HeaderOptions>
        <NameLogo>
          <NamePage>MOTTA</NamePage>
          <SubNamePage>SERRALHERIA</SubNamePage>
        </NameLogo>
        <ContactButton href="#contato">
          <FaPhone />   Contato
        </ContactButton>
      </HeaderOptions>
    </>
  );
};

export default Header;
