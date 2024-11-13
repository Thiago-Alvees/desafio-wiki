import React from 'react'; 
// Importa a biblioteca React, que é essencial para criar componentes e interfaces de usuário.

import ReactDOM from 'react-dom/client'; 
// Importa a biblioteca ReactDOM, que é usada para renderizar o aplicativo React no DOM (Document Object Model) da web.

import App from './pages/App'; 
// Importa o componente principal `App` da aplicação, localizado na pasta `pages`. Esse é o componente que conterá a lógica e a interface principal da aplicação.

import GlobalStyles from './styles'; 
// Importa o arquivo de estilos globais, que provavelmente define as regras de CSS aplicáveis em toda a aplicação.

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Cria uma raiz de renderização no elemento HTML com o ID 'root', que é o ponto de entrada do aplicativo. Essa raiz será usada para inserir a aplicação React dentro do DOM.

root.render(
  <React.StrictMode>
    <GlobalStyles/> 
    {/* Aplica os estilos globais, garantindo que todas as regras de estilo sejam aplicadas ao componente e seus filhos. */}
    <App /> 
    {/* Renderiza o componente `App`, que representa a aplicação principal. */}
  </React.StrictMode>
);
// O método `render` é utilizado para inserir a estrutura do componente no DOM. O `React.StrictMode` é uma ferramenta para detectar problemas potenciais na aplicação e só é usado em modo de desenvolvimento.
