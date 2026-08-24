# Backlog técnico

Itens levantados durante a investigação da falha de agosto/2026 (cadeia SSL incompleta
congelando o conteúdo do site). **Nenhum deles foi reportado pelo cliente e nenhum é
falha ativa** — são melhorias e riscos latentes, registrados para não se perderem.

Contexto da correção que foi feita: `src/utils/env.js` e `src/utils/fetch.js` passaram a
separar a URL interna (`STRAPI_INTERNAL_URL`, usada no servidor) da pública
(`NEXT_PUBLIC_API_URL`, usada no navegador).

---

## 1. Listagem do blog ordena por data de criação, não de publicação

**Prioridade: alta** — é o único item que pode reproduzir a queixa original do cliente.

`src/pages/blog/index.js` usa `sort=createdAt:DESC`. Um post cujo rascunho foi criado
semanas antes aparece no meio da lista ao ser publicado, em vez de no topo. Já acontece
hoje: o post `leideincentivoareciclagem` (criado 16/07/2024) aparece acima de
`logistica_reversa_rj` (publicado 22/07/2024).

Trocar para `publishedAt:DESC`, ou para o campo `date` que os cards já exibem. Verificar
também `src/pages/blog/categorias/[slug].js` e o `RecentPosts` da home.

## 2. `fetchAPI` não verifica se a resposta deu certo

**Prioridade: alta** — é o que fez seis meses de conteúdo parado passarem despercebidos.

`src/utils/fetch.js` chama `response.json()` direto. Quando a API responde erro (403, 500,
HTML de erro), o resultado vira um erro de parse confuso, sem indicação da causa real.

Checar `response.ok` e lançar erro com URL e status. Um alerta simples que compare o total
de posts da API com o que o site publica evitaria uma repetição silenciosa.

## 3. Página de post devolve 500 em vez de 404

**Prioridade: média**

`src/pages/blog/posts/[slug].js` faz `singlePost[0].attributes` sem guarda. Slug inexistente
derruba a renderização com erro 500. Deveria retornar `{ notFound: true }`.

Ruim para SEO e para diagnóstico: durante a investigação, esse 500 se confundiu com a falha
real de certificado.

## 4. `getStaticPaths` pré-gera só 25 dos 27 posts

**Prioridade: baixa**

A chamada em `src/pages/blog/posts/[slug].js` não passa paginação, então herda o
`defaultLimit: 25` configurado no Strapi (`config/api.js`). Não quebra nada — o
`fallback: 'blocking'` gera o resto sob demanda — mas os posts fora do limite só passam a
existir depois do primeiro acesso, que é mais lento.

Passar `pagination[pageSize]` explícito (respeitando `maxLimit: 100`).

## 5. Imagens no corpo do post: risco latente

**Prioridade: baixa** — não afeta nenhum post hoje.

`src/components/post/Body/index.js` só reescreve `/uploads` para o caminho do Strapi quando
`env === 'dev'`. Em produção, uma imagem inserida pelo editor com caminho relativo apontaria
para `https://pegadaneutra.com.br/uploads/...`, que retorna 404 (o correto tem o prefixo
`/strapi`).

Verificado em 24/08/2026: **0 de 27 posts** têm imagem embutida no corpo, então nada está
quebrado. Mas quebra no dia em que alguém inserir uma imagem pelo CKEditor. Remover a
condição `env === 'dev'`.

## 6. Node 16 sem suporte

**Prioridade: média** — segurança.

O site roda em Node 16.20.2, sem suporte desde setembro de 2023. O servidor já tem 18.20.8 e
20.11.1 instalados via nvm. Testar o build em 18 antes de trocar o que o PM2 usa.

Encadeia com o aviso do próprio WHM: o servidor está em CentOS 7, cujo suporte estendido
termina em 1º de janeiro de 2027.

## 7. Imagens ainda dependem do TLS público

**Prioridade: baixa** — mitigado, mas não eliminado.

A blindagem da etapa 3 tirou o TLS público do caminho da geração de páginas, mas o
otimizador do `next/image` continua buscando as imagens pela URL pública. Se a cadeia
quebrar de novo, o texto do site continua atualizando, mas as imagens do Strapi voltam a
falhar.

Alternativa, se quiser eliminar de vez: servir os uploads do Strapi por caminho local
(symlink de `public/`), tornando as imagens locais para o otimizador.
