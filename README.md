# getTime

Este repositório contém um projeto simples em Vanilla JavaScript para exibir a hora atual e consultar a previsão do tempo utilizando a API do OpenWeatherMap.

## Descrição do Projeto

O projeto consiste em uma aplicação web que exibe a hora atual e permite consultar a previsão do tempo de uma cidade específica utilizando a API do OpenWeatherMap. A hora é atualizada a cada segundo sem a necessidade de recarregar a página. As informações de previsão do tempo são exibidas ao usuário após inserir o nome da cidade desejada e clicar em um botão.

### Funcionalidades

- **Exibição da Hora Atual**: Utiliza o JavaScript para exibir a hora atualizada a cada segundo.
- **Consulta de Previsão do Tempo**: Utiliza a API do OpenWeatherMap para obter e exibir a previsão do tempo com base na cidade inserida pelo usuário.
- **Geolocalização**: Obtém automaticamente a previsão do tempo da localização atual do usuário utilizando a API de geolocalização do navegador.

### Configuração do Ambiente de Desenvolvimento

Para executar o projeto localmente:

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.

### Como Usar

1. **Exibição da Hora**: A hora é automaticamente exibida na página principal.
2. **Consulta de Previsão do Tempo**:
   - Insira o nome da cidade desejada no campo de entrada.
   - Clique no botão "Buscar Tempo".
   - Será exibida a previsão do tempo atual para a cidade informada, incluindo temperatura e condições climáticas.
3. **Geolocalização**:
   - Ao abrir a página, o navegador solicitará permissão para acessar a localização do usuário.
   - Caso permitido, a previsão do tempo será exibida automaticamente com base na localização atual.

### Tecnologias Utilizadas

- Vanilla JavaScript
- HTML5
- CSS3

### API Utilizada

- **OpenWeatherMap API**: Utilizada para obter informações de previsão do tempo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para bifurcar (fork) este repositório, criar uma branch com suas alterações e enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

Em caso de dúvidas ou problemas, sinta-se à vontade para abrir uma issue neste repositório.
