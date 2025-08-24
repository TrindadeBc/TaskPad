\## 💡 TaskPad



\*Um bloco de anotações inteligente para transformar o caos em clareza e produtividade.\*



---



\### 🎯 Visão Geral do Projeto



O TaskPad nasce como um bloco de anotações inteligente voltado a quem precisa organizar múltiplas frentes de trabalho — sejam elas acadêmicas, profissionais ou pessoais. O usuário poderá registrar cada tarefa em um só lugar, classificá-la por prioridade, atribuir prazos e acompanhar, o avanço de cada atividade.



A premissa central é simples: reduzir a sobrecarga mental gerada por lembretes dispersos, transformando a seleção de tarefas a realizar/pendentes em algo mais visual, motivador e — acima de tudo — proativo. Vale lembrar que o intuito dessa aplicação NÃO é de calendário!



Cada tarefa pertencerá a um grupo de atividade (por exemplo: “UFU”, “Estágio”, “IC” ou “Viagem”), permitindo filtrar rapidamente o que é urgente em cada contexto. Além do título e de uma descrição livre (que só aparece ao clicar para abrir), será possível definir a duração estimada para sua execução e um prazo final (deadline). A partir daí, o TaskPad recalculará automaticamente a prioridade sempre que o tempo restante diminuir, assegurando que nada “escorregue” por falta de visibilidade e tempo.



Quando o usuário desejar, poderá mudar o status da tarefa para Iniciada — informando um percentual concluído — ou para Finalizada. Essa mudança não apenas altera a cor ou posição do item na lista: ela alimenta um painel de estatísticas que celebra conquistas e evidencia o progresso geral, gerando reforço positivo para manter a motivação em alta.



Há, ainda, um sistema de alarmes inteligentes: o TaskPad dispara notificações quando o tempo restante até o prazo fica menor que a soma “duração estimada + margem de segurança” escolhida pelo usuário. Dessa forma, problemas são sinalizados antes de se tornarem urgentes de fato.



A interface será dividida em duas abas principais — Pendentes e Concluídas. As pendentes aparecem todas juntas, ranqueadas pela prioridade (definida pelo usuário, mas ajustada com um fator de correção baseado no tempo restante e tempo estimado). Já as tarefas concluídas surgem agrupadas pelo respectivo grupo de atividade, mantendo o espaço limpo e intuitivo. Cada item é clicável: ao expandi-lo, o usuário acessa notas e detalhes extras sem poluir a visão geral.



Em resumo, o TaskPad combina clareza visual, automação de prioridades e feedback positivo para transformar a gestão de tarefas em uma experiência mais leve e eficiente.



---



\### ✨ Requisitos Resumidos (Preeliminares)



\* \*\*📝 Cadastro de Tarefas:\*\* Cada tarefa pertence a um grupo; campos: título, descrição, prazo, duração estimada, prioridade inicial e status.

\* \*\*⏱️ Priorização Dinâmica:\*\* Recalcula a prioridade conforme o tempo restante até o prazo.

\* \*\*🔄 Estados da Tarefa:\*\* Pendente, Iniciada (com % concluído) ou Finalizada.

\* \*\*⏰ Alarmes Inteligentes:\*\* Notificações quando tempo restante ≤ duração estimada + margem de segurança.

\* \*\*🗂️ Estrutura de Abas:\*\* Pendentes ranqueadas por prioridade; Concluídas agrupadas por grupo.

\* \*\*🔍 Detalhamento Clicável:\*\* Sub-painel para anotações internas da tarefa.

\* \*\*📊 Estatísticas \& Reforço Positivo:\*\* Barra de progresso global e destaques de conquistas.


--------------------------------------------------------------------------------------------------
##### ✨Segmentação em Requisitos obrigatórios(MVP) e Complementares

> **MVP:** focar nas funcionalidades obrigatórias (cadastro, status, abas, detalhamento e estatísticas básicas). Priorização dinâmica e alarmes inteligentes, etc., serão tratados como complementares, após entrega do núcleo do produto, caso haja tempo hábil.

---

### ✨ Funcionalidades

#### Obrigatórias (MVP)
- 📝 **Cadastro de Tarefas**  
  - CRUD (create, read, update, delete) com campos: título, descrição, prazo, duração estimada, prioridade inicial, status e grupo.
- 🔄 **Estados da Tarefa**  
  - Pendente, Iniciada e Finalizada.
- 🗂️ **Abas “Pendentes” e “Concluídas”**  
  - Pendentes: ordenadas por prioridade inicial.  
  - Concluídas: agrupadas por grupo de atividade.
- 🔍 **Detalhamento Clicável**  
  - Expansão in line p notas/descrições extras.


#### Complementares (após MVP)
- ⏱️ **Priorização Dinâmica**  
  - Recalculada conforme tempo restante e duração estimada.
- 📊 **Estatísticas Básicas**  
  - % de tarefas finalizadas.  
  - Contador simples de conquistas (ex.: tarefas concluídas hoje ou na semana).
- ⏰ **Alarmes Inteligentes**  
  - Notificações quando `tempo_restante ≤ duração + margem de segurança`.
- ⚙️ Configuração de margem de segurança por usuário/grupo.
- 🔍 Busca avançada e filtros.
- 📲 Notificações push e sync cross-device.(para uma futura implementação mobile)
- 📈 Relatórios gráficos de progresso por grupo.

---
## Pré-requisitos

Antes de começar, garanta que você tem as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

* [Node.js](https://nodejs.org/) (versão 20.x ou superior é recomendada para garantir a compatibilidade).
* [Angular CLI](https://angular.dev/tools/cli) (instalado globalmente).

Para instalar o Angular CLI, caso ainda não o tenha, utilize o seguinte comando no seu terminal:

```bash
npm install -g @angular/cli

---
## Instalação ⚙️

1. Clone este repositório para a sua máquina: `git clone <URL_DO_REPOSITORIO>`
2. Navegue até a pasta raiz do projeto pelo terminal.
3. Rode o seguinte comando para instalar todas as dependências listadas no `package.json`:

```bash
npm install

Este comando irá criar a pasta node_modules com todas as bibliotecas necessárias para o projeto funcionar.

---
## Como Rodar o Projeto ▶

Após a instalação bem-sucedida das dependências, inicie o servidor de desenvolvimento local do Angular com o comando:

```bash
ng serve

O servidor ficará ativo e irá recarregar a página automaticamente sempre que um arquivo for alterado. Você pode acessar a aplicação em seu navegador através do endereço: http://localhost:4200/

---

## Comandos Úteis 🛠️

Durante o desenvolvimento, alguns comandos do Angular CLI são usados com frequência:

### Gerar um novo componente
Para criar toda a estrutura de arquivos de um novo componente automaticamente:
```bash
ng generate component nome-do-componente

✨ Layout Principal e Interface do Usuário (UI)
Navbar Vertical Fixa: A barra de navegação principal foi movida para a lateral esquerda, com design fixo e uma cor de fundo escura para melhor contraste.

Menu Expansível: A navbar possui um menu que se expande ao passar o mouse, contendo o botão "Nova Tarefa" e placeholders para "Configurações" e "Perfil".

Layout de Duas Colunas: A área de conteúdo principal foi dividida em duas seções:

Tarefas Pendentes: Ocupa a maior parte da tela à esquerda, com um título "Tarefas Pendentes" em vermelho.

Tarefas Finalizadas: Uma coluna fixa e compacta no canto direito, com fundo escuro e estilo visual reduzido para não distrair.

Linha Divisória: Uma linha vertical separa claramente as tarefas pendentes das finalizadas, melhorando a organização visual.

Design Responsivo: O layout foi ajustado para se adaptar a diferentes tamanhos de tela, reorganizando as colunas e margens para evitar a sobreposição de elementos em janelas menores.

🚀 Gerenciamento de Tarefas (CRUD & Status)
Sistema de Status Completo: As tarefas agora passam por um ciclo de vida claro, com status e cores distintas:

⏸ Não Iniciada (Cinza)

▶ Iniciada (Amarelo)

✓ Finalizada (Verde)

Botões de Ação Dinâmicos: Cada card de tarefa possui um conjunto de botões de ação:

Iniciar (Amarelo): Aparece para tarefas "Não Iniciadas".

Finalizar (Verde): Substitui o botão "Iniciar" quando uma tarefa está "Iniciada".

Editar (Azul): Permite a edição dos dados da tarefa.

Excluir (Vermelho): Remove permanentemente a tarefa.

Ícone de Configurações: Um ícone de engrenagem (⚙️) foi adicionado a cada tarefa como um placeholder para futuras funcionalidades.

🎯 Funcionalidades Avançadas
Campo de Prazo (Data e Hora): O formulário de criação de tarefas agora inclui um campo "Prazo" unificado.

Formatação Automática: Ao digitar no campo "Prazo", o formato DD/MM/AA HH:MM é aplicado automaticamente, com as barras (/) e os dois pontos (:) sendo inseridos de forma inteligente.

Ordenação por Prazo: As tarefas na coluna "Pendentes" são automaticamente ordenadas pela data de prazo, com a mais urgente aparecendo primeiro.

🔧 Correções de Bugs e Melhorias Técnicas
Botão Cancelar: O bug que fazia o botão "Cancelar" na edição apagar a tarefa foi corrigido. Agora ele apenas reverte a edição.

Estrutura de Componentes: O projeto foi estabilizado para usar a abordagem de componentes standalone do Angular, resolvendo diversos erros de compilação e a "tela branca".

Estilos e Layout: Múltiplos ajustes foram feitos no CSS para corrigir problemas de alinhamento e sobreposição, garantindo uma experiência visual consistente.

