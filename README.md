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
  - CRUD com campos: título, descrição, prazo, duração estimada, prioridade inicial, status e grupo.
- 🔄 **Estados da Tarefa**  
  - Pendente, Iniciada (com % concluído) e Finalizada.
- 🗂️ **Abas “Pendentes” e “Concluídas”**  
  - Pendentes: ordenadas por prioridade inicial.  
  - Concluídas: agrupadas por grupo de atividade.
- 🔍 **Detalhamento Clicável**  
  - Expansão in line p notas/descrições extras.
- 📊 **Estatísticas Básicas**  
  - % de tarefas finalizadas.  
  - Contador simples de conquistas (ex.: tarefas concluídas hoje ou na semana).

#### Complementares (após MVP)
- ⏱️ **Priorização Dinâmica**  
  - Recalculada conforme tempo restante e duração estimada.
- ⏰ **Alarmes Inteligentes**  
  - Notificações quando `tempo_restante ≤ duração + margem de segurança`.
- ⚙️ Configuração de margem de segurança por usuário/grupo.
- 🖱️ Arrastar e soltar para reorder.
- 🔍 Busca avançada e filtros.
- 📲 Notificações push e sync cross-device.
- 📈 Relatórios gráficos de progresso por grupo.

