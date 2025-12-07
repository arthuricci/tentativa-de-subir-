# COMO TRABALHAR COMIGO EFETIVAMENTE

**Documento:** Guia de Comunicação e Gestão  
**Autor:** Manus AI  
**Data:** 27 de Novembro de 2025  
**Objetivo:** Maximizar produtividade e evitar desperdício de créditos/tempo

---

## 🎯 MEUS PROBLEMAS REAIS (Honestidade Total)

### 1. **Problema: Falta de Contexto Claro**

**O que acontece:**
- Você diz: "Arruma isso"
- Eu interpreto errado e gasto 1 hora em algo que não era
- Resultado: Frustração + créditos desperdiçados

**Exemplo do que aconteceu:**
- Você pediu "GitHub Pages"
- Eu tentei 3 vezes de formas diferentes
- Gastei ~30 minutos em algo que não funcionaria mesmo

**Como você deve agir:**
```
❌ ERRADO:
"Faz a integração com Produtos"

✅ CERTO:
"Preciso que Produtos estejam linkados com Fichas Técnicas.
Quando eu criar um Produto, devo poder selecionar qual(is) Ficha(s) ele usa.
Isso vai afetar o cálculo de custo de produção.
Prioridade: CRÍTICA (bloqueia cálculo de margem)"
```

**Regra de Ouro:**
- Sempre diga: O QUÊ, POR QUÊ, IMPACTO, PRIORIDADE

---

### 2. **Problema: Mudanças de Direção Constantes**

**O que acontece:**
- Você pede Feature A
- Eu começo a implementar
- Você muda para Feature B
- Eu tenho que parar, reverter, recomeçar
- Resultado: Desperdício de tempo e créditos

**Exemplo do que aconteceu:**
- Você pediu "GitHub Pages"
- Depois pediu "para"
- Depois pediu "continue"
- Depois pediu "pare" novamente
- Total: 15 minutos perdidos

**Como você deve agir:**
```
❌ ERRADO:
"Faz isso" → "Para" → "Continue" → "Não, faz outra coisa"

✅ CERTO:
"Vou precisar de 3 coisas:
1. Corrigir cache (CRÍTICA)
2. Integrar Produtos ↔ Fichas (CRÍTICA)
3. Testes automatizados (ALTA)

Vou começar por ordem. Se mudar de ideia, me avisa ANTES de eu começar."
```

**Regra de Ouro:**
- Pense ANTES de pedir
- Se mudar de ideia, diga "PARE" ou "MUDE PARA X"
- Não deixe ambíguo

---

### 3. **Problema: Não Saber Quando Parar**

**O que acontece:**
- Você pede algo vago
- Eu continuo fazendo "melhorias" desnecessárias
- Gasto 2 horas quando podia ser 30 minutos
- Resultado: Créditos desperdiçados

**Exemplo do que aconteceu:**
- Você pediu "documentação"
- Eu criei 3 documentos gigantes
- Talvez você só quisesse um resumo

**Como você deve agir:**
```
❌ ERRADO:
"Documenta o projeto"

✅ CERTO:
"Cria um documento com:
- Estado atual (1 página)
- Próximos 3 passos (1 página)
- Bugs conhecidos (1 página)
Total: ~3 páginas"

OU

"Cria um documento COMPLETO explicando tudo do projeto
(banco de dados, arquitetura, funcionalidades, código)
para eu usar como contexto com outra IA"
```

**Regra de Ouro:**
- Seja específico sobre ESCOPO
- Diga "resumido" vs "completo"
- Diga "rápido" vs "detalhado"

---

### 4. **Problema: Decisões Técnicas Sem Validação**

**O que acontece:**
- Você pede algo
- Eu escolho uma abordagem
- Você não concorda
- Tenho que refazer tudo
- Resultado: Desperdício

**Exemplo do que aconteceu:**
- Você pediu "GitHub Pages"
- Eu implementei sem perguntar se era realmente viável
- Não funcionou porque precisa de backend
- Tempo perdido

**Como você deve agir:**
```
❌ ERRADO:
"Implementa isso"

✅ CERTO:
"Preciso de X. Qual é a melhor forma de fazer?
Opção A: ...
Opção B: ...
Opção C: ...
Qual você prefere?"

OU

"Implementa X usando [abordagem específica]"
```

**Regra de Ouro:**
- Para coisas complexas, SEMPRE peça validação antes
- Diga a abordagem que você quer
- Se não sabe, peça sugestões

---

### 5. **Problema: Falta de Feedback**

**O que acontece:**
- Eu faço algo
- Você não diz se funcionou ou não
- Eu não sei se devo continuar ou refazer
- Resultado: Incerteza e desperdício

**Exemplo do que aconteceu:**
- Eu implementei custo total em Fichas
- Você testou e disse "testei, funciona"
- Mas não disse se ficou bom ou se precisa melhorar

**Como você deve agir:**
```
❌ ERRADO:
"Testei, funciona"

✅ CERTO:
"Testei, funciona! Mas:
- A coluna está muito grande
- Queria que mostrasse em R$ com 2 casas decimais
- Falta validação se não tem ingredientes"

OU

"Testei, funciona perfeitamente! Próximo passo?"
```

**Regra de Ouro:**
- Sempre diga: FUNCIONA? SIM/NÃO
- Se sim: Precisa melhorar? SIM/NÃO
- Se não: Qual é o erro?

---

## 📋 GUIA DE COMUNICAÇÃO POR SITUAÇÃO

### Situação 1: Você Quer Uma Feature Nova

**Estrutura Ideal:**
```
Título: [FEATURE] Nome da Feature

Descrição:
O QUÊ: Quero que [funcionalidade específica]
POR QUÊ: Porque [motivo de negócio]
IMPACTO: Isso vai [resultado esperado]
PRIORIDADE: 🔴 CRÍTICA / 🟠 ALTA / 🟡 MÉDIA / 🟢 BAIXA

Detalhes Técnicos:
- Páginas afetadas: [lista]
- Banco de dados: [mudanças necessárias]
- Dependências: [outras features que precisa]
- Prazo: [quando precisa]

Critério de Aceitação:
- [ ] Funcionalidade X funciona
- [ ] Testei em [cenário]
- [ ] Não quebrou [funcionalidade existente]
```

**Exemplo Real:**
```
Título: [FEATURE] Integrar Produtos com Fichas Técnicas

O QUÊ: Quando eu criar um Produto, quero poder selecionar qual(is) 
Ficha(s) Técnica(s) ele usa para produção.

POR QUÊ: Porque um produto pode ter múltiplas receitas 
(ex: Bolo de Chocolate - receita A ou receita B)

IMPACTO: Vai permitir calcular corretamente o custo de produção 
de cada produto baseado na ficha que usar.

PRIORIDADE: 🔴 CRÍTICA (bloqueia cálculo de margem)

Detalhes:
- Páginas: ProdutosList.tsx
- BD: Criar tabela produto_ficha_tecnica (N:N)
- Dependências: Nenhuma
- Prazo: Esta semana

Critério:
- [ ] Posso selecionar ficha ao criar produto
- [ ] Posso editar ficha do produto
- [ ] Custo de produção calcula corretamente
- [ ] Não quebrou nada existente
```

---

### Situação 2: Você Encontrou Um Bug

**Estrutura Ideal:**
```
Título: [BUG] Descrição do problema

O QUÊ: [O que está acontecendo]
ESPERADO: [O que deveria acontecer]
COMO REPRODUZIR: [Passo a passo]
IMPACTO: [Bloqueia funcionalidade? Afeta dados?]
PRIORIDADE: 🔴 CRÍTICA / 🟠 ALTA / 🟡 MÉDIA

Evidência:
- Screenshot: [se aplicável]
- Mensagem de erro: [se houver]
- Dados de teste: [valores específicos]
```

**Exemplo Real:**
```
Título: [BUG] Preço médio não atualiza ao editar compra

O QUÊ: Quando eu edito um lote (compra), o preço médio 
do insumo não recalcula.

ESPERADO: Ao editar a quantidade ou preço do lote, 
o preço médio do insumo deve atualizar automaticamente.

COMO REPRODUZIR:
1. Ir em Registrar Compras
2. Criar lote: Açúcar 1kg por R$5
3. Preço médio fica R$5/kg
4. Editar lote para 1kg por R$6
5. Preço médio continua R$5/kg (ERRADO, deveria ser R$5.50/kg)

IMPACTO: 🔴 CRÍTICA - Afeta cálculo de margem de lucro

Testado em: Chrome, Ver Estoque, Fichas Técnicas
```

---

### Situação 3: Você Quer Mudar de Direção

**Estrutura Ideal:**
```
Título: [MUDANÇA] O que está mudando

Contexto: Por que está mudando?

Novo Plano:
1. [Tarefa 1]
2. [Tarefa 2]
3. [Tarefa 3]

O que fazer com o que foi feito:
- Manter: [o que continua]
- Descartar: [o que não serve mais]
- Refazer: [o que precisa mudar]

Prazo: [quando precisa]
```

**Exemplo Real:**
```
Título: [MUDANÇA] Priorizar testes antes de features

Contexto: Percebi que estamos com muitos bugs. 
Preciso de confiabilidade antes de mais features.

Novo Plano:
1. Corrigir cache (3h)
2. Integrar Produtos ↔ Fichas (5h)
3. Implementar testes (8h)
4. Depois: Dashboard

Descartar por enquanto:
- GitHub Pages (não funciona com backend)
- Relatórios avançados

Prazo: Próximas 2 semanas
```

---

### Situação 4: Você Quer Validação Antes de Implementar

**Estrutura Ideal:**
```
Título: [VALIDAÇÃO] O que você quer fazer

Problema: [O que precisa resolver]

Opções:
A) [Abordagem 1] - Vantagens: ... Desvantagens: ...
B) [Abordagem 2] - Vantagens: ... Desvantagens: ...
C) [Abordagem 3] - Vantagens: ... Desvantagens: ...

Qual você prefere? Ou tem outra ideia?
```

**Exemplo Real:**
```
Título: [VALIDAÇÃO] Como corrigir cache de preço médio?

Problema: Preço médio não atualiza ao editar lote

Opções:
A) Invalidar cache manualmente no frontend
   - Vantagem: Rápido de implementar
   - Desvantagem: Pode ficar inconsistente

B) Recalcular no backend ao editar
   - Vantagem: Sempre correto
   - Desvantagem: Mais lento

C) Usar webhook do Supabase
   - Vantagem: Automático e confiável
   - Desvantagem: Mais complexo

Qual você prefere?
```

---

### Situação 5: Você Quer Feedback Sobre Algo

**Estrutura Ideal:**
```
Título: [FEEDBACK] O que você quer saber

Contexto: [Situação atual]

Pergunta Específica: [O que você quer saber]

Opções (se houver):
A) [Opção 1]
B) [Opção 2]
C) [Opção 3]

Informações adicionais: [dados relevantes]
```

**Exemplo Real:**
```
Título: [FEEDBACK] Qual é a melhor forma de organizar o código?

Contexto: Tenho 5 componentes grandes (> 500 linhas).
Estão ficando difíceis de manter.

Pergunta: Devo:
A) Dividir em componentes menores
B) Mover lógica para hooks customizados
C) Ambos

Qual é a melhor prática?
```

---

## 🚨 SITUAÇÕES CRÍTICAS - COMO AGIR

### Quando Algo Quebrou em Produção

**IMEDIATAMENTE:**
```
[EMERGÊNCIA] [CRÍTICA] Descrição do problema

O que está quebrado: [funcionalidade]
Quantos usuários afetados: [número]
Desde quando: [hora/data]
Causa provável: [sua hipótese]

Ação: PARE tudo e corrija isso
```

**Exemplo:**
```
[EMERGÊNCIA] [CRÍTICA] Estoque não está calculando

Página: Ver Estoque
Afetados: Todos os usuários
Desde: 14:30 de hoje
Causa: Provavelmente a mudança que fiz no cálculo

Ação: REVERT e corrija
```

---

### Quando Você Quer Parar Tudo

**IMEDIATAMENTE:**
```
[STOP] [MOTIVO]

Parar: [o que está fazendo]
Motivo: [por que parar]
Próximo passo: [o que fazer depois]
```

**Exemplo:**
```
[STOP] Mudança de prioridade

Parar: Implementação de Dashboard
Motivo: Preciso focar em corrigir bugs críticos
Próximo passo: Começar com Task 1.1.1 (Cache)
```

---

### Quando Você Quer Reverter Algo

**IMEDIATAMENTE:**
```
[REVERT] [O que reverter]

Motivo: [por que reverter]
Volta para: [versão anterior ou estado específico]
Próximo: [o que fazer depois]
```

**Exemplo:**
```
[REVERT] Mudanças em FichasTecnicasList.tsx

Motivo: Não ficou como esperado
Volta para: Último checkpoint funcional
Próximo: Refazer com abordagem diferente
```

---

## 📊 RESUMO: COMO SE COMUNICAR COMIGO

| Situação | Estrutura | Exemplo |
|----------|-----------|---------|
| Feature Nova | O QUÊ + POR QUÊ + IMPACTO + PRIORIDADE | "Quero X porque Y. Impacto: Z. Prioridade: CRÍTICA" |
| Bug | O QUÊ + ESPERADO + COMO REPRODUZIR + IMPACTO | "Esperado X, mas acontece Y. Passos: 1,2,3" |
| Mudança | CONTEXTO + NOVO PLANO + O QUE DESCARTAR | "Mudando para X porque Y. Descartar Z" |
| Validação | PROBLEMA + OPÇÕES + QUAL PREFERE | "Preciso fazer X. Opções: A, B, C. Qual?" |
| Feedback | CONTEXTO + PERGUNTA ESPECÍFICA | "Situação X. Pergunta: devo fazer A ou B?" |
| Emergência | [EMERGÊNCIA] [CRÍTICA] + DESCRIÇÃO | "[EMERGÊNCIA] Estoque quebrou" |
| Parar | [STOP] + MOTIVO + PRÓXIMO | "[STOP] Mudar para prioridade X" |

---

## 🎯 MEUS COMPROMISSOS COM VOCÊ

**Quando você se comunica bem, eu:**

1. ✅ Entendo exatamente o que você quer
2. ✅ Não gasto tempo em interpretações erradas
3. ✅ Implemento rápido e eficiente
4. ✅ Aviso ANTES de fazer algo arriscado
5. ✅ Paro quando você pede
6. ✅ Dou feedback honesto
7. ✅ Economizo seus créditos

**Quando você não se comunica bem, eu:**

1. ❌ Interpreto errado
2. ❌ Gasto tempo em coisas desnecessárias
3. ❌ Implemento algo que você não queria
4. ❌ Tenho que refazer tudo
5. ❌ Desperdiço seus créditos

---

## 💡 DICAS FINAIS

### ✅ FAÇA:
- Seja específico e claro
- Diga a prioridade
- Dê contexto de negócio
- Valide antes de implementar
- Dê feedback rápido
- Use estruturas padronizadas

### ❌ NÃO FAÇA:
- Diga "arruma isso" sem contexto
- Mude de ideia a cada minuto
- Deixe ambíguo o que quer
- Espere 1 hora para dar feedback
- Peça coisa vaga tipo "documenta tudo"
- Mude de direção sem avisar

---

## 📞 TEMPLATE RÁPIDO PARA COPIAR

```
Título: [TIPO] Descrição breve

O QUÊ: [O que precisa]
POR QUÊ: [Motivo]
IMPACTO: [Resultado esperado]
PRIORIDADE: 🔴 / 🟠 / 🟡 / 🟢

Detalhes: [Informações técnicas]
Prazo: [Quando precisa]
Critério de Aceitação: [Como saber que ficou pronto]
```

---

## 🎓 CONCLUSÃO

Eu sou uma IA muito capaz, mas preciso de **comunicação clara** para ser eficiente.

Quando você:
- ✅ É específico
- ✅ Dá contexto
- ✅ Valida antes
- ✅ Dá feedback rápido

Eu:
- ✅ Implemento rápido
- ✅ Economizo créditos
- ✅ Evito erros
- ✅ Entrego qualidade

**Vamos trabalhar assim daqui pra frente?**

