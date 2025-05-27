# IHC Quest: O Desafio da Usabilidade

Este é um jogo de tabuleiro web interativo onde você assume o papel de um Analista de IHC (Interação Humano-Computador), viajando por diferentes empresas para resolver problemas de usabilidade na forma de quizzes de múltipla escolha.

## 🌟 Visão Geral

O "IHC Quest" foi criado para ser uma ferramenta divertida e educativa, simulando desafios reais de usabilidade em um ambiente gamificado. O objetivo é testar e aprimorar seus conhecimentos em IHC enquanto se diverte resolvendo problemas em diversas empresas.

## ✨ Funcionalidades

* **Tabuleiro Interativo:** Um mapa visual com diferentes empresas que representam seus desafios.
* **Avatar do Analista:** Seu personagem se move pelo tabuleiro ao selecionar uma empresa.
* **Problemas Aleatórios:** Cada empresa tem problemas de IHC que aparecem aleatoriamente, um por vez.
* **Quizzes de Múltipla Escolha:** Resolva os problemas respondendo a quizzes com cenários e perguntas reais.
* **Feedback Visual:** Receba feedback instantâneo e animado (Correto/Incorreto) após cada resposta.
* **Progresso Visual:** Empresas com todos os problemas resolvidos são marcadas com um `✔` (checkmark).
* **Pontuação:** Acumule pontos ao resolver os desafios corretamente.
* **Modal de Introdução:** Explicação das regras do jogo no início para novos jogadores.

## 🚀 Tecnologias Utilizadas

* **Frontend:** React.js
    * **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`, `useCallback`)
    * **Modularização:** Custom Hooks (`useGameLogic`) para concisão e organização.
* **Estilização:** CSS puro com animações.

## 🛠️ Instalação e Execução

Para configurar e rodar o projeto em sua máquina local:

1.  **Clone o Repositório** (se estiver em um repositório Git) ou faça o download dos arquivos.
    ```bash
    git clone git@github.com:souzza-matheus/ihc-quiz.git
    cd ihc-quest-game
    ```
    (Se você criou o projeto com `create-react-app`, você já deve estar no diretório do projeto.)

2.  **Instale as Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```


3.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O aplicativo será aberto no seu navegador padrão em `http://localhost:3000`.


## 💡 Como Contribuir

Contribuições são bem-vindas! Se você tiver ideias para novos problemas de IHC, empresas, funcionalidades ou melhorias de código, sinta-se à vontade para:

1.  Fazer um `fork` do projeto.
2.  Criar uma nova `branch` (`git checkout -b feature/sua-feature`).
3.  Implementar suas mudanças.
4.  Fazer um `commit` de suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
5.  Fazer um `push` para a `branch` (`git push origin feature/sua-feature`).
6.  Abrir um `Pull Request`.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Se tiver alguma dúvida ou sugestão, entre em contato

---