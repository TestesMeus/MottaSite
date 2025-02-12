import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// Estilização da galeria
const GaleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  gap: 16px; /* Espaço entre as imagens */
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 coluna em telas muito pequenas */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
  color: var(--neutralLigth);
`;

// Componente Galery
const Galery = () => {
  const [images, setImages] = useState([]); // Lista de imagens
  const [page, setPage] = useState(1); // Página atual
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [hasMore, setHasMore] = useState(true); // Verifica se há mais imagens

  // Função para buscar as imagens do GitHub
  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) return; // Evita chamadas duplicadas
    setLoading(true);

    try {
      const repoOwner = "TestesMeus"; // Usuário do GitHub
      const repoName = "ImgsMotta"; // Nome do repositório
      const perPage = 9; // Número de fotos por página
      const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents?per_page=${perPage}&page=${page}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.length > 0) {
        const newImages = data
          .filter(
            (file) =>
              file.type === "file" && file.name.match(/\.(jpg|jpeg|png|gif)$/i)
          ) // Filtra apenas imagens
          .map((file) => file.download_url); // Pega as URLs das imagens

        setImages((prevImages) => [...prevImages, ...newImages]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); // Não há mais imagens para carregar
      }
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  // Efeito para carregar as imagens ao montar o componente e ao mudar a página
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Intersection Observer para scroll infinito
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchImages();
        }
      },
      { threshold: 1.0 }
    );

    const target = document.querySelector("#load-more");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [fetchImages, hasMore]);

  return (
    <>
      <GaleryContainer>
        {images.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} alt={`Imagem ${index + 1}`} />
        ))}
      </GaleryContainer>
      {loading && <Loading>Carregando mais fotos...</Loading>}
      {!hasMore && <Loading>Você viu todas as fotos!</Loading>}
      <div id="load-more" style={{ height: "10px" }}></div>{" "}
      {/* Alvo para o Intersection Observer */}
    </>
  );
};

export default Galery;
