"use strict";

const imagens = [
  "./img/seca.jpg",
  "./img/tempestade-de-areia.jpg",
  "./img/incendio-florestal.jpg",
  "./img/furacao.jpg",
  "./img/erupcao.jpg",
  "./img/tsunami.jpg",
  "./img/terremoto.jpg",
];

// MAP - FILTER - REDUCE -> Declarativa

const criarItem = (urlImagem) => {
  const container = document.querySelector(".galeria-container");

  const novoLink = document.createElement("a");
  novoLink.href = urlImagem;
  novoLink.classList.add("galeria-items");
  novoLink.innerHTML = `<img src="${urlImagem}" alt="mario"></img>`;

  container.appendChild(novoLink);

  //   container.innerHTML += `
  //     <a href="${urlImagem}" class="galeria-items">
  //         <img src="${urlImagem}" alt="mario">
  //     </a>
  //     `;
};

const carregarImagens = () => imagens.forEach(criarItem);

carregarImagens();
