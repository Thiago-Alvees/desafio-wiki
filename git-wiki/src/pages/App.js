import { useState } from 'react';
import GitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {
  // Estado para armazenar o nome do repositório que está sendo buscado
  const [currentRepo, setCurrentRepo] = useState('');
  
  // Estado para armazenar a lista de repositórios já buscados
  const [repos, setRepos] = useState([]);

  // Função assíncrona que realiza a busca de um repositório na API do GitHub
  const handleSearchRepo = async () => {
    try {
      // Chamada à API para buscar o repositório com base no nome fornecido pelo usuário
      const { data } = await api.get(`repos/${currentRepo}`);

      // Verifica se o repositório existe (tem um ID válido)
      if (data.id) {
        // Verifica se o repositório já foi adicionado anteriormente
        const isExist = repos.find(repo => repo.id === data.id);

        // Se o repositório ainda não foi adicionado, adiciona-o à lista
        if (!isExist) {
          setRepos(prev => [...prev, data]);  // Atualiza a lista de repositórios
          setCurrentRepo('');  // Limpa o campo de entrada
          return;
        }
      }

      // Alerta para o caso de o repositório já ter sido adicionado
      alert('Repositório já adicionado');
      
    } catch (error) {
      // Alerta para o caso de o repositório não ser encontrado (erro na API)
      alert('Repositório não encontrado');
    }
  };

  // Função para remover um repositório da lista com base no ID fornecido
  const handleRemoveRepo = (id) => {
    // Filtra a lista de repositórios, removendo aquele com o id fornecido
    const updatedRepos = repos.filter(repo => repo.id !== id);

    // Atualiza o estado com a nova lista filtrada
    setRepos(updatedRepos);
  };

  return (
    <Container>
      {/* Logo do GitHub */}
      <img src={GitLogo} width={72} height={72} alt='github logo' />
      
      {/* Campo de entrada para o nome do repositório */}
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />

      {/* Botão para acionar a busca do repositório */}
      <Button onClick={handleSearchRepo} />

      {/* Renderiza a lista de repositórios adicionados */}
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
