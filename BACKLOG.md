# BACKLOG DETALHADO - Entremet OS

**Última Atualização:** 27 de Novembro de 2025  
**Total de Tasks:** 87  
**Prioridade Média:** 🟠 ALTA

---

## 🔴 FASE 1: CONSOLIDAÇÃO (CRÍTICA)

### Sprint 1.1: Correções Críticas

#### Task 1.1.1: Corrigir Cache de Preço Médio
- **ID:** CORE-001
- **Prioridade:** 🔴 CRÍTICA
- **Esforço:** 3 horas
- **Status:** 📋 A FAZER
- **Descrição:** Ao editar uma compra (lote), o preço médio do insumo não recalcula automaticamente
- **Causa Raiz:** Cache do Supabase não invalida
- **Solução:**
  - [ ] Implementar função `invalidateInsumoCache()` em db.ts
  - [ ] Chamar ao atualizar lote
  - [ ] Testar com 3 cenários diferentes
- **Testes:**
  - [ ] Editar lote e verificar preço médio atualiza
  - [ ] Verificar em Ver Estoque
  - [ ] Verificar em Fichas Técnicas
- **Bloqueadores:** Nenhum
- **Dependências:** Nenhuma
- **Arquivo:** `server/db.ts`, `server/routers.ts`

#### Task 1.1.2: Integração Produtos ↔ Fichas Técnicas
- **ID:** CORE-002
- **Prioridade:** 🔴 CRÍTICA
- **Esforço:** 5 horas
- **Status:** 📋 A FAZER
- **Descrição:** Produtos não estão linkados com fichas técnicas. Precisa de relacionamento N:N
- **Causa Raiz:** Tabela de relacionamento não foi criada
- **Solução:**
  - [ ] Criar tabela `produto_ficha_tecnica` (produto_id, ficha_id)
  - [ ] Adicionar campo em ProdutosList para selecionar fichas
  - [ ] Atualizar cálculo de custo de produção
  - [ ] Adicionar validação: produto precisa ter pelo menos 1 ficha
- **Testes:**
  - [ ] Criar produto com ficha
  - [ ] Editar produto e trocar ficha
  - [ ] Deletar ficha e verificar integridade referencial
- **Bloqueadores:** Nenhum
- **Dependências:** Task 1.1.1 (preço médio deve estar correto)
- **Arquivo:** `drizzle/schema.ts`, `server/db.ts`, `client/src/components/ProdutosList.tsx`

#### Task 1.1.3: Implementar Testes Automatizados (Vitest)
- **ID:** TEST-001
- **Prioridade:** 🔴 CRÍTICA
- **Esforço:** 8 horas
- **Status:** 📋 A FAZER
- **Descrição:** Implementar testes unitários para funções críticas do backend
- **Cobertura Mínima:** 60%
- **Testes a Implementar:**
  - [ ] `calcularPrecoMedioPorUnidade()` - 4 cenários
  - [ ] `getEstoqueAtualPorInsumo()` - 3 cenários
  - [ ] `validateStockForProduction()` - 5 cenários
  - [ ] `deductStockForProduction()` - 4 cenários
  - [ ] `createBaixaEstoque()` - 3 cenários
  - [ ] Integração tRPC: `insumos.list` - 2 cenários
  - [ ] Integração tRPC: `ingredientes.list` - 2 cenários
- **Arquivo:** `server/__tests__/db.test.ts`, `server/__tests__/routers.test.ts`
- **Bloqueadores:** Nenhum
- **Dependências:** Task 1.1.1, 1.1.2 (bugs corrigidos)

---

### Sprint 1.2: Validação e Estabilização

#### Task 1.2.1: Testar Fluxo Completo de Estoque
- **ID:** QA-001
- **Prioridade:** 🟠 ALTA
- **Esforço:** 2 horas
- **Status:** 📋 A FAZER
- **Descrição:** Testar fluxo completo: Registrar Insumo → Compra → Dar Baixa → Ver Estoque
- **Checklist:**
  - [ ] Registrar insumo com estoque inicial
  - [ ] Registrar compra (lote)
  - [ ] Verificar preço médio calculou
  - [ ] Dar baixa manual
  - [ ] Verificar estoque diminuiu
  - [ ] Verificar em análise de desperdício
- **Bloqueadores:** Task 1.1.1, 1.1.2

#### Task 1.2.2: Testar Fluxo de Produção
- **ID:** QA-002
- **Prioridade:** 🟠 ALTA
- **Esforço:** 2 horas
- **Status:** 📋 A FAZER
- **Descrição:** Testar fluxo: Criar Ficha → Criar Ordem → Produzir → Verificar Estoque
- **Checklist:**
  - [ ] Criar ficha técnica com ingredientes
  - [ ] Criar ordem de produção
  - [ ] Validar estoque (deve ter suficiente)
  - [ ] Iniciar produção
  - [ ] Verificar estoque deduziu
  - [ ] Marcar como concluída
- **Bloqueadores:** Task 1.1.2

#### Task 1.2.3: Documentação de Bugs Encontrados
- **ID:** DOC-001
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 1 hora
- **Status:** 📋 A FAZER
- **Descrição:** Documentar todos os bugs encontrados durante testes
- **Arquivo:** `BUGS_ENCONTRADOS.md`

---

## 🟠 FASE 2: EXPERIÊNCIA DO USUÁRIO

### Sprint 2.1: Redesign de Componentes

#### Task 2.1.1: Converter Lista de Compras para Cards
- **ID:** UX-001
- **Prioridade:** 🟠 ALTA
- **Esforço:** 4 horas
- **Status:** 📋 A FAZER
- **Descrição:** Mudar tabela de listas de compras para layout de cards
- **Design:**
  - [ ] Card com nome da lista
  - [ ] Data de criação
  - [ ] Número de itens
  - [ ] Preço total
  - [ ] Botões de ação (editar, deletar, marcar como comprada)
- **Responsividade:** Mobile-first
- **Arquivo:** `client/src/components/ListaComprasPage.tsx`
- **Bloqueadores:** Nenhum
- **Dependências:** Nenhuma

#### Task 2.1.2: Adicionar Confirmação Visual em Operações Críticas
- **ID:** UX-002
- **Prioridade:** 🟠 ALTA
- **Esforço:** 3 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar diálogos de confirmação antes de deletar/editar dados críticos
- **Operações:**
  - [ ] Deletar insumo
  - [ ] Deletar ficha técnica
  - [ ] Deletar ordem de produção
  - [ ] Dar baixa em estoque (confirmar quantidade)
- **Arquivo:** Múltiplos componentes

#### Task 2.1.3: Implementar Breadcrumbs
- **ID:** UX-003
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 2 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar breadcrumbs em todas as páginas para melhor navegação
- **Páginas:**
  - [ ] /estoque → /estoque/registrar-compras
  - [ ] /fichas-tecnicas → editar ficha
  - [ ] /produtos → editar produto
- **Arquivo:** `client/src/components/Breadcrumb.tsx` (novo)

---

### Sprint 2.2: Melhorias de Formulários

#### Task 2.2.1: Validação em Tempo Real
- **ID:** UX-004
- **Prioridade:** 🟠 ALTA
- **Esforço:** 5 horas
- **Status:** 📋 A FAZER
- **Descrição:** Implementar validação em tempo real em todos os formulários
- **Validações:**
  - [ ] Email válido (clientes)
  - [ ] Quantidade > 0
  - [ ] Preço > 0
  - [ ] Data válida
  - [ ] Campo obrigatório não vazio
- **Feedback Visual:**
  - [ ] Ícone de sucesso/erro
  - [ ] Mensagem de erro inline
  - [ ] Desabilitar botão se inválido
- **Arquivo:** Múltiplos formulários

#### Task 2.2.2: Atalhos de Teclado
- **ID:** UX-005
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 3 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar atalhos de teclado para operações comuns
- **Atalhos:**
  - [ ] Ctrl+S: Salvar
  - [ ] Ctrl+N: Novo
  - [ ] Ctrl+D: Deletar
  - [ ] Esc: Fechar diálogo
- **Arquivo:** `client/src/hooks/useKeyboardShortcuts.ts` (novo)

---

## 🟡 FASE 3: INTELIGÊNCIA DE NEGÓCIOS

### Sprint 3.1: Dashboard Principal

#### Task 3.1.1: Criar Dashboard com KPI Cards
- **ID:** BI-001
- **Prioridade:** 🟠 ALTA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Criar página de dashboard com cards de KPI
- **KPIs:**
  - [ ] Estoque total em R$ (SUM de todos os lotes × preço médio)
  - [ ] Número de ordens em andamento
  - [ ] Desperdício do mês (SUM de baixas × preço médio)
  - [ ] Margem média de lucro (média de todas as receitas)
- **Arquivo:** `client/src/pages/Dashboard.tsx` (novo)
- **Backend:** Adicionar queries em `server/db.ts`

#### Task 3.1.2: Implementar Gráficos de Tendência
- **ID:** BI-002
- **Prioridade:** 🟠 ALTA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar gráficos ao dashboard
- **Gráficos:**
  - [ ] Estoque ao longo do tempo (linha) - últimos 30 dias
  - [ ] Desperdício por motivo (pizza)
  - [ ] Produtos mais vendidos (barra) - top 5
- **Biblioteca:** Chart.js (já instalada)
- **Arquivo:** `client/src/pages/Dashboard.tsx`

---

### Sprint 3.2: Relatórios

#### Task 3.2.1: Relatório de Margem de Lucro
- **ID:** BI-003
- **Prioridade:** 🟠 ALTA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Criar relatório detalhado de margem de lucro por produto
- **Colunas:**
  - [ ] Produto
  - [ ] Custo total da receita (SUM ingredientes)
  - [ ] Preço de venda
  - [ ] Margem bruta (preço - custo)
  - [ ] Margem % (margem / preço × 100)
- **Filtros:**
  - [ ] Por período (data início/fim)
  - [ ] Por produto
  - [ ] Ordenar por margem
- **Arquivo:** `client/src/pages/RelatorioMargemPage.tsx` (novo)
- **Backend:** Adicionar query em `server/db.ts`

#### Task 3.2.2: Relatório de Desperdício Detalhado
- **ID:** BI-004
- **Prioridade:** 🟠 ALTA
- **Esforço:** 5 horas
- **Status:** 📋 A FAZER
- **Descrição:** Criar relatório detalhado de desperdício
- **Colunas:**
  - [ ] Insumo
  - [ ] Quantidade desperdiçada
  - [ ] Custo do desperdício
  - [ ] Motivo
  - [ ] Data
- **Análises:**
  - [ ] Insumo mais desperdiçado
  - [ ] Motivo mais comum
  - [ ] Custo total de desperdício
  - [ ] Tendência (mês a mês)
- **Arquivo:** `client/src/pages/RelatorioDesperdícioPage.tsx` (novo)

---

### Sprint 3.3: Análise de Estoque

#### Task 3.3.1: Previsão de Falta de Estoque
- **ID:** BI-005
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Implementar previsão de quando o estoque vai faltar
- **Lógica:**
  - [ ] Calcular consumo médio diário (últimos 30 dias)
  - [ ] Dividir estoque atual pelo consumo
  - [ ] Resultado = dias até faltar
- **Alertas:**
  - [ ] Vermelho: < 7 dias
  - [ ] Amarelo: 7-14 dias
  - [ ] Verde: > 14 dias
- **Arquivo:** `server/db.ts` (nova função)

#### Task 3.3.2: Otimização de Compras
- **ID:** BI-006
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Sugerir quantidade ideal de compra
- **Lógica:**
  - [ ] Consumo médio × dias até próxima compra
  - [ ] Adicionar margem de segurança (20%)
  - [ ] Mostrar melhor preço por unidade (histórico)
- **Arquivo:** `server/db.ts` (nova função)

---

## 🟢 FASE 4: ESCALABILIDADE & PERFORMANCE

### Sprint 4.1: Otimização de Banco de Dados

#### Task 4.1.1: Adicionar Índices no Banco
- **ID:** PERF-001
- **Prioridade:** 🟠 ALTA
- **Esforço:** 2 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar índices em colunas frequentemente consultadas
- **Índices:**
  - [ ] `lotes.insumo_id`
  - [ ] `ingredientes.ficha_tecnica_id`
  - [ ] `ordens_producao.status`
  - [ ] `baixas_estoque.data_baixa`
- **Arquivo:** `drizzle/schema.ts` ou SQL direto

#### Task 4.1.2: Implementar Paginação
- **ID:** PERF-002
- **Prioridade:** 🟠 ALTA
- **Esforço:** 4 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar paginação em listas com muitos dados
- **Listas:**
  - [ ] Ver Estoque (se > 100 itens)
  - [ ] Lista de Compras (se > 50 itens)
  - [ ] Análise de Desperdício (se > 100 itens)
- **Padrão:** Limit 25, offset baseado em página
- **Arquivo:** Múltiplos componentes

#### Task 4.1.3: Cache com React Query
- **ID:** PERF-003
- **Prioridade:** 🟠 ALTA
- **Esforço:** 5 horas
- **Status:** 📋 A FAZER
- **Descrição:** Otimizar cache de queries
- **Estratégia:**
  - [ ] Insumos: cache 5 minutos
  - [ ] Estoque: cache 1 minuto
  - [ ] Fichas: cache 10 minutos
  - [ ] Invalidar ao mudar dados
- **Arquivo:** `client/src/lib/trpc.ts`

---

### Sprint 4.2: Testes de Carga

#### Task 4.2.1: Teste com 10k+ Registros
- **ID:** PERF-004
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 3 horas
- **Status:** 📋 A FAZER
- **Descrição:** Testar performance com grande volume de dados
- **Cenários:**
  - [ ] 10k lotes
  - [ ] 5k insumos
  - [ ] 1k fichas técnicas
- **Métricas:**
  - [ ] Tempo de carregamento de Ver Estoque
  - [ ] Tempo de cálculo de preço médio
  - [ ] Tempo de relatório de desperdício

#### Task 4.2.2: Identificar Gargalos
- **ID:** PERF-005
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 2 horas
- **Status:** 📋 A FAZER
- **Descrição:** Usar profiler para identificar gargalos
- **Ferramentas:**
  - [ ] Chrome DevTools (frontend)
  - [ ] Node profiler (backend)
- **Resultado:** Relatório com recomendações

---

## 🔵 FASE 5: FEATURES AVANÇADAS

### Sprint 5.1: Automações

#### Task 5.1.1: Gerar Lista de Compras Automaticamente
- **ID:** AUTO-001
- **Prioridade:** 🟠 ALTA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Criar lista de compras automática baseada em estoque mínimo
- **Lógica:**
  - [ ] Verificar insumos com estoque < nível mínimo
  - [ ] Agrupar por fornecedor
  - [ ] Sugerir quantidade (consumo × dias)
  - [ ] Criar lista automaticamente
- **Arquivo:** `server/db.ts` (nova função)

#### Task 5.1.2: Alertas Automáticos
- **ID:** AUTO-002
- **Prioridade:** 🟠 ALTA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Implementar sistema de alertas automáticos
- **Alertas:**
  - [ ] Estoque baixo (< nível mínimo)
  - [ ] Produtos próximos do vencimento (< 7 dias)
  - [ ] Ordens atrasadas (data conclusão passada)
- **Notificações:** Toast + Badge no menu
- **Arquivo:** `client/src/hooks/useAlerts.ts` (novo)

---

### Sprint 5.2: Integrações

#### Task 5.2.1: Exportar Relatórios em PDF
- **ID:** INT-001
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 3 horas
- **Status:** 📋 A FAZER
- **Descrição:** Adicionar botão de exportar relatórios em PDF
- **Relatórios:**
  - [ ] Margem de Lucro
  - [ ] Desperdício
  - [ ] Estoque
- **Biblioteca:** jsPDF ou ReportLab
- **Arquivo:** Múltiplos componentes

#### Task 5.2.2: Integração com Google Sheets
- **ID:** INT-002
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Sincronizar dados com Google Sheets
- **Fluxo:**
  - [ ] Autenticar com Google
  - [ ] Exportar estoque para planilha
  - [ ] Importar preços de planilha
- **Arquivo:** `server/_core/googleSheets.ts` (novo)

#### Task 5.2.3: Notificações por Email/WhatsApp
- **ID:** INT-003
- **Prioridade:** 🟡 MÉDIA
- **Esforço:** 6 horas
- **Status:** 📋 A FAZER
- **Descrição:** Enviar alertas por email ou WhatsApp
- **Alertas:**
  - [ ] Estoque baixo
  - [ ] Ordem concluída
  - [ ] Relatório diário
- **Serviços:**
  - [ ] SendGrid (email)
  - [ ] Twilio (WhatsApp)
- **Arquivo:** `server/_core/notifications.ts` (novo)

---

## 📊 RESUMO DO BACKLOG

| Fase | Sprints | Tasks | Horas | Status |
|------|---------|-------|-------|--------|
| 1 | 2 | 8 | 27h | 📋 A FAZER |
| 2 | 2 | 9 | 22h | 📋 A FAZER |
| 3 | 3 | 8 | 35h | 📋 A FAZER |
| 4 | 2 | 5 | 17h | 📋 A FAZER |
| 5 | 2 | 6 | 27h | 📋 A FAZER |
| **TOTAL** | **11** | **36** | **128h** | **📋 A FAZER** |

---

## 🎯 PRÓXIMAS AÇÕES

1. **Hoje:** Revisar e aprovar backlog
2. **Amanhã:** Iniciar Task 1.1.1 (Corrigir Cache)
3. **Esta semana:** Completar Sprint 1.1
4. **Próxima semana:** Iniciar Sprint 1.2 + Sprint 2.1 (paralelo)

---

## 📝 LEGENDA

- 🔴 CRÍTICA: Bloqueia outras funcionalidades
- 🟠 ALTA: Importante para MVP
- 🟡 MÉDIA: Melhoria desejável
- 🟢 BAIXA: Nice to have
- 📋 A FAZER: Não iniciado
- 🔄 EM PROGRESSO: Sendo feito
- ✅ CONCLUÍDO: Pronto para produção

