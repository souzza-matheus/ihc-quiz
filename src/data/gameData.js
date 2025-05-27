export const gameData = {
  companies: [
    {
      id: 'empresa1',
      name: 'Loja de E-commerce "Click Fácil"',
      position: { x: 150, y: 100 }, // Coordenadas no tabuleiro (top, left em pixels)
      icon: '🛒', // Emoji simples para ícone
      problems: [
        {
          id: 'prob1_emp1',
          scenario: 'Usuários estão abandonando o carrinho de compras com frequência na etapa final do checkout.',
          question: 'Qual a melhor ação inicial para investigar e resolver este problema de usabilidade?',
          options: [
            { text: 'Redesenhar completamente a página de produto.', isCorrect: false },
            { text: 'Adicionar mais pop-ups promocionais no checkout.', isCorrect: false },
            { text: 'Realizar testes de usabilidade com usuários reais na etapa de checkout.', isCorrect: true, feedback: 'Parabéns! Testes de usabilidade revelam pontos de dor reais e fornecem insights acionáveis para otimizar o fluxo do checkout.' },
            { text: 'Mudar a cor do botão de finalizar compra.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp1',
          scenario: 'Clientes reclamam que é difícil encontrar o produto desejado devido a muitas categorias e subcategorias.',
          question: 'Qual técnica de IHC pode ajudar a organizar melhor as informações?',
          options: [
            { text: 'Teste A/B com cores de fundo.', isCorrect: false },
            { text: 'Card Sorting com usuários.', isCorrect: true, feedback: 'Excelente! Card Sorting permite entender como os usuários agrupam e categorizam informações, auxiliando na arquitetura da informação.' },
            { text: 'Entrevistas com a equipe de marketing.', isCorrect: false },
            { text: 'Adicionar mais imagens aos produtos.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp1',
          scenario: 'O formulário de cadastro é muito longo e complexo, resultando em muitos erros e desistências.',
          question: 'Como podemos melhorar a usabilidade deste formulário?',
          options: [
            { text: 'Adicionar mais campos para coletar mais dados.', isCorrect: false },
            { text: 'Dividir o formulário em etapas menores com progresso visível.', isCorrect: true, feedback: 'Correto! Dividir formulários longos em etapas torna a tarefa menos intimidante e o progresso visível motiva o usuário a continuar.' },
            { text: 'Usar fontes menores para caber mais informações.', isCorrect: false },
            { text: 'Remover todos os rótulos dos campos.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa2',
      name: 'Startup de Tecnologia "InovAI"',
      position: { x: 450, y: 250 },
      icon: '💻',
      problems: [
        {
          id: 'prob1_emp2',
          scenario: 'A nova funcionalidade de IA é poderosa, mas os usuários não conseguem entender como utilizá-la efetivamente.',
          question: 'Qual a melhor abordagem para melhorar a compreensão da funcionalidade?',
          options: [
            { text: 'Remover a funcionalidade por completo.', isCorrect: false },
            { text: 'Adicionar um tutorial interativo e tooltips contextuais.', isCorrect: true, feedback: 'Acertou! Tutoriais interativos e tooltips fornecem ajuda no momento certo, guiando o usuário no uso de funcionalidades complexas.' },
            { text: 'Aumentar a complexidade da interface.', isCorrect: false },
            { text: 'Ignorar o problema, os usuários aprenderão com o tempo.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp2',
          scenario: 'O aplicativo móvel da startup tem avaliações baixas na loja de aplicativos devido a uma interface confusa.',
          question: 'O que deve ser priorizado para melhorar a interface do aplicativo?',
          options: [
            { text: 'Adicionar mais anúncios no aplicativo.', isCorrect: false },
            { text: 'Realizar uma reestruturação da navegação e simplificação visual.', isCorrect: true, feedback: 'Isso mesmo! Uma interface intuitiva e visualmente limpa melhora a experiência do usuário e as avaliações do aplicativo.' },
            { text: 'Ignorar o feedback dos usuários.', isCorrect: false },
            { text: 'Mudar o nome do aplicativo.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp2',
          scenario: 'Desenvolvedores estão implementando novas funcionalidades sem considerar o feedback dos usuários.',
          question: 'Como um analista de IHC pode integrar o feedback do usuário no ciclo de desenvolvimento?',
          options: [
            { text: 'Impedir a implementação de novas funcionalidades.', isCorrect: false },
            { text: 'Implementar ciclos de feedback contínuo, como testes de usabilidade regulares e canais de comunicação abertos.', isCorrect: true, feedback: 'Perfeito! Integrar o usuário no processo de desenvolvimento garante que o produto atenda às suas necessidades reais.' },
            { text: 'Apenas coletar feedback uma vez por ano.', isCorrect: false },
            { text: 'Contratar mais desenvolvedores.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa3',
      name: 'Banco Digital "Dinheiro Fácil"',
      position: { x: 250, y: 400 },
      icon: '💰',
      problems: [
        {
          id: 'prob1_emp3',
          scenario: 'Clientes idosos estão tendo dificuldade em usar o aplicativo bancário devido ao tamanho da fonte e complexidade dos menus.',
          question: 'Que princípios de design devemos aplicar para atender a essa demografia?',
          options: [
            { text: 'Diminuir o tamanho da fonte para mais informações.', isCorrect: false },
            { text: 'Aplicar princípios de design para acessibilidade, como fontes maiores, alto contraste e navegação simplificada.', isCorrect: true, feedback: 'Exato! Acessibilidade é crucial para incluir todos os usuários, especialmente idosos, garantindo que a interface seja legível e fácil de usar.' },
            { text: 'Remover todas as imagens.', isCorrect: false },
            { text: 'Adicionar mais opções de menu complexas.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp3',
          scenario: 'O processo de abertura de conta online é muito demorado e exige muitos documentos, fazendo com que usuários desistam.',
          question: 'Como otimizar o fluxo de abertura de conta?',
          options: [
            { text: 'Exigir ainda mais documentos.', isCorrect: false },
            { text: 'Simplificar o número de etapas e documentos, e fornecer feedback claro sobre o progresso.', isCorrect: true, feedback: 'Ótimo! Reduzir a fricção e manter o usuário informado sobre o progresso melhora drasticamente a taxa de conclusão de formulários complexos.' },
            { text: 'Remover a opção de abertura de conta online.', isCorrect: false },
            { text: 'Mudar o logo do banco.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp3',
          scenario: 'Os usuários não confiam em fazer transações grandes pelo aplicativo devido a uma percepção de falta de segurança visual.',
          question: 'Como podemos aumentar a percepção de segurança da interface?',
          options: [
            { text: 'Adicionar mais propagandas de produtos financeiros.', isCorrect: false },
            { text: 'Utilizar ícones de segurança reconhecíveis, mensagens claras sobre criptografia e verificação, e um design limpo e profissional.', isCorrect: true, feedback: 'Bingo! Um design que transmite profissionalismo e transparência sobre segurança aumenta a confiança do usuário.' },
            { text: 'Usar cores vibrantes e chamativas em todo o aplicativo.', isCorrect: false },
            { text: 'Remover todos os avisos de segurança.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    }
  ]
};