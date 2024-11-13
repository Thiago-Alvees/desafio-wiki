import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  // Função que chama a remoção do repositório
  const handleRemove = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    e.stopPropagation(); // Impede que o clique propague para outros elementos
    handleRemoveRepo(repo.id); // Chama a função de remoção
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>

      {/* Link para visualizar o repositório */}
      <a href={repo.html_url} rel="noreferrer" target="_blank" className="ver">Ver repositório</a>

      {/* Link para remover o repositório */}
      <a href="#" rel="noreferrer" className="remover" onClick={handleRemove}>
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;

