import eCommerceImg from '../assets/ecommerce.png';
import startUpImg from '../assets/startup.png';
import bankImg from '../assets/bank.png';
import clinicImg from '../assets/clinic.png';
import agencyImg from '../assets/agency.png';
import schoolImg from '../assets/school.png';




export const gameData = {
  companies: [
    {
      id: 'empresa1',
      name: 'Loja de E-commerce "Click Fácil"',
      position: { x: 100, y: 100 },
      image: eCommerceImg,
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
      position: { x: 400, y: 50 },
      image: startUpImg,
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
      position: { x: 700, y: 100 },
      image: bankImg,
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
    },
    {
      id: 'empresa4',
      name: 'Clínica de Saúde "Bem-Estar Digital"',
      position: { x: 150, y: 350 },
      icon: '🏥',
      image: clinicImg,
      problems: [
        {
          id: 'prob1_emp4',
          scenario: 'Pacientes idosos têm dificuldade em agendar consultas online devido à interface complexa.',
          question: 'Qual a melhor forma de simplificar o agendamento?',
          options: [
            { text: 'Adicionar mais campos de informação obrigatórios.', isCorrect: false },
            { text: 'Implementar um fluxo de agendamento em poucas etapas, com campos claros e grandes.', isCorrect: true, feedback: 'Isso mesmo! Simplificar o processo e usar elementos visuais claros ajuda muito usuários de todas as idades.' },
            { text: 'Remover a opção de agendamento online.', isCorrect: false },
            { text: 'Apenas adicionar um chatbot que responde a tudo.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp4',
          scenario: 'O aplicativo da clínica não oferece informações claras sobre o preparo para exames, gerando ligações frequentes.',
          question: 'Como podemos melhorar a disponibilização dessas informações?',
          options: [
            { text: 'Enviar as informações por carta após a consulta.', isCorrect: false },
            { text: 'Integrar instruções detalhadas e fáceis de encontrar diretamente no agendamento e na tela de exames.', isCorrect: true, feedback: 'Correto! Disponibilizar as informações no contexto certo reduz a necessidade de contato e melhora a autonomia do paciente.' },
            { text: 'Criar um vídeo de 30 minutos sobre cada exame.', isCorrect: false },
            { text: 'Apenas responder às perguntas quando o paciente ligar.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp4',
          scenario: 'Médicos reclamam que o sistema de prontuário eletrônico é lento e difícil de navegar durante as consultas.',
          question: 'Qual a abordagem para otimizar o sistema para os profissionais?',
          options: [
            { text: 'Treinar os médicos para digitarem mais rápido.', isCorrect: false },
            { text: 'Realizar análise de tarefas e otimizar fluxos de trabalho, simplificando a inserção e busca de dados.', isCorrect: true, feedback: 'Excelente! Entender o fluxo de trabalho real dos usuários e simplificar a interface aumenta a eficiência e a satisfação.' },
            { text: 'Adicionar mais cores e animações ao sistema.', isCorrect: false },
            { text: 'Forçar o uso de comandos de voz.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa5',
      name: 'Agência de Marketing "Criativa Digital"',
      position: { x: 500, y: 300 },
      icon: '🎨',
      image: agencyImg,
      problems: [
        {
          id: 'prob1_emp5',
          scenario: 'A nova plataforma de gestão de projetos internos é confusa e a equipe não a utiliza de forma consistente.',
          question: 'Qual o primeiro passo para aumentar a adoção da plataforma?',
          options: [
            { text: 'Obrigar todos a usar sob pena de multa.', isCorrect: false },
            { text: 'Realizar workshops de treinamento práticos e coletar feedback para melhorias iterativas na interface.', isCorrect: true, feedback: 'Perfeito! Engajar os usuários e adaptar a ferramenta às suas necessidades é fundamental para a adoção.' },
            { text: 'Adicionar mais funcionalidades complexas.', isCorrect: false },
            { text: 'Mudar a logo da plataforma.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp5',
          scenario: 'Clientes têm dificuldade em acessar os relatórios de campanha, que estão em um portal com navegação escondida.',
          question: 'Como melhorar o acesso aos relatórios?',
          options: [
            { text: 'Parar de gerar relatórios.', isCorrect: false },
            { text: 'Criar um dashboard de fácil acesso com visualizações claras e links diretos para relatórios detalhados.', isCorrect: true, feedback: 'Correto! Um dashboard intuitivo e visível centraliza as informações importantes e melhora a transparência.' },
            { text: 'Enviar todos os relatórios por e-mail em PDF.', isCorrect: false },
            { text: 'Deixar a navegação mais complexa para maior segurança.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp5',
          scenario: 'A ferramenta de briefing para novos projetos é muito textual e desmotivadora para preencher.',
          question: 'Como tornar o processo de briefing mais engajante?',
          options: [
            { text: 'Aumentar o número de campos de texto.', isCorrect: false },
            { text: 'Utilizar elementos visuais, perguntas interativas e um formato de "passo a passo" gamificado.', isCorrect: true, feedback: 'Excelente! Tornar o processo mais visual e interativo diminui a carga cognitiva e aumenta a motivação para preencher formulários.' },
            { text: 'Fazer com que a equipe preencha o briefing no lugar do cliente.', isCorrect: false },
            { text: 'Remover todos os campos de texto.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa6',
      name: 'Escola Online "Mente Aberta"',
      position: { x: 400, y: 500 },
      icon: '🎓',
      image: schoolImg,
      problems: [
        {
          id: 'prob1_emp6',
          scenario: 'Alunos reclamam que o ambiente virtual de aprendizagem é desorganizado e difícil de encontrar materiais de estudo.',
          question: 'Como otimizar a organização do ambiente virtual?',
          options: [
            { text: 'Remover todos os materiais de estudo.', isCorrect: false },
            { text: 'Implementar uma arquitetura de informação clara com categorias lógicas e um sistema de busca eficiente.', isCorrect: true, feedback: 'Acertou! Uma boa arquitetura de informação é fundamental para a navegabilidade e acesso a conteúdos em plataformas de e-learning.' },
            { text: 'Deixar os alunos organizarem o próprio conteúdo.', isCorrect: false },
            { text: 'Mudar o nome da escola.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp6',
          scenario: 'Professores têm dificuldade em usar a ferramenta de criação de conteúdo, que exige muitos passos e é pouco intuitiva.',
          question: 'Como melhorar a ferramenta para os professores?',
          options: [
            { text: 'Contratar mais assistentes para os professores.', isCorrect: false },
            { text: 'Simplificar a interface, reduzir o número de cliques e oferecer modelos pré-definidos para criação rápida de conteúdo.', isCorrect: true, feedback: 'Isso mesmo! Otimizar ferramentas para a eficiência de quem as utiliza frequentemente aumenta a produtividade e a satisfação.' },
            { text: 'Fazer um manual de 300 páginas.', isCorrect: false },
            { text: 'Apenas disponibilizar aulas em texto.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp6',
          scenario: 'Pais reclamam que não conseguem acompanhar o progresso dos filhos na plataforma de forma clara.',
          question: 'Como podemos melhorar a visibilidade do progresso do aluno para os pais?',
          options: [
            { text: 'Parar de mostrar o progeto.', isCorrect: false },
            { text: 'Criar um dashboard intuitivo para pais com gráficos de progresso, notas e atividades recentes do filho.', isCorrect: true, feedback: 'Perfeito! Dashboards claros e informativos empoderam os pais e aumentam o engajamento com a educação dos filhos.' },
            { text: 'Enviar relatórios complexos por e-mail semanalmente.', isCorrect: false },
            { text: 'Deixar o progresso apenas para os alunos e professores.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    }
  ]
};