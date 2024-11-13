import React from 'react';
// Importa a biblioteca React, necessária para criar componentes React.

import { ButtonContainer } from './styles';
// Importa o componente de estilo `ButtonContainer` de um arquivo de estilos separado. Esse componente provavelmente aplica estilos ao botão que será renderizado.

function Button({ onClick }) {
  // Define o componente `Button`, que recebe a prop `onClick` como argumento.

  return (
    <ButtonContainer onClick={onClick}>
       {/* Renderiza o componente `ButtonContainer` com a função `onClick` passada como uma propriedade.
           O conteúdo do botão será o texto "Buscar". */}
       Buscar
    </ButtonContainer>
  );
}

export default Button;
// Exporta o componente `Button` para que possa ser utilizado em outros arquivos.
