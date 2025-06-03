import eCommerceImg from '../assets/ecommerce.png';
import startUpImg from '../assets/startup.png';
import bankImg from '../assets/bank.png';
import clinicImg from '../assets/clinic.png';
import agencyImg from '../assets/agency.png';
import schoolImg from '../assets/school.png';

import pro1Emp1Img from "../assets/prob1_emp1.png";
import pro2Emp1Img from "../assets/prob2_emp1.png";
import pro3Emp1Img from "../assets/prob3_emp1.png";

import pro1EnergiaImg from "../assets/prob1_emp2.png";
import pro2EnergiaImg from "../assets/prob2_emp2.png";
import pro3EnergiaImg from "../assets/prob3_emp2.png";

import pro1Emp3Img from "../assets/prob1_emp3.png";
import pro2Emp3Img from "../assets/prob2_emp3.png";
import pro3Emp3Img from "../assets/prob3_emp3.png";

import pro1Emp4Img from "../assets/prob1_emp4.png";
import pro2Emp4Img from "../assets/prob2_emp4.png";
import pro3Emp4Img from "../assets/prob3_emp4.png";

import pro1Emp5Img from "../assets/prob1_emp5.png";
import pro2Emp5Img from "../assets/prob2_emp5.png";
import pro3Emp5Img from "../assets/prob3_emp5.png";

import pro1Emp6Img from "../assets/prob1_emp6.png";
import pro2Emp6Img from "../assets/prob2_emp6.png";
import pro3Emp6Img from "../assets/prob3_emp6.png";


export const gameData = {
  boardBaseWidth: 1000,
  boardBaseHeight: 600,

  companies: [
    {
      id: 'empresa1',
      name: 'Loja de E-commerce "Click Fácil"',
      position: { x: 100, y: 100 },
      image: eCommerceImg,
      problems: [
        {
          id: 'prob1_emp1',
          scenario: 'Usuários abandonam o carrinho de compras frequentemente na etapa final do checkout, sem entender o motivo do erro na transação.',
          question: 'Qual heurística de Nielsen está sendo mais violada e como podemos abordá-la inicialmente?',
          scenarioImage: pro1Emp1Img,
          options: [
            { text: 'Visibilidade do status do sistema: Redesenhar completamente a página de produto.', isCorrect: false },
            { text: 'Reconhecimento em vez de recordação: Adicionar mais pop-ups promocionais no checkout.', isCorrect: false },
            { text: 'Visibilidade do status do sistema: Implementar mensagens claras de erro e progresso no checkout.', isCorrect: true, feedback: 'Parabéns! Mensagens claras sobre o status da transação e erros ajudam o usuário a entender o que está acontecendo e como prosseguir, seguindo a heurística de Visibilidade do Status do Sistema.' },
            { text: 'Controle e liberdade do usuário: Mudar a cor do botão de finalizar compra.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp1',
          scenario: 'Clientes reclamam que é difícil encontrar o produto desejado devido a muitas categorias e subcategorias confusas.',
          question: 'Qual heurística está sendo mais impactada e qual técnica de IHC pode ajudar a remediá-la?',
          scenarioImage: pro2Emp1Img,
          options: [
            { text: 'Estética e design minimalista: Adicionar mais categorias visíveis na tela.', isCorrect: false },
            { text: 'Reconhecimento em vez de recordação: Realizar Card Sorting com usuários para reorganizar as categorias.', isCorrect: true, feedback: 'Correto! O Card Sorting permite entender como os usuários agrupam informações naturalmente, melhorando a heurística de Reconhecimento em vez de Recordação e facilitando a navegação.' },
            { text: 'Consistência e padrões: Alterar as fontes de todas as categorias.', isCorrect: false },
            { text: 'Ajuda e documentação: Inserir textos descritivos longos em cada subcategoria.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp1',
          scenario: 'O formulário de cadastro é muito longo e complexo, resultando em muitos erros e desistências, sem feedback sobre o que foi preenchido incorretamente.',
          question: 'Para melhorar a usabilidade e aderir às heurísticas de Nielsen, como podemos otimizar este formulário?',
          scenarioImage: pro3Emp1Img,
          options: [
            { text: 'Prevenção de erros: Dividir o formulário em etapas menores com validação progressiva.', isCorrect: true, feedback: 'Perfeito! Dividir o formulário em etapas ajuda a reduzir a carga cognitiva e permite que erros sejam detectados e corrigidos em cada passo, aplicando a heurística de Prevenção de Erros.' },
            { text: 'Consistência e padrões: Padronizar a largura dos campos de texto.', isCorrect: false },
            { text: 'Estética e design minimalista: Adicionar mais campos para dados adicionais.', isCorrect: false },
            { text: 'Visibilidade do status do sistema: Inserir uma animação decorativa no botão de cadastro.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: "empresa2",
      name: "EnergiaVerde",
      position: { x: 450, y: 50 },
      image: startUpImg,
      problems: [
        {
          id: "prob1_energia",
          scenario: "Os usuários não conseguem entender como pagar a conta de energia devido à falta de clareza nas instruções.",
          question: "Qual heurística de Nielsen é mais relevante aqui e como podemos aplicar uma solução?",
          scenarioImage: pro1EnergiaImg,
          options: [
            { text: "Ajuda e documentação: Remover o processo de pagamento.", isCorrect: false },
            { text: "Ajuda e documentação, e Visibilidade do status do sistema: Adicionar instruções claras, um tutorial interativo e uma barra de progresso.", isCorrect: true, feedback: "Acertou! A heurística de Ajuda e Documentação e Visibilidade do Status do Sistema ajudam os usuários a entenderem o processo e o progresso de suas ações." },
            { text: "Estética e design minimalista: Remover as instruções para simplificar.", isCorrect: false },
            { text: "Controle e liberdade do usuário: Fazer o pagamento mais difícil para garantir segurança.", isCorrect: false }
          ],
          resolved: false
        },
        {
          id: "prob2_energia",
          scenario: "Os usuários têm dificuldade em escolher o plano de energia devido à complexidade das informações na página.",
          question: "Qual heurística de Nielsen devemos aplicar para melhorar a escolha do plano de energia?",
          scenarioImage: pro2EnergiaImg,
          options: [
            { text: "Visibilidade do status do sistema: Adicionar pop-ups para explicar cada plano.", isCorrect: false },
            { text: "Estética e design minimalista, e Consistência e padrões: Simplificar o layout, organizar os planos em categorias e usar ícones e texto claro para cada plano.", isCorrect: true, feedback: "Correto! A heurística de Estética e Design Minimalista e Consistência e Padrões ajuda a apresentar informações de forma mais acessível e compreensível para o usuário." },
            { text: "Controle e liberdade do usuário: Adicionar mais planos à escolha.", isCorrect: false },
            { text: "Prevenção de erros: Remover todos os planos de energia.", isCorrect: false }
          ],
          resolved: false
        },
        {
          id: "prob3_energia",
          scenario: "Os usuários não conseguem encontrar rapidamente as opções de contato de emergência no site.",
          question: "Qual heurística de Nielsen é mais relevante para garantir fácil acesso a informações de emergência?",
          scenarioImage: pro3EnergiaImg,
          options: [
            { text: "Visibilidade do status do sistema: Colocar o número de emergência em uma cor destacada.", isCorrect: true, feedback: "Correto! A Visibilidade do Status do Sistema assegura que o usuário saiba onde encontrar as informações mais importantes, como o número de emergência, de forma rápida e acessível." },
            { text: "Estética e design minimalista: Remover todas as informações de emergência.", isCorrect: false },
            { text: "Controle e liberdade do usuário: Adicionar uma opção de chatbot para emergências.", isCorrect: false },
            { text: "Consistência e padrões: Colocar todas as opções de contato nas páginas secundárias.", isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa3',
      name: 'Banco Digital "Dinheiro Fácil"',
      position: { x: 800, y: 100 },
      image: bankImg,
      problems: [
        {
          id: 'prob1_emp3',
          scenario: 'Clientes idosos estão tendo dificuldade em usar o aplicativo bancário devido ao tamanho da fonte e complexidade dos menus, violando a acessibilidade.',
          question: 'Que princípios de design devemos aplicar para atender a essa demografia, focando na Flexibilidade e Eficiência de Uso e Reconhecimento em vez de Recordação?',
          scenarioImage: pro1Emp3Img,
          options: [
            { text: 'Estética e design minimalista: Diminuir o tamanho da fonte para mais informações.', isCorrect: false },
            { text: 'Flexibilidade e eficiência de uso, e Reconhecimento em vez de recordação: Aplicar princípios de design para acessibilidade, como fontes maiores, alto contraste e navegação simplificada, com ícones e rótulos claros.', isCorrect: true, feedback: 'Exato! Acessibilidade é crucial para incluir todos os usuários. Fontes maiores, alto contraste e navegação simplificada com elementos de reconhecimento são fundamentais para idosos, seguindo Flexibilidade e Eficiência de Uso e Reconhecimento em vez de Recordação.' },
            { text: 'Consistência e padrões: Remover todas as imagens.', isCorrect: false },
            { text: 'Controle e liberdade do usuário: Adicionar mais opções de menu complexas.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp3',
          scenario: 'O processo de abertura de conta online é muito demorado e exige muitos documentos, fazendo com que usuários desistam sem a opção de desfazer ou cancelar facilmente.',
          question: 'Como otimizar o fluxo de abertura de conta, abordando o Controle e Liberdade do Usuário?',
          scenarioImage: pro2Emp3Img,
          options: [
            { text: 'Visibilidade do status do sistema: Exigir ainda mais documentos.', isCorrect: false },
            { text: 'Controle e liberdade do usuário: Simplificar o número de etapas e documentos, e fornecer uma opção clara de "desfazer" ou "cancelar" a qualquer momento.', isCorrect: true, feedback: 'Ótimo! Reduzir a fricção e dar ao usuário controle sobre o processo, incluindo a capacidade de desfazer ações, melhora drasticamente a taxa de conclusão de formulários complexos, alinhado com Controle e Liberdade do Usuário.' },
            { text: 'Prevenção de erros: Remover a opção de abertura de conta online.', isCorrect: false },
            { text: 'Estética e design minimalista: Mudar o logo do banco.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: "prob3_emp3",
          scenario: "Os usuários não confiam em fazer transações grandes pelo aplicativo devido a uma percepção de falta de segurança visual e mensagens pouco claras sobre o que fazer em caso de problemas.",
          question: "Como podemos aumentar a percepção de segurança da interface, abordando a Ajuda e Documentação e a Correspondência entre o Sistema e o Mundo Real?",
          scenarioImage: pro3Emp3Img,
          options: [
            { text: "Estética e design minimalista: Adicionar mais propagandas de produtos financeiros.", isCorrect: false },
            { text: "Ajuda e documentação, e Correspondência entre o sistema e o mundo real: Utilizar ícones de segurança reconhecíveis, mensagens claras sobre criptografia e verificação, e um design limpo e profissional, com fácil acesso a informações de contato para suporte.", isCorrect: true, feedback: "Bingo! Um design que transmite profissionalismo, transparência sobre segurança e oferece ajuda acessível aumenta a confiança do usuário e a Correspondência entre o Sistema e o Mundo Real." },
            { text: "Consistência e padrões: Usar cores vibrantes e chamativas em todo o aplicativo.", isCorrect: false },
            { text: "Prevenção de erros: Remover todos os avisos de segurança.", isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa4',
      name: 'Clínica de Saúde "Bem-Estar Digital"',
      position: { x: 150, y: 400 },
      image: clinicImg,
      problems: [
        {
          id: 'prob1_emp4',
          scenario: 'Pacientes idosos têm dificuldade em agendar consultas online devido à interface complexa, sem feedback claro sobre o preenchimento ou opções de correção.',
          question: 'Qual heurística de Nielsen deve ser focada para simplificar o agendamento para este público?',
          scenarioImage: pro1Emp4Img,
          options: [
            { text: 'Visibilidade do status do sistema: Adicionar mais campos de informação obrigatórios.', isCorrect: false },
            { text: 'Prevenção de erros, e Reconhecimento em vez de recordação: Implementar um fluxo de agendamento em poucas etapas, com campos claros e grandes, e feedback imediato sobre erros de preenchimento.', isCorrect: true, feedback: 'Isso mesmo! Simplificar o processo, usar elementos visuais claros e fornecer feedback imediato para evitar erros (Prevenção de Erros) ajuda muito usuários de todas as idades, além de Reconhecimento em vez de Recordação.' },
            { text: 'Controle e liberdade do usuário: Remover a opção de agendamento online.', isCorrect: false },
            { text: 'Ajuda e documentação: Apenas adicionar um chatbot que responde a tudo.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp4',
          scenario: 'O aplicativo da clínica não oferece informações claras sobre o preparo para exames, gerando ligações frequentes, pois os usuários precisam recordar informações externas.',
          question: 'Como podemos melhorar a disponibilização dessas informações, focando na heurística de Reconhecimento em vez de Recordação?',
          scenarioImage: pro2Emp4Img,
          options: [
            { text: 'Consistência e padrões: Enviar as informações por carta após a consulta.', isCorrect: false },
            { text: 'Reconhecimento em vez de recordação: Integrar instruções detalhadas e fáceis de encontrar, diretamente visíveis e contextuais, no agendamento e na tela de exames.', isCorrect: true, feedback: 'Correto! Disponibilizar as informações no contexto certo, de forma que o usuário não precise se lembrar delas (Reconhecimento em vez de Recordação), reduz a necessidade de contato e melhora a autonomia do paciente.' },
            { text: 'Estética e design minimalista: Criar um vídeo de 30 minutos sobre cada exame.', isCorrect: false },
            { text: 'Ajuda e documentação: Apenas responder às perguntas quando o paciente ligar.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp4',
          scenario: 'Médicos reclamam que o sistema de prontuário eletrônico é lento e difícil de navegar durante as consultas, prejudicando a eficiência de uso.',
          question: 'Qual a abordagem para otimizar o sistema para os profissionais, visando a Flexibilidade e Eficiência de Uso?',
          scenarioImage: pro3Emp4Img,
          options: [
            { text: 'Reconhecimento em vez de recordação: Treinar os médicos para digitarem mais rápido.', isCorrect: false },
            { text: 'Flexibilidade e eficiência de uso: Realizar análise de tarefas e otimizar fluxos de trabalho, simplificando a inserção e busca de dados com atalhos e personalização.', isCorrect: true, feedback: 'Excelente! Entender o fluxo de trabalho real dos usuários e simplificar a interface com opções para usuários avançados (Flexibilidade e Eficiência de Uso) aumenta a eficiência e a satisfação.' },
            { text: 'Estética e design minimalista: Adicionar mais cores e animações ao sistema.', isCorrect: false },
            { text: 'Consistência e padrões: Forçar o uso de comandos de voz.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa5',
      name: 'Agência de Marketing "Criativa Digital"',
      position: { x: 550, y: 450 },
      image: agencyImg,
      problems: [
        {
          id: 'prob1_emp5',
          scenario: 'A nova plataforma de gestão de projetos internos é confusa e a equipe não a utiliza de forma consistente, sem seguir padrões de interação com outras ferramentas.',
          question: 'Qual heurística de Nielsen deve ser abordada primeiro para aumentar a adoção da plataforma?',
          scenarioImage: pro1Emp5Img,
          options: [
            { text: 'Controle e liberdade do usuário: Obrigar todos a usar sob pena de multa.', isCorrect: false },
            { text: 'Consistência e padrões: Realizar workshops de treinamento práticos e coletar feedback para melhorias iterativas na interface, alinhando-a com padrões de usabilidade existentes.', isCorrect: true, feedback: 'Perfeito! Engajar os usuários e adaptar a ferramenta às suas necessidades, garantindo consistência com outras ferramentas que eles já usam (Consistência e Padrões), é fundamental para a adoção.' },
            { text: 'Estética e design minimalista: Adicionar mais funcionalidades complexas.', isCorrect: false },
            { text: 'Reconhecimento em vez de recordação: Mudar a logo da plataforma.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp5',
          scenario: 'Clientes têm dificuldade em acessar os relatórios de campanha, que estão em um portal com navegação escondida e sem feedback claro ao clicar nos itens.',
          question: 'Como melhorar o acesso aos relatórios, focando na Visibilidade do Status do Sistema e Reconhecimento em vez de Recordação?',
          scenarioImage: pro2Emp5Img,
          options: [
            { text: 'Prevenção de erros: Parar de gerar relatórios.', isCorrect: false },
            { text: 'Visibilidade do status do sistema, e Reconhecimento em vez de recordação: Criar um dashboard de fácil acesso com visualizações claras, links diretos para relatórios detalhados e feedback visual ao interagir com os elementos.', isCorrect: true, feedback: 'Correto! Um dashboard intuitivo e visível centraliza as informações importantes, e o feedback visual (Visibilidade do Status do Sistema) combinado com o reconhecimento dos elementos (Reconhecimento em vez de Recordação) melhora a transparência.' },
            { text: 'Ajuda e documentação: Enviar todos os relatórios por e-mail em PDF.', isCorrect: false },
            { text: 'Flexibilidade e eficiência de uso: Deixar a navegação mais complexa para maior segurança.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp5',
          scenario: 'A ferramenta de briefing para novos projetos é muito textual e desmotivadora para preencher, sem seguir a Correspondência entre o Sistema e o Mundo Real do cliente.',
          question: 'Como tornar o processo de briefing mais engajante, alinhando-o à Correspondência entre o Sistema e o Mundo Real?',
          scenarioImage: pro3Emp5Img,
          options: [
            { text: 'Estética e design minimalista: Aumentar o número de campos de texto.', isCorrect: false },
            { text: 'Correspondência entre o sistema e o mundo real: Utilizar elementos visuais, perguntas interativas e um formato de "passo a passo" que simule uma conversa natural com o cliente.', isCorrect: true, feedback: 'Excelente! Tornar o processo mais visual e interativo, imitando a forma como os clientes normalmente comunicam suas necessidades (Correspondência entre o Sistema e o Mundo Real), diminui a carga cognitiva e aumenta a motivação.' },
            { text: 'Controle e liberdade do usuário: Fazer com que a equipe preencha o briefing no lugar do cliente.', isCorrect: false },
            { text: 'Prevenção de erros: Remover todos os campos de texto.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    },
    {
      id: 'empresa6',
      name: 'Escola Online "Mente Aberta"',
      position: { x: 800, y: 500 },
      image: schoolImg,
      problems: [
        {
          id: 'prob1_emp6',
          scenario: 'Alunos reclamam que o ambiente virtual de aprendizagem é desorganizado e difícil de encontrar materiais de estudo, pois não há consistência na navegação.',
          question: 'Como otimizar a organização do ambiente virtual, focando na Consistência e Padrões?',
          scenarioImage: pro1Emp6Img,
          options: [
            { text: 'Controle e liberdade do usuário: Remover todos os materiais de estudo.', isCorrect: false },
            { text: 'Consistência e padrões: Implementar uma arquitetura de informação clara com categorias lógicas e um sistema de busca eficiente, mantendo padrões de navegação familiares.', isCorrect: true, feedback: 'Acertou! Uma boa arquitetura de informação e a adesão a padrões de navegação (Consistência e Padrões) são fundamentais para a navegabilidade e acesso a conteúdos em plataformas de e-learning.' },
            { text: 'Flexibilidade e eficiência de uso: Deixar os alunos organizarem o próprio conteúdo.', isCorrect: false },
            { text: 'Estética e design minimalista: Mudar o nome da escola.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob2_emp6',
          scenario: 'Professores têm dificuldade em usar a ferramenta de criação de conteúdo, que exige muitos passos e é pouco intuitiva, sem a opção de atalhos para usuários experientes.',
          question: 'Como melhorar a ferramenta para os professores, focando na Flexibilidade e Eficiência de Uso?',
          scenarioImage: pro2Emp6Img,
          options: [
            { text: 'Ajuda e documentação: Contratar mais assistentes para os professores.', isCorrect: false },
            { text: 'Flexibilidade e eficiência de uso: Simplificar a interface, reduzir o número de cliques e oferecer modelos pré-definidos para criação rápida de conteúdo, além de atalhos para ações frequentes.', isCorrect: true, feedback: 'Isso mesmo! Otimizar ferramentas para a eficiência de quem as utiliza frequentemente, oferecendo tanto simplicidade para iniciantes quanto atalhos para especialistas (Flexibilidade e Eficiência de Uso), aumenta a produtividade e a satisfação.' },
            { text: 'Correspondência entre o sistema e o mundo real: Fazer um manual de 300 páginas.', isCorrect: false },
            { text: 'Prevenção de erros: Apenas disponibilizar aulas em texto.', isCorrect: false }
          ],
          resolved: false
        },
        {
          id: 'prob3_emp6',
          scenario: 'Pais reclamam que não conseguem acompanhar o progresso dos filhos na plataforma de forma clara, e o feedback sobre o desempenho é inconsistente.',
          question: 'Como podemos melhorar a visibilidade do progresso do aluno para os pais, focando na Visibilidade do Status do Sistema e Reconhecimento em vez de Recordação?',
          scenarioImage: pro3Emp6Img,
          options: [
            { text: 'Controle e liberdade do usuário: Parar de mostrar o progresso.', isCorrect: false },
            { text: 'Visibilidade do status do sistema, e Reconhecimento em vez de recordação: Criar um dashboard intuitivo para pais com gráficos de progresso, notas e atividades recentes do filho, utilizando elementos visuais familiares.', isCorrect: true, feedback: 'Perfeito! Dashboards claros e informativos, que mostram o status do progresso de forma visível e usam elementos de reconhecimento (Visibilidade do Status do Sistema, Reconhecimento em vez de Recordação), empoderam os pais e aumentam o engajamento com a educação dos filhos.' },
            { text: 'Estética e design minimalista: Enviar relatórios complexos por e-mail semanalmente.', isCorrect: false },
            { text: 'Ajuda e documentação: Deixar o progresso apenas para os alunos e professores.', isCorrect: false }
          ],
          resolved: false
        }
      ]
    }
  ]
};