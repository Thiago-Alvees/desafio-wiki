import React from 'react';
// Importa a biblioteca React, necessária para criar componentes React.

import { InputContainer } from './styles';
// Importa o componente de estilo `InputContainer` de um arquivo separado de estilos. Esse componente provavelmente aplica estilos ao input que será renderizado.

function Input({ value, onChange }) {
  // Define o componente `Input`, que recebe duas propriedades (props): `value` e `onChange`.

  return (
    <InputContainer>
        {/* Renderiza o elemento `input` dentro do contêiner estilizado `InputContainer`. */}
        <input 
          value={value}
          // O valor do input será controlado pela prop `value`, que é passado como argumento para o componente.

          onChange={onChange}
          // Define a função `onChange` como o manipulador de eventos. Isso permite que o componente pai controle as mudanças no valor do input, ou seja, quando o usuário digita algo, essa função é chamada para atualizar o valor.
        />
    </InputContainer>
  );
}

export default Input;
// Exporta o componente `Input` para ser usado em outros arquivos.
