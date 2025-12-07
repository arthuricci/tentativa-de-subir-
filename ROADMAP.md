# ROADMAP ESTRATÉGICO - Entremet OS

**Versão:** 1.0  
**Data de Criação:** 27 de Novembro de 2025  
**Horizonte:** 6 meses

---

## 🎯 VISÃO GERAL

Transformar Entremet OS de um MVP funcional para uma plataforma de gestão de confeitaria **pronta para produção** com foco em:
1. Estabilidade e confiabilidade
2. Experiência do usuário
3. Inteligência de negócios (dashboards/relatórios)
4. Escalabilidade

---

## 📅 FASES DO ROADMAP

### FASE 1: CONSOLIDAÇÃO (Semanas 1-2) - CRÍTICA
**Objetivo:** Corrigir bugs críticos e estabilizar o MVP

#### Sprint 1.1: Correções Críticas
- [ ] **Bug #1:** Implementar invalidação de cache ao editar compra
  - Impacto: Alto (afeta cálculo de preço médio)
  - Esforço: 2-3 horas
  - Bloqueador: Nenhum
  
- [ ] **Bug #2:** Integrar Produtos ↔ Fichas Técnicas
  - Impacto: Alto (funcionalidade incompleta)
  - Esforço: 4-6 horas
  - Bloqueador: Nenhum
  - Tarefas:
    - Criar tabela `produto_ficha_tecnica` (N:N)
    - Adicionar campo em Produtos para selecionar fichas
    - Atualizar cálculo de custo de produção

- [ ] **Testes Automatizados (Vitest)**
  - Impacto: Médio (confiabilidade)
  - Esforço: 6-8 horas
  - Bloqueador: Nenhum
  - Cobertura mínima: 60% (funções críticas)

**Resultado esperado:** MVP estável, sem bugs críticos, com testes

---

### FASE 2: EXPERIÊNCIA DO USUÁRIO (Semanas 3-4)
**Objetivo:** Melhorar interface e usabilidade

#### Sprint 2.1: Redesign de Componentes
- [ ] Converter Lista de Compras de tabela para cards
  - Impacto: Médio (UX)
  - Esforço: 3-4 horas

- [ ] Adicionar confirmação visual em operações críticas
  - Impacto: Médio (segurança UX)
  - Esforço: 2-3 horas

- [ ] Implementar breadcrumbs em todas as páginas
  - Impacto: Baixo (navegação)
  - Esforço: 1-2 horas

#### Sprint 2.2: Melhorias de Formulários
- [ ] Validação em tempo real em todos os formulários
  - Impacto: Médio (UX)
  - Esforço: 4-5 horas

- [ ] Adicionar atalhos de teclado (Ctrl+S para salvar)
  - Impacto: Baixo (produtividade)
  - Esforço: 2-3 horas

**Resultado esperado:** Interface mais intuitiva e responsiva

---

### FASE 3: INTELIGÊNCIA DE NEGÓCIOS (Semanas 5-8)
**Objetivo:** Fornecer insights para decisões de negócio

#### Sprint 3.1: Dashboard Principal
- [ ] KPI Cards (resumo executivo)
  - Estoque total em R$
  - Número de ordens em andamento
  - Desperdício do mês
  - Margem média de lucro

- [ ] Gráficos de Tendência
  - Estoque ao longo do tempo (linha)
  - Desperdício por motivo (pizza)
  - Produtos mais vendidos (barra)

**Esforço:** 8-10 horas  
**Impacto:** Alto (decisões de negócio)

#### Sprint 3.2: Relatórios
- [ ] Relatório de Margem de Lucro
  - Custo total da receita
  - Preço de venda do produto
  - Margem líquida
  - Filtros por período/produto

- [ ] Relatório de Desperdício Detalhado
  - Insumo mais desperdiçado
  - Motivos mais comuns
  - Custo total de desperdício
  - Tendências

**Esforço:** 6-8 horas  
**Impacto:** Alto (controle de custos)

#### Sprint 3.3: Análise de Estoque
- [ ] Previsão de falta de estoque
  - Baseado em consumo histórico
  - Alertas automáticos

- [ ] Otimização de compras
  - Sugestão de quantidade ideal
  - Melhor preço por unidade

**Esforço:** 8-10 horas  
**Impacto:** Médio (otimização)

**Resultado esperado:** Dashboard e 3 relatórios principais implementados

---

### FASE 4: ESCALABILIDADE & PERFORMANCE (Semanas 9-10)
**Objetivo:** Preparar para crescimento

#### Sprint 4.1: Otimização de Banco de Dados
- [ ] Adicionar índices em queries frequentes
  - Impacto: Alto (performance)
  - Esforço: 2-3 horas

- [ ] Implementar paginação em listas grandes
  - Impacto: Médio (UX com muitos dados)
  - Esforço: 3-4 horas

- [ ] Cache de queries com React Query
  - Impacto: Alto (performance)
  - Esforço: 4-5 horas

#### Sprint 4.2: Testes de Carga
- [ ] Teste com 10k+ registros
  - Impacto: Médio (confiabilidade)
  - Esforço: 2-3 horas

- [ ] Identificar gargalos
  - Impacto: Alto (otimização)
  - Esforço: 2-3 horas

**Resultado esperado:** Aplicação otimizada e testada sob carga

---

### FASE 5: FEATURES AVANÇADAS (Semanas 11-12)
**Objetivo:** Diferenciais competitivos

#### Sprint 5.1: Automações
- [ ] Gerar lista de compras automaticamente
  - Baseado em estoque mínimo
  - Consolidar múltiplos fornecedores

- [ ] Alertas automáticos
  - Estoque baixo
  - Produtos próximos do vencimento
  - Ordens atrasadas

**Esforço:** 6-8 horas  
**Impacto:** Alto (eficiência)

#### Sprint 5.2: Integrações
- [ ] Exportar relatórios em PDF
  - Impacto: Médio (usabilidade)
  - Esforço: 2-3 horas

- [ ] Integração com planilhas (Google Sheets)
  - Impacto: Médio (integração)
  - Esforço: 4-6 horas

- [ ] Notificações por email/WhatsApp
  - Impacto: Médio (comunicação)
  - Esforço: 4-6 horas

**Resultado esperado:** Automações e integrações funcionando

---

## 📊 MATRIZ DE PRIORIZAÇÃO

| Feature | Impacto | Esforço | Prioridade | Fase |
|---------|---------|---------|-----------|------|
| Corrigir cache | Alto | 3h | 🔴 CRÍTICA | 1 |
| Integrar Produtos ↔ Fichas | Alto | 5h | 🔴 CRÍTICA | 1 |
| Testes Automatizados | Médio | 8h | 🟠 ALTA | 1 |
| Dashboard KPI | Alto | 10h | 🟠 ALTA | 3 |
| Relatório Margem | Alto | 8h | 🟠 ALTA | 3 |
| Redesign Cards | Médio | 4h | 🟡 MÉDIA | 2 |
| Otimização BD | Alto | 5h | 🟠 ALTA | 4 |
| Automações | Alto | 8h | 🟡 MÉDIA | 5 |
| Exportar PDF | Médio | 3h | 🟡 MÉDIA | 5 |

---

## 🎯 OBJETIVOS POR FASE

| Fase | Objetivo | Métrica de Sucesso |
|------|----------|-------------------|
| 1 | Estabilidade | 0 bugs críticos, 60% testes |
| 2 | UX | NPS > 7, tempo médio tarefa < 2min |
| 3 | BI | 3 dashboards, 3 relatórios |
| 4 | Performance | Resposta < 500ms, suporta 10k registros |
| 5 | Automação | 5 automações, 2 integrações |

---

## 📈 MÉTRICAS DE SUCESSO

### Técnicas
- ✅ Cobertura de testes: 60% → 80%
- ✅ Tempo de resposta: < 500ms
- ✅ Uptime: > 99.5%
- ✅ Bugs críticos: 0

### Negócio
- ✅ Tempo de processamento de pedido: -30%
- ✅ Desperdício controlado: -20%
- ✅ Margem de lucro clara: +15%
- ✅ Satisfação do usuário: NPS > 7

---

## 🚨 RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|--------|-----------|
| Supabase downtime | Baixa | Alto | Implementar retry logic, backup |
| Dados corrompidos | Muito Baixa | Crítico | Backup diário, RLS policies |
| Performance degrada | Média | Médio | Índices, cache, paginação |
| Mudança de requisitos | Alta | Médio | Reuniões semanais, feedback |

---

## 💰 ESTIMATIVA DE RECURSOS

| Fase | Semanas | Horas | Dev | QA |
|------|---------|-------|-----|-----|
| 1 | 2 | 16 | 1 | 0.5 |
| 2 | 2 | 12 | 1 | 0.5 |
| 3 | 4 | 32 | 1 | 1 |
| 4 | 2 | 12 | 1 | 1 |
| 5 | 2 | 20 | 1 | 0.5 |
| **TOTAL** | **12** | **92** | **1** | **3.5** |

---

## 📋 DEPENDÊNCIAS ENTRE FASES

```
FASE 1 (Consolidação)
    ↓
FASE 2 (UX) + FASE 3 (BI) [paralelo]
    ↓
FASE 4 (Performance)
    ↓
FASE 5 (Features Avançadas)
```

---

## 🔄 PROCESSO DE REVISÃO

- **Semanal:** Reunião de status (30min)
- **Bi-semanal:** Sprint review (1h)
- **Mensal:** Roadmap review e ajustes

---

## ✅ CRITÉRIOS DE CONCLUSÃO

Uma fase é considerada **CONCLUÍDA** quando:
1. ✅ Todas as tarefas estão 100% implementadas
2. ✅ Testes passando (mínimo 80% cobertura)
3. ✅ Code review aprovado
4. ✅ Documentação atualizada
5. ✅ Testado em produção (ou staging)

---

## 📞 PRÓXIMOS PASSOS

1. **Hoje:** Aprovação do roadmap
2. **Amanhã:** Iniciar Sprint 1.1 (Correções Críticas)
3. **Semana 1:** Completar todas as correções
4. **Semana 2:** Implementar testes automatizados
5. **Semana 3:** Iniciar Sprint 2.1 (UX)

