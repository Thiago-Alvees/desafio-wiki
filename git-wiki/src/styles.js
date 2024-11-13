
import { createGlobalStyle } from 'styled-components';
// Importa a função `createGlobalStyle` da biblioteca `styled-components`, que permite criar estilos globais para toda a aplicação React.

export default createGlobalStyle`
// Define e exporta os estilos globais que serão aplicados em toda a aplicação.
    *, body{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #22272e;
        color: #FFFFFF;
    }
`
// Esse bloco de código utiliza `styled-components` para definir estilos globais, afetando a aparência de todos os elementos na página. Ele garante um layout consistente sem margens ou padding e aplica um tema escuro com texto branco em toda a aplicação.