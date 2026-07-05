# Spec: 1K Miles of Hope — Challenge Page Redesign

**Data:** 2026-07-05  
**Rota:** `/[locale]/challenges/1k-miles-of-hope`  
**Público-alvo:** Doadores individuais, empresas, parceiros — apresentação rápida (90 segundos de leitura)  
**Modal em `/challenges`:** Não muda.

---

## Princípio de design

Cada seção = 1 ideia. Apresentação-style: dado central em tipografia grande + 1–2 linhas de contexto + nenhum parágrafo longo. O visitante lê em scroll contínuo como se avançasse slides. A cadeia narrativa é sempre: **doação → pesquisa → tratamento → paciente → família**.

---

## Seções (ordem de cima para baixo)

### 1. Header existente
Nome, tagline, imagem. Não muda.

---

### 2. Tracker de Progresso *(client component — Framer Motion)*

Três métricas com contador animado (0 → valor atual) na entrada do viewport:

| Métrica | Label | Meta |
|---|---|---|
| Dias completados | DAYS | 100 |
| Milhas percorridas | MILES | 1.000 |
| — | — | — |

Barra horizontal preenchida proporcional ao % de milhas concluídas. Cor: accent `rgb(212,119,90)`.

**Dados em `challenges.ts`:**
```ts
progress: {
  daysCompleted: number
  milesRun: number
  goalDays: 100
  goalMiles: 1000
  lastUpdated: string // "2026-07-05"
}
```
Atualizado manualmente. Rótulos de UI (`DAYS`, `MILES`, `GOAL`, `LAST UPDATED`) em `messages/[locale].json`.

---

### 3. O número que muda tudo *(stats do câncer)*

Bloco de stats em tipografia grande — estilo "slide com dado único":

```
20M
Novos casos de câncer diagnosticados por ano no mundo.
```
```
698
Brasileiros morrem de câncer por dia.
```
```
1 em cada 5
pessoas desenvolve câncer ao longo da vida.
```
```
400.000
crianças e adolescentes diagnosticados por ano.
```

Fontes: OMS (2024), INCA (2026). Dados em `challenges.ts` como array de `{ stat, label, source }` com traduções.

---

### 4. Por que a cura é difícil

Bloco único, sem lista:

```
Câncer não é uma doença. São mais de 200.
Cada tumor tem mutações únicas que evoluem enquanto você trata.
O alvo muda. O tratamento para de funcionar.
É por isso que pesquisa nunca termina.
```

Versão PT/EN/ES/FR/CA em `challenges.ts`.

---

### 5. Taxas de letalidade

Contraste visual entre os tipos mais curáveis e mais letais — formato de duas colunas ou lista tipográfica:

```
Tireoide    98% de sobrevivência em 5 anos
Próstata    98%
Mama        ~90% (detectado cedo)
─────────────────────────────────────
Cérebro     36%
Pulmão      28%
Pâncreas    13%   ← estágio IV: 3%
```

Linha de fechamento:
```
A diferença entre 98% e 3% chama-se pesquisa.
```

Fonte: American Cancer Society, Cancer Statistics 2025/2026.

---

### 6. Quem sobreviveu. Quem não voltou.

Três pares de nomes reais e públicos — sem drama, só fatos:

**Sobreviveram:**
- Shannon Miller — ginasta olímpica, câncer de ovário (2011)
- Robin Roberts — jornalista, câncer de mama + síndrome mielodisplástica
- Fran Drescher — câncer uterino, hoje ativista de pesquisa

**Não voltaram:**
- Chadwick Boseman — ator, câncer de cólon, 43 anos
- Patrick Swayze — câncer pancreático
- David Bowie — câncer de fígado, 18 meses após diagnóstico

Linha de fechamento:
```
O que separa os dois grupos nem sempre é força de vontade.
Muitas vezes, é acesso a pesquisa que existia — ou que ainda não existia.
```

---

### 7. Por que eu corro

Tom: primeira pessoa, presente, documentário. Sem inspiracionalismo.

Narrativa em três blocos curtos:

**Bloco 1 — O pai:**
2016 e 2017. Acompanho meu pai ao hospital. Leio a palavra "câncer" no prontuário dele. Fico imóvel. Já vi essa palavra levar quatro tios e tias. Mas desta vez é diferente — é ele. Com o tempo entendo que nem todo câncer é igual. Ele se recupera. Precisa remover alguns crescimentos. Volta a ser ele mesmo. Mas você não esquece de ter lido essa palavra ao lado do nome de quem você ama.

**Bloco 2 — O primo:**
No dia do meu aniversário de 27 anos, recebo uma ligação. Meu primo de 26 anos morreu de câncer de próstata. Eu nunca tinha o conhecido pessoalmente. Ele tinha 26 anos.

**Bloco 3 — A decisão:**
É por isso que estou correndo. Não por heroísmo. Porque alguém precisa fazer alguma coisa enquanto ainda pode.

Versão completa em PT. Traduzida para EN/ES/FR/CA em `challenges.ts`.

---

### 8. Em pé sobre os ombros de Terry Fox

```
1977. Terry Fox tem 18 anos.
Diagnóstico: câncer ósseo. Amputação da perna direita.
```
```
1980. Ele começa a correr do Atlântico ao Pacífico.
Uma maratona por dia. Com prótese.
143 dias consecutivos.
```
```
O câncer chegou aos pulmões. Ele parou.
Morreu em 28 de junho de 1981.
```
```
Desde então: C$ 1 bilhão arrecadados.
Corridas em mais de 60 países.
O maior arrecadador de um dia para pesquisa do câncer no mundo.
```

Linha de fechamento:
```
Eu não inventei nada. Estou seguindo alguém que começou antes.
```

---

### 9. Como o mundo muda com a cura

Dois dados, uma imagem humana:

```
US$ 185 trilhões
Estimativa do ganho econômico de uma cura para o câncer.
```

Mas o enquadramento principal é humano:
```
Um pai que chega em casa.
Uma mãe que vê o filho crescer.
Uma pessoa que não recebe a ligação que eu recebi no meu aniversário.
```

---

### 10. Sua doação. Resultado real.

Princípio: doação → pesquisa → tratamento → paciente → família. Sem dado de multiplicador econômico.

**Sub-bloco A — O que a doação faz:**
```
78% do que você doa vai direto para o laboratório.
O que sai de lá não é um relatório.
É um tratamento que ainda não existe — e que pode salvar
alguém que você conhece.
```

**Sub-bloco B — O dinheiro fica no seu país:**
```
Cada real doado no Brasil vai para pesquisadores brasileiros.
Não para fora.
```
Exemplos do modelo Terry Fox International:
- Índia → TATA Memorial Centre
- Reino Unido → Institute of Cancer Research, Londres
- Austrália → Sydney Children's Hospital

**Sub-bloco C — Metas escaláveis:**

Barra de progresso visual com os níveis:

| Meta | Valor |
|---|---|
| Inicial | US$ 10.000 |
| Extensão 1 | US$ 50.000 |
| Extensão 2 | US$ 100.000 |
| Extensão 3 | US$ 1.000.000 |

Dados em `challenges.ts → fundraisingGoals: { current, tiers[] }`.

**CTA principal:**
```
[Doar agora →]
```
Link: `https://international.terryfox.ca/page/1k-miles-of-hope`

---

### 11. Posts do blog relacionados

Server-side: `getAllPosts()` filtrado por grupo `"Live Projects/1K Miles of Hope Project"`.  
Grid horizontal de cards (Ep. 00–03). Links via `post.lang` para abrir no idioma correto.  
Label: "DIÁRIO DA CORRIDA" / "RUNNING LOG" / etc. em `messages/[locale].json`.

---

### 12. Vídeos

Grid 2 colunas. Lógica de ordenação:
- Se locale = `pt` → vídeo PT primeiro (`XW-PPAL0m7Q`), depois EN
- Demais locales → EN primeiro (`iCRzdi6TlWY`, `0gsa4VxkNQw`, `l-vBjkI9evE`), PT por último

IDs em `challenges.ts → videos: { id, lang, title }[]`.

---

### 13. FAQ *(accordion compacto)*

Campos em `challenges.ts → faqs[]` com traduções por locale.

Perguntas iniciais (EN):

1. "Does money raised in Brazil go to Brazilian researchers?" → Sim, modelo Terry Fox International garante alocação local.
2. "What is the fundraising goal?" → Meta inicial US$ 10.000. Pode escalar para US$ 50.000 / US$ 100.000 / US$ 1.000.000 conforme o projeto crescer.
3. "Can I donate if I'm outside Brazil?" → Sim. O modelo aplica para qualquer país — o dinheiro vai para pesquisadores do país do doador.
4. "How can I follow the running progress?" → Esta página é atualizada manualmente. Os episódios do diário estão no blog.
5. "Who is the Terry Fox Foundation?" → Fundação canadense criada em honra a Terry Fox. Desde 1981, C$ 1 bilhão arrecadados, corridas em +60 países.

---

## Arquitetura técnica

### Dados (`challenges.ts`)

Novos campos opcionais na interface `Challenge`:

```ts
progress?: {
  daysCompleted: number
  milesRun: number
  goalDays: number
  goalMiles: number
  lastUpdated: string
}
fundraisingGoals?: {
  current: number
  currency: string
  tiers: { label: string; amount: number }[]
}
videos?: { id: string; lang: string; title: string }[]
faqs?: { question: string; answer: string }[]
// faqs já existe na interface — confirmar e expandir
```

Traduções das seções narrativas (cancerStats, whyItsHard, letteralityRates, whyIRun, terryFox, worldWithCure, donationImpact) adicionadas ao campo `pt?/es?/fr?/ca?` de `1k-miles-of-hope`.

### Componentes

| Componente | Tipo | Arquivo |
|---|---|---|
| `ChallengeProgressTracker` | Client (Framer Motion) | `components/challenges/ProgressTracker.tsx` |
| `ChallengeCancerStats` | Server | `components/challenges/CancerStats.tsx` |
| `ChallengeLethalityTable` | Server | `components/challenges/LethalityTable.tsx` |
| `ChallengeNarrative` | Server | `components/challenges/Narrative.tsx` |
| `ChallengeFundraisingGoals` | Client (barra animada) | `components/challenges/FundraisingGoals.tsx` |
| `ChallengeVideoGrid` | Client | `components/challenges/VideoGrid.tsx` |
| `ChallengeRelatedPosts` | Server | `components/challenges/RelatedPosts.tsx` |
| `ChallengeFAQ` | Client (accordion) | `components/challenges/FAQ.tsx` |

### i18n

- Rótulos de UI (`DAYS`, `MILES`, `GOAL`, `RUNNING LOG`, `FAQ`, etc.) → `messages/[locale].json`
- Conteúdo narrativo (stats, textos das seções) → `challenges.ts` campos `pt?/es?/fr?/ca?`
- Números são locale-neutros

### Não muda

- Modal preview em `/challenges`
- `getLocalizedChallenge()` — só adiciona campos novos
- Layout/wrapper da página `[slug]/page.tsx` — adiciona seções abaixo do header existente

---

## Fontes dos dados

- OMS Cancer Fact Sheet 2024: who.int
- INCA Estimativa 2026-2028: gov.br/inca
- American Cancer Society, Cancer Statistics 2025/2026
- Terry Fox Foundation Impact Report 2024/2025: impact.terryfox.org
- Terry Fox International — modelo de alocação local confirmado via terryfox.org
- SMU/Fox News: estimativa de US$ 185T (cura econômica)
