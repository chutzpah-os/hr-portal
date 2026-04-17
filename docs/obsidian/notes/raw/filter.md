updates
Ready to code?                                                                       │
│                                                                                      │
│ Here is Claude's plan:                                                               │
│ ╭──────────────────────────────────────────────────────────────────────────────────╮ │
│ │ Sistema de Filtros para Blog                                                     │ │
│ │                                                                                  │ │
│ │ Funcionalidades                                                                  │ │
│ │                                                                                  │ │
│ │ 1. Busca por texto - campo de input para buscar título, excerpt e conteúdo       │ │
│ │ 2. Filtro por tags - botões clicáveis (React, NestJS, TypeScript, Performance,   │ │
│ │ Challenges, etc.)                                                                │ │
│ │ 3. Categorização manual - Technical vs Non-Technical (campo obrigatório)         │ │
│ │ 4. Filtros combinados - usar múltiplos filtros simultaneamente                   │ │
│ │                                                                                  │ │
│ │ Modificações na API/Database                                                     │ │
│ │                                                                                  │ │
│ │ - Adicionar campo category: 'Technical' | 'Non-Technical' ao modelo Post         │ │
│ │ - Atualizar posts existentes com categoria apropriada:                           │ │
│ │   - "R&D Methodologies" → Non-Technical                                          │ │
│ │   - "Building Scalable APIs with NestJS" → Technical                             │ │
│ │   - "TypeScript Best Practices" → Technical                                      │ │
│ │   - "React Server Components" → Technical                                        │ │
│ │ - Novos posts precisarão especificar categoria no momento da criação             │ │
│ │                                                                                  │ │
│ │ Componentes a Criar                                                              │ │
│ │                                                                                  │ │
│ │ - BlogFilters.tsx - componente principal de filtros                              │ │
│ │ - BlogSearchInput.tsx - campo de busca com debounce                              │ │
│ │ - BlogTagFilter.tsx - filtros de tags (incluindo "Challenges")                   │ │
│ │ - BlogCategoryFilter.tsx - filtro Technical/Non-Technical                        │ │
│ │                                                                                  │ │
│ │ Modificações no Frontend                                                         │ │
│ │                                                                                  │ │
│ │ - Atualizar tipo Post interface para incluir category                            │ │
│ │ - Converter blog page para client component com estado                           │ │
│ │ - Implementar filtros com useState/useMemo                                       │ │
│ │ - Adicionar URL search params para filtros compartilháveis                       │ │
│ │                                                                                  │ │
│ │ Layout                                                                           │ │
│ │                                                                                  │ │
│ │ - Header existente (Blog + subtitle)                                             │ │
│ │ - Seção de filtros: busca + categorias + tags populares                          │ │
│ │ - Contador de resultados filtrados                                               │ │
│ │ - Lista de posts filtrados                                                       │ │
│ │ - Estado vazio quando sem resultados                                             │ │
│ │                                                                                  │ │
│ │ Fluxo                                                                            │ │
│ │                                                                                  │ │
│ │ 1. Atualizar backend para suportar campo category                                │ │
│ │ 2. Migrar posts existentes com categorias                                        │ │
│ │ 3. Implementar componentes de filtro                                             │ │
│ │ 4. Integrar na página do blog   