import axios from 'axios';
// Importa a biblioteca `axios`, que é usada para fazer requisições HTTP de maneira fácil e eficiente no JavaScript.

export const api = axios.create({
    // Exporta uma instância personalizada do `axios` chamada `api`, para ser usada em outras partes do aplicativo.
    
    baseURL: 'https://api.github.com'
    // Define a URL base para todas as requisições HTTP realizadas com essa instância. No caso, todas as requisições feitas com `api` irão começar com 'https://api.github.com', que é a API pública do GitHub.
})
